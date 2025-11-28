export interface GuestInvitation {
  id: string;
  name: string;
  maxGuests: number;
  email?: string;
  phone?: string;
}

export const guestList: GuestInvitation[] = [
  { id: "bride-1", name: "David Ogogo's family", maxGuests: 4 },
  { id: "bride-2", name: "Nathan Ogogo's family", maxGuests: 2 },
  { id: "bride-3", name: "Martins family", maxGuests: 4 },
  { id: "bride-4", name: "Owodeha-martins family", maxGuests: 4 },
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
  { id: "bride-24", name: "Mao Moses", maxGuests: 1 },
  { id: "bride-25", name: "Arinze family", maxGuests: 4 },
  { id: "bride-26", name: "Bro and Sis Nwabueze", maxGuests: 2 },
  { id: "bride-27", name: "Bro and Sis Oiyemuria", maxGuests: 2 },
  { id: "bride-28", name: "Sis Justina Ayeni", maxGuests: 1 },
  { id: "bride-29", name: "Bro Femi Adewunmi", maxGuests: 1 },
  { id: "bride-30", name: "Bro and Sis Agomuo", maxGuests: 2 },
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
  { id: "bride-37", name: "Mr Abimbola and Alhaja Oloyede", maxGuests: 2 },
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
  { id: "bride-49", name: "Nwakego Okoli", maxGuests: 1 },
  { id: "bride-50", name: "Mrs Funmilayo Balogun", maxGuests: 1 },
  { id: "bride-51", name: "Mr Andy and Co Ucss", maxGuests: 4 },
  { id: "bride-52", name: "Sis Edith Osuachala", maxGuests: 1 },
  { id: "bride-53", name: "Michael Ekpeti", maxGuests: 1 },
  { id: "bride-54", name: "Sis Oyetakin", maxGuests: 1 },
  { id: "bride-55", name: "Sis Fatunsin", maxGuests: 1 },
  { id: "bride-56", name: "Keziah", maxGuests: 1 },
  { id: "bride-57", name: "Bro and Sis Matthew", maxGuests: 1 },

  { id: "groom-1", name: "F.A Oyeyemi family", maxGuests: 3 },
  { id: "groom-2", name: "Afolabi family", maxGuests: 3 },
  { id: "groom-3", name: "Sola Oyeyemi and family", maxGuests: 4 },
  { id: "groom-4", name: "Idris Oko-osi and family", maxGuests: 2 },
  { id: "groom-5", name: "Qudus Oko-osi and family", maxGuests: 2 },
  { id: "groom-6", name: "Sodiq Oko-osi and family", maxGuests: 2 },
  { id: "groom-7", name: "Kate Eruvwahwe", maxGuests: 1 },
  { id: "groom-8", name: "Essien family", maxGuests: 1 },
  { id: "groom-9", name: "Seeke Oladun Falade", maxGuests: 1 },
  { id: "groom-10", name: "Akinremi family", maxGuests: 2 },
  { id: "groom-11", name: "Kemi Ologe", maxGuests: 1 },
  { id: "groom-12", name: "Jumoke Ogunnaike", maxGuests: 1 },
  { id: "groom-13", name: "Bisi Yaya and family", maxGuests: 2 },
  { id: "groom-14", name: "Yomi Moses", maxGuests: 2 },
  { id: "groom-15", name: "Ugochukwu family", maxGuests: 5 },
  { id: "groom-16", name: "Bewaji family", maxGuests: 6 },
  { id: "groom-17", name: "Iboku family", maxGuests: 3 },
  { id: "groom-18", name: "Fatimehin family", maxGuests: 2 },
  { id: "groom-19", name: "Imoh Iniunam", maxGuests: 1 },
  { id: "groom-20", name: "Agali family", maxGuests: 2 },
  { id: "groom-21", name: "Omo Agali", maxGuests: 1 },
  { id: "groom-22", name: "Noah Ojo", maxGuests: 1 },
  { id: "groom-23", name: "Bro and Sis Williams", maxGuests: 2 },
  { id: "groom-24", name: "Bro Victor Ado", maxGuests: 1 },
  { id: "groom-25", name: "Bro Otome Opuoro", maxGuests: 1 },
  { id: "groom-26", name: "Dami Folarin", maxGuests: 1 },
  { id: "groom-27", name: "Chinedum Odii", maxGuests: 1 },
  { id: "groom-28", name: "Chidinma Afogu", maxGuests: 1 },
  { id: "groom-29", name: "Aliyu Abdullahi", maxGuests: 1 },
  { id: "groom-30", name: "Emmanuel Sam", maxGuests: 1 },
  { id: "groom-31", name: "Waliyah Okunade", maxGuests: 1 },
  { id: "groom-32", name: "Adesoji Olaitan", maxGuests: 2 },
  { id: "groom-33", name: "Brown Memoye", maxGuests: 1 },
  { id: "groom-34", name: "Taiwo Raji", maxGuests: 1 },
  { id: "groom-35", name: "Precious Iwuala", maxGuests: 1 },
  { id: "groom-36", name: "Zino Ove", maxGuests: 1 },
  { id: "groom-37", name: "Edwards Ugochukwu", maxGuests: 1 },
  { id: "groom-38", name: "Nathan Ojo and family", maxGuests: 2 },
  { id: "groom-39", name: "Ojo family", maxGuests: 2 },
  { id: "groom-40", name: "Amarachi Umezurike", maxGuests: 1 },
  { id: "groom-41", name: "Joshua Aderinoye", maxGuests: 2 },
  { id: "groom-42", name: "Timothy Nwamu", maxGuests: 2 },
  { id: "groom-43", name: "George Akinlolu", maxGuests: 2 },
  { id: "groom-44", name: "Ahmadu Garba", maxGuests: 2 },
  { id: "groom-45", name: "Gregory Ibeh", maxGuests: 2 },
  { id: "groom-46", name: "Godswill Erokaire", maxGuests: 2 },
  { id: "groom-47", name: "Uncle Effiong Asuquo", maxGuests: 1 },
  { id: "groom-48", name: "Katey Bassey", maxGuests: 1 },
  { id: "groom-49", name: "Bro and Sis Oyewale", maxGuests: 2 },
  { id: "groom-50", name: "Bro and Sis Arivwie", maxGuests: 2 },
  { id: "groom-51", name: "Amarachi Maduka", maxGuests: 1 },
  { id: "groom-52", name: "Bro and Sis Ideh", maxGuests: 2 },
  { id: "groom-53", name: "Bro and Sis Nwankwo", maxGuests: 2 },
  { id: "groom-54", name: "Bro and Sis Ukattah", maxGuests: 2 },
  { id: "groom-55", name: "Bro and Sis Ekong", maxGuests: 2 },
  { id: "groom-56", name: "Bro and Sis Imhanbor", maxGuests: 2 },
];

export function findGuestByName(name: string): GuestInvitation | undefined {
  let guest = guestList.find(
    (g) => g.name.toLowerCase() === name.toLowerCase()
  );

  if (guest) return guest;

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
