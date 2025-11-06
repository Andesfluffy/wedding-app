export interface GuestInvitation {
  id: string;
  name: string;
  maxGuests: number;
  email?: string;
  phone?: string;
}

export const guestList: GuestInvitation[] = [
  // Bride's Family
  { id: "guest-1", name: "David Ogogo’s Family", maxGuests: 4 },
  { id: "guest-2", name: "Nathan Ogogo’s Family", maxGuests: 2 },
  { id: "guest-3", name: "Martins Family", maxGuests: 4 },
  { id: "guest-4", name: "Owodeha Family", maxGuests: 4 },
  { id: "guest-5", name: "Iya Bolanle", maxGuests: 1 },
  { id: "guest-6", name: "Paul Ogogo and family", maxGuests: 2 },
  { id: "guest-7", name: "Tombra Ogogo and family", maxGuests: 4 },
  { id: "guest-8", name: "Walkers Sisters", maxGuests: 4 },
  { id: "guest-9", name: "Captain Patani and Mrs Patani", maxGuests: 2 },
  { id: "guest-10", name: "Captain Preye and Mrs Preye", maxGuests: 2 },
  { id: "guest-11", name: "Pa Yonwe and Mrs Douye", maxGuests: 2 },
  { id: "guest-12", name: "Bro and Sis Nwani", maxGuests: 2 },
  { id: "guest-13", name: "Francis Nwani", maxGuests: 1 },
  { id: "guest-14", name: "Bro and Sis Osowale", maxGuests: 2 },
  { id: "guest-15", name: "Bro Amos Igbeto", maxGuests: 1 },
  { id: "guest-16", name: "Bro Adedayo Balogun and family", maxGuests: 4 },
  { id: "guest-17", name: "Bro and Sis Amosun", maxGuests: 2 },
  { id: "guest-18", name: "Mary Rasheed and Mama Dada", maxGuests: 2 },
  { id: "guest-19", name: "Bro and Sis Okeoma", maxGuests: 2 },
  { id: "guest-20", name: "Bro and Sis Prince Isaac", maxGuests: 2 },
  { id: "guest-21", name: "Bro and Sis Ebuka Nwazeama", maxGuests: 2 },
  { id: "guest-22", name: "Bro God’s Gift Obi", maxGuests: 1 },
  { id: "guest-23", name: "Josiah Nwazeama", maxGuests: 1 },
  { id: "guest-24", name: "Bro and Sis Emeke Arinze", maxGuests: 2 },
  { id: "guest-25", name: "Bro and Sis Emmanuel Arinze", maxGuests: 2 },
  { id: "guest-26", name: "Bro and Sis Nwabueze", maxGuests: 2 },
  { id: "guest-27", name: "Bro and Sis Oiyemuria", maxGuests: 2 },
  { id: "guest-28", name: "Sis Justina Ayeni", maxGuests: 1 },
  { id: "guest-29", name: "Bro Femi Adewunmi", maxGuests: 1 },
  { id: "guest-30", name: "Bro and Sis Agunmo", maxGuests: 2 },
  { id: "guest-31", name: "Teni Alufa", maxGuests: 1 },
  { id: "guest-32", name: "Pa Adedeji and wife", maxGuests: 2 },
  { id: "guest-33", name: "Bro and Sister Ifetoye", maxGuests: 2 },
  { id: "guest-34", name: "Bro Alaji Olaniran", maxGuests: 1 },
  { id: "guest-35", name: "Bro and Sis Godwin Obi", maxGuests: 2 },
  { id: "guest-36", name: "Sis Kessiena", maxGuests: 1 },
  { id: "guest-37", name: "Mr David Adebayo, Mama and Baba Amuda", maxGuests: 3 },
  { id: "guest-38", name: "Mr Bimbo and Alhaja Oloyede", maxGuests: 2 },
  { id: "guest-39", name: "Nahola", maxGuests: 1 },
  { id: "guest-40", name: "Mrs Funke", maxGuests: 1 },
  { id: "guest-41", name: "Mrs Abimbola", maxGuests: 1 },
  { id: "guest-42", name: "Blessing", maxGuests: 1 },
  { id: "guest-43", name: "Pamela", maxGuests: 1 },
  { id: "guest-44", name: "Busayo", maxGuests: 1 },
  { id: "guest-45", name: "Simi", maxGuests: 1 },
  { id: "guest-46", name: "Mrs Esther", maxGuests: 1 },
  { id: "guest-47", name: "Becca", maxGuests: 1 },
  { id: "guest-48", name: "Tolani", maxGuests: 1 },
  { id: "guest-49", name: "Lilian", maxGuests: 1 },
  { id: "guest-50", name: "Aunty Nwakego Okoli", maxGuests: 1 },
  { id: "guest-51", name: "Mrs Funmilayo Balogun", maxGuests: 1 },
  { id: "guest-52", name: "Mr Andy and Co Ucss", maxGuests: 4 },
  { id: "guest-53", name: "Sis Edith Os", maxGuests: 1 },
  { id: "guest-54", name: "Olamide", maxGuests: 1 },
  { id: "guest-55", name: "Chiyonce", maxGuests: 1 },
  { id: "guest-56", name: "Michael Ekpeti", maxGuests: 1 },

  { id: "guest-57", name: "Oyeyemi's Family", maxGuests: 3 },
  { id: "guest-58", name: "Afolabi's Family", maxGuests: 3 },
  { id: "guest-59", name: "Sola Oyeyemi and family", maxGuests: 4 },
  { id: "guest-60", name: "Idris Oko-osi and family", maxGuests: 5 },
  { id: "guest-61", name: "Qudus Oko-osi and family", maxGuests: 4 },
  { id: "guest-62", name: "Sodiq Oko-osi and family", maxGuests: 3 },
  { id: "guest-63", name: "Eruwahvwe family", maxGuests: 6 },
  { id: "guest-64", name: "Essien family", maxGuests: 5 },
  { id: "guest-65", name: "Elizabeth", maxGuests: 1 },
  { id: "guest-66", name: "Akinremi family", maxGuests: 4 },
  { id: "guest-67", name: "Ologe family", maxGuests: 4 },
  { id: "guest-68", name: "Aunty's Aina and Wande Family", maxGuests: 5 },
  { id: "guest-69", name: "Bisi Yaya and Family", maxGuests: 3 },
  { id: "guest-70", name: "Jumoke, Adiza, Oga", maxGuests: 3 },
  { id: "guest-71", name: "Ugochukwu Family", maxGuests: 6 },
  { id: "guest-72", name: "Bewaji Family", maxGuests: 6 },
  { id: "guest-73", name: "Iboku family", maxGuests: 3 },
  { id: "guest-74", name: "Fatimehin family", maxGuests: 2 },
  { id: "guest-75", name: "Imoh Iniunam", maxGuests: 1 },
  { id: "guest-76", name: "Agali family", maxGuests: 2 },
  { id: "guest-77", name: "Omo Agali", maxGuests: 1 },
  { id: "guest-78", name: "Ojo", maxGuests: 6 },
  { id: "guest-79", name: "Williams family", maxGuests: 4 },
  { id: "guest-80", name: "Bro Ado", maxGuests: 1 },
  { id: "guest-81", name: "Bro Otome Opuoro", maxGuests: 1 },
  { id: "guest-82", name: "Dami Folarin", maxGuests: 1 },
  { id: "guest-83", name: "Chinedum Odii", maxGuests: 1 },
  { id: "guest-84", name: "Chidinma Afogu", maxGuests: 1 },
  { id: "guest-85", name: "Aliyu Abdullahi", maxGuests: 1 },
  { id: "guest-86", name: "Emmanuel Sam", maxGuests: 1 },
  { id: "guest-87", name: "Waliyah Okunade", maxGuests: 1 },
  { id: "guest-88", name: "Adesoji Olaitan", maxGuests: 2 },
  { id: "guest-89", name: "Brown Memoye", maxGuests: 1 },
  { id: "guest-90", name: "Taiwo Raji", maxGuests: 1 },
  { id: "guest-91", name: "Precious Iwuala", maxGuests: 1 },
  { id: "guest-92", name: "Zino Ove", maxGuests: 1 },
];

