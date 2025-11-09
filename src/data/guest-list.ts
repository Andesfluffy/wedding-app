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
  { id: "bride-24", name: "Bro and Sis Emeke Arinze", maxGuests: 2 },
  { id: "bride-25", name: "Bro and Sis Emmanuel Arinze", maxGuests: 2 },
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
  { id: "bride-36", name: "Sis Kessiena", maxGuests: 1 },
  {
    id: "bride-37",
    name: "Mr David Adebayo, Mama and Baba Amuda",
    maxGuests: 3,
  },
  { id: "bride-38", name: "Mr Bimbo and Alhaja Oloyede", maxGuests: 2 },
  { id: "bride-39", name: "Nahola", maxGuests: 1 },
  { id: "bride-40", name: "Mrs Funke", maxGuests: 1 },
  { id: "bride-41", name: "Mrs Abimbola", maxGuests: 1 },
  { id: "bride-42", name: "Blessing", maxGuests: 1 },
  { id: "bride-43", name: "Pamela", maxGuests: 1 },
  { id: "bride-44", name: "Busayo", maxGuests: 1 },
  { id: "bride-45", name: "Simi", maxGuests: 1 },
  { id: "bride-46", name: "Mrs Esther", maxGuests: 1 },
  { id: "bride-47", name: "Becca", maxGuests: 1 },
  { id: "bride-48", name: "Tolani", maxGuests: 1 },
  { id: "bride-49", name: "Lilian", maxGuests: 1 },
  { id: "bride-50", name: "Aunty Nwakego Okoli", maxGuests: 1 },
  { id: "bride-51", name: "Mrs Funmilayo Balogun", maxGuests: 1 },
  { id: "bride-52", name: "Mr Andy and Co Ucss", maxGuests: 4 },
  { id: "bride-53", name: "Sis Edith Os", maxGuests: 1 },
  { id: "bride-54", name: "Olamide", maxGuests: 1 },
  { id: "bride-55", name: "Chiyonce", maxGuests: 1 },
  { id: "bride-56", name: "Michael Ekpeti", maxGuests: 1 },

  //groom's guests
  { id: "groom-57", name: "Oyeyemi family", maxGuests: 3 },
  { id: "groom-58", name: "Afolabi family", maxGuests: 3 },
  { id: "groom-59", name: "Sola Oyeyemi and family", maxGuests: 4 },
  { id: "groom-60", name: "Idris Oko-osi and family", maxGuests: 5 },
  { id: "groom-61", name: "Qudus Oko-osi and family", maxGuests: 4 },
  { id: "groom-62", name: "Sodiq Oko-osi and family", maxGuests: 3 },
  { id: "groom-63", name: "Eruwahvwe family", maxGuests: 5 },
  { id: "groom-64", name: "Essien family", maxGuests: 5 },
  { id: "groom-65", name: "Elizabeth", maxGuests: 1 },
  { id: "groom-66", name: "Akinremi family", maxGuests: 4 },
  { id: "groom-67", name: "Ologe family", maxGuests: 4 },
  { id: "groom-68", name: "Aunty's Aina and Wande family", maxGuests: 5 },
  { id: "groom-69", name: "Yaya family", maxGuests: 3 },
  { id: "groom-70", name: "Jumoke, Adiza, Oga", maxGuests: 3 },
  { id: "groom-71", name: "Ugochukwu family", maxGuests: 5 },
  { id: "groom-72", name: "Bewaji family", maxGuests: 6 },
  { id: "groom-73", name: "Iboku family", maxGuests: 3 },
  { id: "groom-74", name: "Fatimehin family", maxGuests: 2 },
  { id: "groom-75", name: "Imoh Iniunam", maxGuests: 1 },
  { id: "groom-76", name: "Agali family", maxGuests: 2 },
  { id: "groom-77", name: "Omo Agali", maxGuests: 1 },
  { id: "groom-78", name: "Noah Ojo", maxGuests: 1 },
  { id: "groom-79", name: "Williams family", maxGuests: 4 },
  { id: "groom-80", name: "Bro Victor Ado", maxGuests: 1 },
  { id: "groom-81", name: "Bro Otome Opuoro", maxGuests: 1 },
  { id: "groom-82", name: "Dami Folarin", maxGuests: 1 },
  { id: "groom-83", name: "Chinedum Odii", maxGuests: 1 },
  { id: "groom-84", name: "Chidinma Afogu", maxGuests: 1 },
  { id: "groom-85", name: "Aliyu Abdullahi", maxGuests: 1 },
  { id: "groom-86", name: "Emmanuel Sam", maxGuests: 1 },
  { id: "groom-87", name: "Waliyah Okunade", maxGuests: 1 },
  { id: "groom-88", name: "Adesoji Olaitan", maxGuests: 2 },
  { id: "groom-89", name: "Brown Memoye", maxGuests: 1 },
  { id: "groom-90", name: "Taiwo Raji", maxGuests: 1 },
  { id: "groom-91", name: "Precious Iwuala", maxGuests: 1 },
  { id: "groom-92", name: "Zino Ove", maxGuests: 1 },
  { id: "groom-93", name: "Edwards Ugochukwu", maxGuests: 1 },
  { id: "groom-94", name: "Nathan Ojo and family", maxGuests: 4 },
  { id: "groom-95", name: "Ojo family", maxGuests: 2 },
  { id: "groom-96", name: "Ese Eruwahvwe", maxGuests: 1 },
  { id: "groom-97", name: "Amarachi Umezurike", maxGuests: 1 },
  { id: "groom-98", name: "Ese Okologo", maxGuests: 1 },
  { id: "groom-99", name: "Samuel Igbode", maxGuests: 2 },
  { id: "groom-100", name: "Tijani family", maxGuests: 5 },
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

