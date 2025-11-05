import { guestList, generateGuestUrl, exportGuestLinksAsText, exportGuestLinksAsCSV } from "@/data/guest-list";

export default function SimpleGuestLinksPage() {
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
                    
                    return (
                      <div key={guest.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">{guest.name}</div>
                          <div className="text-sm text-gray-500">
                            Max guests: {guest.maxGuests}
                          </div>
                        </div>
                        <div className="text-sm text-gray-600 font-mono bg-white px-3 py-1 rounded border">
                          {url}
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

        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-yellow-800 mb-2">How to Get Full URLs</h3>
          <p className="text-yellow-700 mb-3">
            The links shown above are relative paths. To get the complete URLs:
          </p>
          <ol className="list-decimal list-inside text-yellow-700 space-y-1">
            <li>Add your domain before each link (e.g., <code className="bg-yellow-100 px-1 rounded">https://yourwedding.com/?guest=Oyeyemi&max=3</code>)</li>
            <li>Or visit the interactive version at <code className="bg-yellow-100 px-1 rounded">/guest-links</code> for copy buttons</li>
            <li>Or use the export functions in your browser console:</li>
          </ol>
          <pre className="mt-3 bg-gray-800 text-green-400 p-3 rounded text-xs overflow-x-auto">
{`// Open browser console (F12) and run:
import { exportGuestLinksAsText } from '@/data/guest-list';
console.log(exportGuestLinksAsText('https://yourwedding.com'));`}
          </pre>
        </div>
      </div>
    </div>
  );
}