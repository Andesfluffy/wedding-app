import { guestList, generateGuestUrl } from "@/data/guest-list";

export default function GuestTestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pearl via-cream to-rosewater p-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 font-display text-4xl font-bold text-ink">
          Guest List Test Page
        </h1>
        
        <div className="mb-8 rounded-xl border border-gold/30 bg-white/80 p-6 shadow-lg">
          <h2 className="mb-4 font-display text-2xl font-semibold text-ink">
            How to Use Guest Links
          </h2>
          <p className="mb-4 text-ink/70">
            Each guest has a personalized link that includes their name and maximum guest count. 
            Click any link below to test the guest-specific invitation.
          </p>
          <div className="rounded-lg bg-gold/10 p-4">
            <p className="text-sm text-ink">
              <strong>URL Format:</strong> <code className="rounded bg-gold/20 px-2 py-1">/?guest=Guest+Name&max=6</code>
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {guestList.slice(0, 8).map((guest) => (
            <div key={guest.id} className="rounded-xl border border-gold/25 bg-white/90 p-6 shadow-md">
              <h3 className="mb-2 font-display text-lg font-semibold text-ink">
                {guest.name}
              </h3>
              <p className="mb-4 text-sm text-ink/60">
                Maximum Guests: <span className="font-semibold text-merlot">{guest.maxGuests}</span>
              </p>
              <a
                href={generateGuestUrl(guest.id)}
                className="inline-flex items-center rounded-lg bg-gradient-to-r from-ember via-gold to-gilded px-4 py-2 text-sm font-semibold text-ink shadow-md transition hover:shadow-lg"
              >
                Test Invitation
              </a>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-gold/30 bg-white/80 p-6 shadow-lg">
          <h2 className="mb-4 font-display text-2xl font-semibold text-ink">
            Manual Test URLs
          </h2>
          <div className="space-y-3">
            <a href="/?guest=Uncle+John&max=6" className="block rounded-lg border border-gold/20 p-3 text-sm text-ink hover:bg-gold/5">
              Uncle John (6 guests): <code className="text-merlot">/?guest=Uncle+John&max=6</code>
            </a>
            <a href="/?guest=Best+Man+David&max=3" className="block rounded-lg border border-gold/20 p-3 text-sm text-ink hover:bg-gold/5">
              Best Man David (3 guests): <code className="text-merlot">/?guest=Best+Man+David&max=3</code>
            </a>
            <a href="/?guest=Pastor+Michael&max=5" className="block rounded-lg border border-gold/20 p-3 text-sm text-ink hover:bg-gold/5">
              Pastor Michael (5 guests): <code className="text-merlot">/?guest=Pastor+Michael&max=5</code>
            </a>
            <a href="/?guest=Single+Guest&max=1" className="block rounded-lg border border-gold/20 p-3 text-sm text-ink hover:bg-gold/5">
              Single Guest (1 guest): <code className="text-merlot">/?guest=Single+Guest&max=1</code>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}