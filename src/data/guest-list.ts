export interface GuestInvitation {
  id: string;
  name: string;
  maxGuests: number;
  email?: string;
  phone?: string;
}

export const guestList: GuestInvitation[] = [
  // Bride's guests
  { id: "bride-1", name: "David Ogogo's Family", maxGuests: 4 },
  { id: "bride-2", name: "Nathan Ogogo's Family", maxGuests: 2 },
  { id: "bride-3", name: "Martins Family", maxGuests: 4 },
  { id: "bride-4", name: "Owodeha Family", maxGuests: 4 },
  { id: "bride-5", name: "Iya Bolanle", maxGuests: 1 },
  { id: "bride-6", name: "Paul Ogogo and family", maxGuests: 2 },
  { id: "bride-7", name: "Tombra Ogogo and family", maxGuests: 4 },
  { id: "bride-8", name: "Walkers Sisters", maxGuests: 4 },
  { id: "bride-9", name: "Captain Patani and Mrs Patani", maxGuests: 2 },
  { id: "bride-10", name: "Captain Preye and Mrs Preye", maxGuests: 2 },
  { id: "bride-11", name: "Pa Yonwe and Mrs Douye", maxGuests: 2 },
  { id: "bride-12", name: "Bro and Sis Nwani", maxGuests: 2 },
  { id: "bride-13", name: "Francis Nwani", maxGuests: 1 },
  { id: "bride-14", name: "Bro and Sis Osowale", maxGuests: 2 },
  { id: "bride-15", name: "Bro Amos Igbeto", maxGuests: 1 },
  { id: "bride-16", name: "Bro Adedayo Balogun and family", maxGuests: 4 },
  { id: "bride-17", name: "Bro and Sis Amosun", maxGuests: 2 },
  { id: "bride-18", name: "Mary Rasheed and Mama Dada", maxGuests: 2 },
  { id: "bride-19", name: "Bro and Sis Okeoma", maxGuests: 2 },
  { id: "bride-20", name: "Bro and Sis Prince Isaac", maxGuests: 2 },
  { id: "bride-21", name: "Bro and Sis Ebuka Nwazeama", maxGuests: 2 },
  { id: "bride-22", name: "Bro God's Gift Obi", maxGuests: 1 },
  { id: "bride-23", name: "Josiah Nwazeama", maxGuests: 1 },
  { id: "bride-24", name: "Bro and Sis Bethelite Ogogo", maxGuests: 2 },
  { id: "bride-25", name: "Bro and Sis Samuel Ogogo", maxGuests: 4 },
  { id: "bride-26", name: "Bro and Sis Nwabueze", maxGuests: 2 },
  { id: "bride-27", name: "Bro and Sis Oiyemuria", maxGuests: 2 },
  { id: "bride-28", name: "Sis Justina Ayeni", maxGuests: 1 },
  { id: "bride-29", name: "Bro Femi Adewunmi", maxGuests: 1 },
  { id: "bride-30", name: "Bro and Sis Agunmo", maxGuests: 2 },
  { id: "bride-31", name: "Teni Alufa", maxGuests: 1 },
  { id: "bride-32", name: "Pa Adedeji and wife", maxGuests: 2 },
  { id: "bride-33", name: "Bro and Sister Ifetoye", maxGuests: 2 },
  { id: "bride-34", name: "Bro Alaji Olaniran", maxGuests: 1 },
  { id: "bride-35", name: "Bro and Sis Godwin Obi", maxGuests: 2 },
  {
    id: "bride-36",
    name: "Mr David Adebayo, Mama and Baba Amuda",
    maxGuests: 3,
  },
  { id: "bride-37", name: "Mr Bimbo and Alhaja Oloyede", maxGuests: 2 },
  { id: "bride-38", name: "Nahola", maxGuests: 1 },
  { id: "bride-39", name: "Mrs Funke", maxGuests: 1 },
  { id: "bride-40", name: "Mrs Abimbola", maxGuests: 1 },
  { id: "bride-41", name: "Blessing", maxGuests: 1 },
  { id: "bride-42", name: "Pamela", maxGuests: 1 },
  { id: "bride-43", name: "Busayo", maxGuests: 1 },
  { id: "bride-44", name: "Simi", maxGuests: 1 },
  { id: "bride-45", name: "Mrs Esther", maxGuests: 1 },
  { id: "bride-46", name: "Josephine", maxGuests: 1 },
  { id: "bride-47", name: "Tolani", maxGuests: 1 },
  { id: "bride-48", name: "Lilian", maxGuests: 1 },
  { id: "bride-49", name: "Aunty Nwakego Okoli", maxGuests: 1 },
  { id: "bride-50", name: "Mrs Funmilayo Balogun", maxGuests: 1 },
  { id: "bride-51", name: "Mr Andy and Co Ucss", maxGuests: 4 },
  { id: "bride-52", name: "Sis Edith Osuachala", maxGuests: 1 },
  { id: "bride-53", name: "Michael Ekpeti", maxGuests: 1 },
  { id: "bride-54", name: "Sis Oyetakin", maxGuests: 1 },

  // Groom's guests
  { id: "groom-55", name: "Oyeyemi family", maxGuests: 3 },
  { id: "groom-56", name: "Afolabi family", maxGuests: 3 },
  { id: "groom-57", name: "Sola Oyeyemi and family", maxGuests: 4 },
  { id: "groom-58", name: "Idris Oko-osi and family", maxGuests: 5 },
  { id: "groom-59", name: "Qudus Oko-osi and family", maxGuests: 4 },
  { id: "groom-60", name: "Sodiq Oko-osi and family", maxGuests: 3 },
  { id: "groom-61", name: "Eruwahvwe family", maxGuests: 5 },
  { id: "groom-62", name: "Essien family", maxGuests: 5 },
  { id: "groom-63", name: "Elizabeth", maxGuests: 1 },
  { id: "groom-64", name: "Akinremi family", maxGuests: 4 },
  { id: "groom-65", name: "Ologe family", maxGuests: 4 },
  { id: "groom-66", name: "Aunty's Aina and Wande family", maxGuests: 5 },
  { id: "groom-67", name: "Yaya family", maxGuests: 3 },
  { id: "groom-68", name: "Jumoke, Adiza, Oga", maxGuests: 3 },
  { id: "groom-69", name: "Ugochukwu family", maxGuests: 5 },
  { id: "groom-70", name: "Bewaji family", maxGuests: 6 },
  { id: "groom-71", name: "Iboku family", maxGuests: 3 },
  { id: "groom-72", name: "Fatimehin family", maxGuests: 2 },
  { id: "groom-73", name: "Imoh Iniunam", maxGuests: 1 },
  { id: "groom-74", name: "Agali family", maxGuests: 2 },
  { id: "groom-75", name: "Omo Agali", maxGuests: 1 },
  { id: "groom-76", name: "Noah Ojo", maxGuests: 1 },
  { id: "groom-77", name: "Williams family", maxGuests: 4 },
  { id: "groom-78", name: "Bro Victor Ado", maxGuests: 1 },
  { id: "groom-79", name: "Bro Otome Opuoro", maxGuests: 1 },
  { id: "groom-80", name: "Dami Folarin", maxGuests: 1 },
  { id: "groom-81", name: "Chinedum Odii", maxGuests: 1 },
  { id: "groom-82", name: "Chidinma Afogu", maxGuests: 1 },
  { id: "groom-83", name: "Aliyu Abdullahi", maxGuests: 1 },
  { id: "groom-84", name: "Emmanuel Sam", maxGuests: 1 },
  { id: "groom-85", name: "Waliyah Okunade", maxGuests: 1 },
  { id: "groom-86", name: "Adesoji Olaitan", maxGuests: 2 },
  { id: "groom-87", name: "Brown Memoye", maxGuests: 1 },
  { id: "groom-88", name: "Taiwo Raji", maxGuests: 1 },
  { id: "groom-89", name: "Precious Iwuala", maxGuests: 1 },
  { id: "groom-90", name: "Zino Ove", maxGuests: 1 },
  { id: "groom-91", name: "Edwards Ugochukwu", maxGuests: 1 },
  { id: "groom-92", name: "Nathan Ojo and family", maxGuests: 4 },
  { id: "groom-93", name: "Ojo family", maxGuests: 2 },
  { id: "groom-94", name: "Ese Eruwahvwe", maxGuests: 1 },
  { id: "groom-95", name: "Amarachi Umezurike", maxGuests: 1 },
  { id: "groom-96", name: "Arinze family", maxGuests: 4 },
];

