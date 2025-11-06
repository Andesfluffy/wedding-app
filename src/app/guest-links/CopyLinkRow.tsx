"use client"

export function CopyLinkRow({
  name,
  urlPath,
  maxGuests,
}: {
  name: string;
  urlPath: string;
  maxGuests: number;
}) {
  const fullUrl =
    typeof window !== "undefined" ? `${window.location.origin}${urlPath}` : urlPath;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(fullUrl);
      alert("Link copied to clipboard!");
    } catch {
      alert("Failed to copy link.");
    }
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors w-full">
      {/* Name and guest info */}
      <div className="flex-1 w-full">
        <div className="font-medium text-gray-900 text-sm sm:text-base break-words">
          {name}
        </div>
        <div className="text-xs sm:text-sm text-gray-500">
          Max guests: {maxGuests}
        </div>
      </div>

      {/* Copy area */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full sm:w-auto">
        <input
          type="text"
          value={fullUrl}
          readOnly
          onClick={(e) => e.currentTarget.select()}
          className="text-xs sm:text-sm bg-white border border-gray-300 rounded px-2 py-1 w-full sm:w-64 truncate focus:ring-2 focus:ring-rose-500 focus:outline-none"
        />
        <button
          onClick={handleCopy}
          className="bg-rose-600 hover:bg-rose-700 text-white px-3 py-1 rounded text-xs sm:text-sm font-medium transition-colors w-full sm:w-auto"
        >
          Copy
        </button>
      </div>
    </div>
  );
}
