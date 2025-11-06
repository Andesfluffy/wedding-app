"use client";

import React from "react";

export function ExportLinksControls({
  links,
}: {
  links: { name: string; urlPath: string; maxGuests: number }[];
}) {
  const withAbsolute = () => {
    const origin = typeof window !== "undefined" ? window.location.origin : "";
    return links.map(({ name, urlPath, maxGuests }) => ({
      name,
      maxGuests,
      url: `${origin}${urlPath}`,
    }));
  };

  const exportText = () => {
    const abs = withAbsolute();
    const text = abs
      .map(({ name, url, maxGuests }) => `${name} (${maxGuests} guests): ${url}`)
      .join("\n");
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "wedding-guest-links.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  const exportCSV = () => {
    const abs = withAbsolute();
    const header = "Name,Max Guests,URL";
    const rows = abs.map(({ name, url, maxGuests }) => `"${name}",${maxGuests},"${url}"`);
    const csv = [header, ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "wedding-guest-links.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  const copyAll = () => {
    const abs = withAbsolute();
    const text = abs
      .map(({ name, url, maxGuests }) => `${name} (${maxGuests} guests): ${url}`)
      .join("\n");
    navigator.clipboard.writeText(text);
    alert("All links copied to clipboard!");
  };

  return (
    <div className="flex flex-wrap gap-4 mb-4">
      <button
        onClick={exportText}
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-medium transition-colors"
      >
        📄 Export as Text File
      </button>
      <button
        onClick={exportCSV}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-medium transition-colors"
      >
        📊 Export as CSV File
      </button>
      <button
        onClick={copyAll}
        className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded font-medium transition-colors"
      >
        📋 Copy All Links
      </button>
    </div>
  );
}