// export interface GuestInvitation {
//   id: string;
//   name: string;
//   maxGuests: number;
//   email?: string;
//   phone?: string;
// }

// export const guestList: GuestInvitation[] = [
//   // Bride's Family
//   { id: "bride-family-1", name: "Dad & Mum", maxGuests: 2 },
//   { id: "bride-family-2", name: "David & Christy", maxGuests: 2 },
//   { id: "bride-family-3", name: "Bro Men & Sis Beth", maxGuests: 2 },
//   { id: "bride-family-4", name: "Mum Bethel", maxGuests: 2 },
//   { id: "bride-family-5", name: "Nnem", maxGuests: 1 },
//   { id: "bride-family-6", name: "Onome & Mum Onome", maxGuests: 2 },
//   { id: "bride-family-7", name: "Uncle Jun", maxGuests: 2 },
//   { id: "bride-family-8", name: "Uncle BJ & Aunty Esther", maxGuests: 2 },
//   { id: "bride-family-9", name: "Feji & Fego", maxGuests: 2 },
//   { id: "bride-family-10", name: "Uncle Paul & Wife", maxGuests: 2 },
//   { id: "bride-family-11", name: "Uncle Tombara & Wife", maxGuests: 2 },
//   { id: "bride-family-12", name: "Aunty Ebi", maxGuests: 3 },
//   { id: "bride-family-13", name: "Uncle Patani & Wife", maxGuests: 2 },
//   { id: "bride-family-14", name: "Uncle Preye & Wife", maxGuests: 2 },
//   { id: "bride-family-15", name: "Uncle Yonwe & Aunty Douye", maxGuests: 2 },
//   { id: "bride-family-16", name: "Aunty Helen", maxGuests: 1 },
//   { id: "bride-family-17", name: "Iya Bolanle", maxGuests: 1 },
//   { id: "bride-family-18", name: "Uncle Michael", maxGuests: 1 },
//   { id: "bride-family-19", name: "Bro Nwani & Wife", maxGuests: 2 },
//   { id: "bride-family-20", name: "Francis", maxGuests: 1 },
//   { id: "bride-family-21", name: "Sis Funmi Family", maxGuests: 2 },

