"use client";

import React from "react";

export function CopyLinkRow({
  name,
  urlPath,
  maxGuests,
}: {
  name: string;
  urlPath: string;
  maxGuests: number;
}) {
  const fullUrl = typeof window !== "undefined" ? `${window.location.origin}${urlPath}` : urlPath;

  return (
    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
      <div className="flex-1">
        <div className="font-medium text-gray-900">{name}</div>
        <div className="text-sm text-gray-500">Max guests: {maxGuests}</div>
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
            alert("Link copied to clipboard!");
          }}
          className="bg-rose-600 hover:bg-rose-700 text-white px-3 py-1 rounded text-sm font-medium transition-colors"
        >
          Copy
        </button>
      </div>
    </div>
  );
}