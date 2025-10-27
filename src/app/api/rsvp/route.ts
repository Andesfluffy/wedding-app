import { NextResponse } from "next/server";

type RsvpPayload = {
  fullName?: string;
  email?: string;
  attendance?: "yes" | "no";
  guests?: string;
  shuttle?: boolean;
  message?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as RsvpPayload;

    if (!body.fullName || !body.email || !body.attendance) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const entry = {
      fullName: body.fullName,
      email: body.email,
      attendance: body.attendance,
      guests: Number(body.guests ?? 0),
      shuttle: Boolean(body.shuttle),
      message: body.message ?? "",
      submittedAt: new Date().toISOString(),
    };

    console.info("[RSVP]", entry);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[RSVP_ERROR]", error);
    return NextResponse.json(
      { error: "Unable to submit RSVP right now" },
      { status: 500 }
    );
  }
}
