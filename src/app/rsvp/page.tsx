import { RsvpSection } from "@/components/rsvp-form";
import { parseSignedParams } from "@/lib/url-signer";

export default async function Rsvp({
  searchParams,
}: {
  searchParams: Promise<{ guest?: string; max?: string; signature?: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const { guest, max, isValid } = parseSignedParams(
    new URLSearchParams(resolvedSearchParams)
  );

  // Only use the guest name and max guests if the signature is valid
  const guestName = isValid ? guest : undefined;
  const maxGuests = isValid
    ? typeof max === "string"
      ? parseInt(max, 10)
      : max
      ? Number(max)
      : undefined
    : undefined;

  return <RsvpSection guestName={guestName} maxGuests={maxGuests} />;
}