//   // Bride's Brothers (Congregation/Spiritual Family)
//   { id: "bride-brothers-1", name: "Bro Igbeto", maxGuests: 1 },
//   { id: "bride-brothers-2", name: "Bro Balogun & Sis Balogun", maxGuests: 2 },
//   { id: "bride-brothers-3", name: "Lolade", maxGuests: 2 },
//   { id: "bride-brothers-4", name: "Sis Amosun & Twins", maxGuests: 3 },
//   { id: "bride-brothers-5", name: "Mama Dada", maxGuests: 1 },
//   { id: "bride-brothers-6", name: "Bro Jerry & Wife", maxGuests: 2 },
//   { id: "bride-brothers-7", name: "Uloma & Husband", maxGuests: 2 },
//   { id: "bride-brothers-8", name: "Bro Ebuka & Wife", maxGuests: 2 },
//   { id: "bride-brothers-9", name: "Kewe", maxGuests: 1 },
//   { id: "bride-brothers-10", name: "Josiah", maxGuests: 1 },
//   { id: "bride-brothers-11", name: "Femi", maxGuests: 1 },
//   { id: "bride-brothers-12", name: "Bro Obi", maxGuests: 1 },
//   { id: "bride-brothers-13", name: "Arinze", maxGuests: 4 },
//   { id: "bride-brothers-14", name: "Sis Ayeni", maxGuests: 1 },
//   { id: "bride-brothers-15", name: "Bro & Sis Nwabueze", maxGuests: 2 },
//   { id: "bride-brothers-16", name: "Bro & Sis Oiyemuriai", maxGuests: 2 },
//   { id: "bride-brothers-17", name: "Bro & Sis Agomo", maxGuests: 2 },
//   { id: "bride-brothers-18", name: "Bro & Sis Ifetoye", maxGuests: 2 },
//   { id: "bride-brothers-19", name: "Bro Obi Godwin", maxGuests: 1 },
//   { id: "bride-brothers-20", name: "Bro Olaniran", maxGuests: 1 },

//   // Bride's Sisters & Friends
//   { id: "bride-friends-1", name: "Ruth Obi", maxGuests: 1 },
//   { id: "bride-friends-2", name: "Teniola Alufa", maxGuests: 1 },
//   { id: "bride-friends-3", name: "Mary Rasheed", maxGuests: 1 },

//   // Bride's Counselors & Mentors
//   { id: "bride-mentors-1", name: "Counselor", maxGuests: 1 },
//   { id: "bride-mentors-2", name: "Oloyede", maxGuests: 1 },
//   { id: "bride-mentors-3", name: "Mama Welder", maxGuests: 1 },

//   // Bride's Colleagues & Associates
//   { id: "bride-colleagues-1", name: "Nahola", maxGuests: 1 },
//   { id: "bride-colleagues-2", name: "Mrs Funke", maxGuests: 1 },
//   { id: "bride-colleagues-3", name: "Mrs Abimbola", maxGuests: 1 },
//   { id: "bride-colleagues-4", name: "Blessing", maxGuests: 1 },
//   { id: "bride-colleagues-5", name: "Pamela", maxGuests: 1 },
//   { id: "bride-colleagues-6", name: "Busayo", maxGuests: 1 },
//   { id: "bride-colleagues-7", name: "Simi", maxGuests: 1 },
//   { id: "bride-colleagues-8", name: "Mrs Esther", maxGuests: 1 },
//   { id: "bride-colleagues-9", name: "Becca", maxGuests: 1 },
//   { id: "bride-colleagues-10", name: "Tolani", maxGuests: 1 },
//   { id: "bride-colleagues-11", name: "Lilian", maxGuests: 1 },
//   { id: "bride-colleagues-12", name: "Aunty Funmi", maxGuests: 1 },
//   { id: "bride-colleagues-13", name: "Aunty Nwakego", maxGuests: 1 },
//   { id: "bride-colleagues-14", name: "Olamide", maxGuests: 1 },
//   { id: "bride-colleagues-15", name: "Chiyonce", maxGuests: 1 },
//   { id: "bride-colleagues-16", name: "Sis Fatunsin", maxGuests: 1 },
//   { id: "bride-colleagues-17", name: "Jahdarasimi", maxGuests: 1 },

