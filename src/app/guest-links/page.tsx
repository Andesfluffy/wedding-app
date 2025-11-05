"use client";

import { guestList, generateGuestUrl, exportGuestLinksAsText, exportGuestLinksAsCSV } from "@/data/guest-list";

export default function GuestLinksPage() {
  // Group guests by category for better organization
  const categories = {
    "Groom's Family & Friends": guestList.filter(g => g.id.startsWith("groom-family")),
    "Groom's Brothers & Associates": guestList.filter(g => g.id.startsWith("groom-brothers")),
    "Bride's Family": guestList.filter(g => g.id.startsWith("bride-family")),
    "Bride's Brothers & Congregation": guestList.filter(g => g.id.startsWith("bride-brothers")),
    "Bride's Sisters & Friends": guestList.filter(g => g.id.startsWith("bride-friends")),
    "Bride's Counselors & Mentors": guestList.filter(g => g.id.startsWith("bride-mentors")),
    "Bride's Colleagues & Associates": guestList.filter(g => g.id.startsWith("bride-colleagues")),
    "Original Family": guestList.filter(g => g.id.startsWith("family")),
    "Original Friends": guestList.filter(g => g.id.startsWith("friend")),
    "Original Colleagues": guestList.filter(g => g.id.startsWith("colleague")),
    "Original Congregation": guestList.filter(g => g.id.startsWith("congregation")),
    "Original Special Guests": guestList.filter(g => g.id.startsWith("special")),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pearl-50 to-cream-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-rose-800 mb-4">Guest Invitation Links</h1>
          <p className="text-lg text-gray-600 mb-6">
            Copy and send these personalized links to your guests
          </p>
          <div className="bg-rose-100 border border-rose-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-rose-700">
              <strong>How to use:</strong> Copy the link next to each guest's name and send it to them. 
              The link will automatically fill in their name and guest limit when they visit the site.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {Object.entries(categories).map(([category, guests]) => {
            if (guests.length === 0) return null;
            
            return (
              <div key={category} className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                  {category}
                </h2>
                <div className="grid gap-3">
                  {guests.map((guest) => {
                    const url = generateGuestUrl(guest.id);
                    const fullUrl = typeof window !== 'undefined' 
                      ? `${window.location.origin}${url}` 
                      : url;
                    
                    return (
                      <div key={guest.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">{guest.name}</div>
                          <div className="text-sm text-gray-500">
                            Max guests: {guest.maxGuests}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="text"
                            value={fullUrl}
                            readOnly
                            className="text-sm bg-white border border-gray-300 rounded px-2 py-1 w-64 truncate"
                            onClick={(e) => e.currentTarget.select()}
                          />
                          <button
                            onClick={() => {
                              navigator.clipboard.writeText(fullUrl);
                              alert('Link copied to clipboard!');
                            }}
                            className="bg-rose-600 hover:bg-rose-700 text-white px-3 py-1 rounded text-sm font-medium transition-colors"
                          >
                            Copy
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Export Options</h2>
          <div className="flex flex-wrap gap-4 mb-4">
            <button
              onClick={() => {
                const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
                const textExport = exportGuestLinksAsText(baseUrl);
                const blob = new Blob([textExport], { type: 'text/plain' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'wedding-guest-links.txt';
                a.click();
                URL.revokeObjectURL(url);
              }}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-medium transition-colors"
            >
              📄 Export as Text File
            </button>
            <button
              onClick={() => {
                const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
                const csvExport = exportGuestLinksAsCSV(baseUrl);
                const blob = new Blob([csvExport], { type: 'text/csv' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'wedding-guest-links.csv';
                a.click();
                URL.revokeObjectURL(url);
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-medium transition-colors"
            >
              📊 Export as CSV File
            </button>
            <button
              onClick={() => {
                const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
                const textExport = exportGuestLinksAsText(baseUrl);
                navigator.clipboard.writeText(textExport);
                alert('All links copied to clipboard!');
              }}
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded font-medium transition-colors"
            >
              📋 Copy All Links
            </button>
          </div>
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
              <div className="text-2xl font-bold text-blue-600">
                {guestList.reduce((sum, g) => sum + g.maxGuests, 0)}
              </div>
              <div className="text-sm text-gray-600">Total Invited</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">
                {guestList.filter(g => g.id.startsWith('groom')).length}
              </div>
              <div className="text-sm text-gray-600">Groom's Side</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">
                {guestList.filter(g => g.id.startsWith('bride')).length}
              </div>
              <div className="text-sm text-gray-600">Bride's Side</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}