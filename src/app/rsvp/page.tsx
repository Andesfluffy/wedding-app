import { RsvpSection } from "@/components/rsvp-form";

export default async function Rsvp({
  searchParams,
}: {
  searchParams: Promise<{ guest?: string; max?: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const maxGuests = resolvedSearchParams.max ? parseInt(resolvedSearchParams.max) : undefined;
  return <RsvpSection guestName={resolvedSearchParams.guest} maxGuests={maxGuests} />;
}