//   // Groom's Family & Close Friends
//   { id: "groom-family-1", name: "Oyeyemi", maxGuests: 3 },
//   { id: "groom-family-2", name: "Afolabi", maxGuests: 5 },
//   { id: "groom-family-3", name: "Sola Family", maxGuests: 4 },
//   { id: "groom-family-4", name: "Idris Family", maxGuests: 5 },
//   { id: "groom-family-5", name: "Qudus", maxGuests: 4 },
//   { id: "groom-family-6", name: "Sodiq", maxGuests: 3 },
//   { id: "groom-family-7", name: "Kate", maxGuests: 6 },
//   { id: "groom-family-8", name: "Rose", maxGuests: 5 },
//   { id: "groom-family-9", name: "Elizabeth", maxGuests: 1 },
//   { id: "groom-family-10", name: "Funmi Akinremi", maxGuests: 4 },
//   { id: "groom-family-11", name: "Kemi Ologe", maxGuests: 4 },
//   { id: "groom-family-12", name: "Aunty's Aina and Wande Family", maxGuests: 5 },
//   { id: "groom-family-13", name: "Bisi Yaya and Family", maxGuests: 3 },
//   { id: "groom-family-14", name: "Jumoke, Adiza, Oga", maxGuests: 3 },
//   { id: "groom-family-15", name: "Ugochukwu Family", maxGuests: 6 },
//   { id: "groom-family-16", name: "Bewaji Family", maxGuests: 6 },
//   { id: "groom-family-17", name: "Abel Iboku", maxGuests: 3 },
//   { id: "groom-family-18", name: "Fatimehin Family", maxGuests: 2 },
//   { id: "groom-family-19", name: "Imoh Iniunam", maxGuests: 1 },
//   { id: "groom-family-20", name: "Agali", maxGuests: 3 },
//   { id: "groom-family-21", name: "Ojo", maxGuests: 6 },
//   { id: "groom-family-22", name: "Williams", maxGuests: 4 },

//   // Groom's Brothers & Associates
//   { id: "groom-brothers-1", name: "Bro Ado", maxGuests: 1 },
//   { id: "groom-brothers-2", name: "Bro Otome Opuoro", maxGuests: 1 },
//   { id: "groom-brothers-3", name: "Dami Folarin", maxGuests: 1 },
//   { id: "groom-brothers-4", name: "Chinedum", maxGuests: 1 },
//   { id: "groom-brothers-5", name: "Chidinma", maxGuests: 1 },
//   { id: "groom-brothers-6", name: "Aliyu", maxGuests: 1 },
//   { id: "groom-brothers-7", name: "Emmanuel", maxGuests: 1 },
//   { id: "groom-brothers-8", name: "Waliyah", maxGuests: 1 },
//   { id: "groom-brothers-9", name: "Soji", maxGuests: 2 },
//   { id: "groom-brothers-10", name: "Brown", maxGuests: 1 },
//   { id: "groom-brothers-11", name: "Taiwo", maxGuests: 1 },
//   { id: "groom-brothers-12", name: "Precious", maxGuests: 1 },
//   { id: "groom-brothers-13", name: "Zino", maxGuests: 1 },
// ];

// export function findGuestByName(name: string): GuestInvitation | undefined {
//   // First try exact match
//   let guest = guestList.find(g =>
//     g.name.toLowerCase() === name.toLowerCase()
//   );

//   if (guest) return guest;

//   // Try partial match
//   guest = guestList.find(g =>
//     g.name.toLowerCase().includes(name.toLowerCase()) ||
//     name.toLowerCase().includes(g.name.toLowerCase())
//   );

//   return guest;
// }

// export function findGuestById(id: string): GuestInvitation | undefined {
//   return guestList.find(g => g.id === id);
// }

// export function generateGuestUrl(guestId: string): string {
//   const guest = findGuestById(guestId);
//   if (!guest) return '/';

//   // Import dynamically to avoid circular dependencies
//   const { generateSignedUrl } = require('@/lib/url-signer');
//   return generateSignedUrl(guest.name, guest.maxGuests);
// }

// export function generateAllGuestLinks(baseUrl: string = ''): Array<{name: string, url: string, maxGuests: number}> {
//   return guestList.map(guest => ({
//     name: guest.name,
//     url: `${baseUrl}${generateGuestUrl(guest.id)}`,
//     maxGuests: guest.maxGuests
//   }));
// }

// export function exportGuestLinksAsText(baseUrl: string = ''): string {
//   const links = generateAllGuestLinks(baseUrl);
//   return links.map(({name, url, maxGuests}) =>
//     `${name} (${maxGuests} guests): ${url}`
//   ).join('\n');
// }

// export function exportGuestLinksAsCSV(baseUrl: string = ''): string {
//   const links = generateAllGuestLinks(baseUrl);
//   const header = 'Name,Max Guests,URL';
//   const rows = links.map(({name, url, maxGuests}) =>
//     `"${name}",${maxGuests},"${url}"`
//   );
//   return [header, ...rows].join('\n');
// }
