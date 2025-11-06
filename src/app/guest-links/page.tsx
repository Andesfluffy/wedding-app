import { guestList, generateGuestUrl } from "@/data/guest-list";
import { CopyLinkRow } from "./CopyLinkRow";
import { ExportLinksControls } from "./ExportLinksControls";

export default function GuestLinksPage() {
  const categories = {
    "Groom's guests": guestList.filter((g) => g.id.startsWith("groom")),
    "Bride's guests": guestList.filter((g) => g.id.startsWith("bride")),
  
  };

  const allLinks = guestList.map((g) => ({
    name: g.name,
    urlPath: generateGuestUrl(g.id),
    maxGuests: g.maxGuests,
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pearl-50 to-cream-50 mt-24 py-6 px-3 sm:py-8 sm:px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-rose-800 mb-4">Guest Invitation Links</h1>
          <p className="text-lg text-gray-600 mb-6">Copy and send these personalized links to your guests</p>
          <div className="bg-rose-100 border border-rose-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-rose-700">
              <strong>How to use:</strong> Copy the link next to each guest's name and send it to them. The
              link is signed and cannot be tampered with.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {Object.entries(categories).map(([category, guests]) => {
            const linksForCategory = guests.map((g) => ({
              name: g.name,
              urlPath: generateGuestUrl(g.id),
              maxGuests: g.maxGuests,
            }));
            if (linksForCategory.length === 0) return null;

            return (
              <div key={category} className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">{category}</h2>
                <div className="grid gap-3">
                  {linksForCategory.map((link) => (
                    <CopyLinkRow key={`${category}-${link.name}`} name={link.name} urlPath={link.urlPath} maxGuests={link.maxGuests} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Export Options</h2>
          <ExportLinksControls links={allLinks} />
          <p className="text-sm text-gray-600">
            Use these export options to get all links at once for easy sharing via email, WhatsApp, or other messaging platforms.
          </p>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Stats</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-rose-50 rounded-lg">
              <div className="text-2xl font-bold text-rose-600">{guestList.length}</div>
              <div className="text-sm text-gray-600">Total Guests</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">{guestList.reduce((sum, g) => sum + g.maxGuests, 0)}</div>
              <div className="text-sm text-gray-600">Total Invited</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">{guestList.filter((g) => g.id.startsWith("groom")).length}</div>
              <div className="text-sm text-gray-600">Groom's Side</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">{guestList.filter((g) => g.id.startsWith("bride")).length}</div>
              <div className="text-sm text-gray-600">Bride's Side</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}