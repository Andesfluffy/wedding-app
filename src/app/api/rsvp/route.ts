import { NextResponse } from "next/server";
import { Buffer } from "node:buffer";
import tls from "node:tls";

export const runtime = "nodejs";

type RsvpPayload = {
  fullName?: string;
  email?: string;
  phone?: string;
  attendance?: "yes" | "no";
  guests?: string | number;
  message?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as RsvpPayload;

    const fullName = body.fullName?.trim();
    const email = body.email?.trim();
    const phone = body.phone?.trim();
    const attendance = body.attendance;
    const message = body.message?.toString().trim() ?? "";
    const guestsValue =
      typeof body.guests === "number"
        ? body.guests
        : Number.parseInt((body.guests ?? "").toString(), 10);

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[+]?[-()\d\s]{7,20}$/;

    if (!fullName) {
      return NextResponse.json(
        { error: "Full name is required" },
        { status: 400 }
      );
    }

    if (!email || !emailPattern.test(email)) {
      return NextResponse.json(
        { error: "A valid email address is required" },
        { status: 400 }
      );
    }

    if (!phone || !phonePattern.test(phone)) {
      return NextResponse.json(
        { error: "A valid phone number is required" },
        { status: 400 }
      );
    }

    if (attendance !== "yes" && attendance !== "no") {
      return NextResponse.json(
        { error: "Attendance selection is required" },
        { status: 400 }
      );
    }

    if (!Number.isInteger(guestsValue) || guestsValue < 0 || guestsValue > 10) {
      return NextResponse.json(
        { error: "Guest count must be between 0 and 10" },
        { status: 400 }
      );
    }

    const entry = {
      fullName,
      email,
      phone,
      attendance,
      guests: guestsValue,
      message,
      submittedAt: new Date().toISOString(),
    };

    console.info("[RSVP]", entry);

    const delivered = await sendEmailToGmail(entry);

    return NextResponse.json({ ok: true, delivered });
  } catch (error) {
    console.error("[RSVP_ERROR]", error);
    return NextResponse.json(
      { error: "Unable to submit RSVP right now" },
      { status: 500 }
    );
  }
}

type RsvpEntry = {
  fullName: string;
  email: string;
  phone: string;
  attendance: "yes" | "no";
  guests: number;
  message: string;
  submittedAt: string;
};

async function sendEmailToGmail(entry: RsvpEntry) {
  const gmailUser = process.env.RSVP_GMAIL_USER;
  const gmailAppPassword = process.env.RSVP_GMAIL_APP_PASSWORD;
  const recipient = process.env.RSVP_RECIPIENT_EMAIL ?? gmailUser;
  const isProduction = process.env.NODE_ENV === "production";

  if (!gmailUser || !gmailAppPassword) {
    if (isProduction) {
      throw new Error("RSVP Gmail credentials are not configured");
    }
    console.warn(
      "[RSVP_DEV] Gmail credentials are not configured, skipping email delivery."
    );
    console.info("[RSVP_DEV] Submission", entry);
    return false;
  }

  if (!recipient) {
    if (isProduction) {
      throw new Error("RSVP recipient email is not configured");
    }
    console.warn(
      "[RSVP_DEV] RSVP recipient email is not configured, skipping email delivery."
    );
    console.info("[RSVP_DEV] Submission", entry);
    return false;
  }

  const socket = await createSmtpConnection({
    host: process.env.RSVP_GMAIL_SMTP_HOST ?? "smtp.gmail.com",
    port: Number(process.env.RSVP_GMAIL_SMTP_PORT ?? 465),
  });

  try {
    await expectResponse(socket);
    await sendCommand(socket, `EHLO ${process.env.RSVP_GMAIL_CLIENT_ID ?? "localhost"}`);
    await sendCommand(socket, "AUTH LOGIN");
    await sendCommand(socket, Buffer.from(gmailUser, "utf8").toString("base64"));
    await sendCommand(socket, Buffer.from(gmailAppPassword, "utf8").toString("base64"));
    await sendCommand(socket, `MAIL FROM:<${gmailUser}>`);
    await sendCommand(socket, `RCPT TO:<${recipient}>`);
    await sendCommand(socket, "DATA");

    const lines = [
      `From: "Wedding RSVP" <${gmailUser}>`,
      `To: ${recipient}`,
      `Subject: RSVP from ${entry.fullName}`,
      "MIME-Version: 1.0",
      "Content-Type: text/plain; charset=utf-8",
      "Content-Transfer-Encoding: 8bit",
      "",
      formatEntry(entry),
    ];

    socket.write(`${lines.join("\r\n")}\r\n.\r\n`);
    await expectResponse(socket);
    await sendCommand(socket, "QUIT");
  } finally {
    socket.end();
  }
  return true;
}

function formatEntry(entry: RsvpEntry) {
  return [
    `Name: ${entry.fullName}`,
    `Email: ${entry.email}`,
    `Phone: ${entry.phone}`,
    `Attendance: ${entry.attendance === "yes" ? "Attending" : "Not attending"}`,
    `Guests (including primary guest): ${entry.guests}`,
    "",
    "Message:",
    entry.message.trim() ? entry.message : "(none)",
    "",
    `Submitted: ${entry.submittedAt}`,
  ].join("\r\n");
}

async function createSmtpConnection({
  host,
  port,
}: {
  host: string;
  port: number;
}) {
  return await new Promise<tls.TLSSocket>((resolve, reject) => {
    const socket = tls.connect({ host, port, rejectUnauthorized: true });
    const onError = (error: Error) => {
      socket.off("secureConnect", onConnect);
      reject(error);
    };
    const onConnect = () => {
      socket.setEncoding("utf8");
      socket.setTimeout(10000);
      socket.off("error", onError);
      resolve(socket);
    };
    socket.once("secureConnect", onConnect);
    socket.once("error", onError);
  });
}

async function sendCommand(socket: tls.TLSSocket, command: string) {
  socket.write(`${command}\r\n`);
  return expectResponse(socket);
}

async function expectResponse(socket: tls.TLSSocket) {
  socket.setTimeout(10000);
  const response = await new Promise<string>((resolve, reject) => {
    let buffer = "";

    const onData = (chunk: string) => {
      buffer += chunk;
      const lines = buffer.split("\r\n").filter(Boolean);
      if (!lines.length) {
        return;
      }
      const lastLine = lines[lines.length - 1];
      if (lastLine.length >= 4 && lastLine[3] === " ") {
        cleanup();
        resolve(buffer);
      }
    };

    const onError = (error: Error) => {
      cleanup();
      reject(error);
    };

    const onTimeout = () => {
      cleanup();
      reject(new Error("SMTP response timed out"));
    };

    const cleanup = () => {
      socket.off("data", onData);
      socket.off("error", onError);
      socket.off("timeout", onTimeout);
    };

    socket.on("data", onData);
    socket.once("error", onError);
    socket.once("timeout", onTimeout);
  });

  const status = Number(response.slice(0, 3));
  if (Number.isNaN(status) || status >= 400) {
    throw new Error(`SMTP error: ${response.trim()}`);
  }
  return response;
}