export function findGuestByName(name: string): GuestInvitation | undefined {
  // First try exact match
  let guest = guestList.find(
    (g) => g.name.toLowerCase() === name.toLowerCase()
  );

  if (guest) return guest;

  // Try partial match
  guest = guestList.find(
    (g) =>
      g.name.toLowerCase().includes(name.toLowerCase()) ||
      name.toLowerCase().includes(g.name.toLowerCase())
  );

  return guest;
}

export function findGuestById(id: string): GuestInvitation | undefined {
  return guestList.find((g) => g.id === id);
}

export function generateGuestUrl(guestId: string): string {
  const guest = findGuestById(guestId);
  if (!guest) return "/";

  // Import dynamically to avoid circular dependencies
  const { generateSignedUrl } = require("@/lib/url-signer");
  return generateSignedUrl(guest.name, guest.maxGuests, "/");
}

export function generateAllGuestLinks(
  baseUrl: string = ""
): Array<{ name: string; url: string; maxGuests: number }> {
  return guestList.map((guest) => ({
    name: guest.name,
    url: `${baseUrl}${generateGuestUrl(guest.id)}`,
    maxGuests: guest.maxGuests,
  }));
}

export function exportGuestLinksAsText(baseUrl: string = ""): string {
  const links = generateAllGuestLinks(baseUrl);
  return links
    .map(({ name, url, maxGuests }) => `${name} (${maxGuests} guests): ${url}`)
    .join("\n");
}

export function exportGuestLinksAsCSV(baseUrl: string = ""): string {
  const links = generateAllGuestLinks(baseUrl);
  const header = "Name,Max Guests,URL";
  const rows = links.map(
    ({ name, url, maxGuests }) => `"${name}",${maxGuests},"${url}"`
  );
  return [header, ...rows].join("\n");
}