export function findGuestByName(name: string): GuestInvitation | undefined {
  // First try exact match
  let guest = guestList.find(g => 
    g.name.toLowerCase() === name.toLowerCase()
  );
  
  if (guest) return guest;
  
  // Try partial match
  guest = guestList.find(g => 
    g.name.toLowerCase().includes(name.toLowerCase()) ||
    name.toLowerCase().includes(g.name.toLowerCase())
  );
  
  return guest;
}

export function findGuestById(id: string): GuestInvitation | undefined {
  return guestList.find(g => g.id === id);
}

export function generateGuestUrl(guestId: string): string {
  const guest = findGuestById(guestId);
  if (!guest) return '/';
  
  // Import dynamically to avoid circular dependencies
  const { generateSignedUrl } = require('@/lib/url-signer');
  return generateSignedUrl(guest.name, guest.maxGuests);
}

export function generateAllGuestLinks(baseUrl: string = ''): Array<{name: string, url: string, maxGuests: number}> {
  return guestList.map(guest => ({
    name: guest.name,
    url: `${baseUrl}${generateGuestUrl(guest.id)}`,
    maxGuests: guest.maxGuests
  }));
}

export function exportGuestLinksAsText(baseUrl: string = ''): string {
  const links = generateAllGuestLinks(baseUrl);
  return links.map(({name, url, maxGuests}) => 
    `${name} (${maxGuests} guests): ${url}`
  ).join('\n');
}

export function exportGuestLinksAsCSV(baseUrl: string = ''): string {
  const links = generateAllGuestLinks(baseUrl);
  const header = 'Name,Max Guests,URL';
  const rows = links.map(({name, url, maxGuests}) => 
    `"${name}",${maxGuests},"${url}"`
  );
  return [header, ...rows].join('\n');
}