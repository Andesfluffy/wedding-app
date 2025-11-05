export interface GuestInvitation {
  id: string;
  name: string;
  maxGuests: number;
  email?: string;
  phone?: string;
}

export const guestList: GuestInvitation[] = [
  // Bride's Family
  { id: "bride-family-1", name: "Dad & Mum", maxGuests: 2 },
  { id: "bride-family-2", name: "David & Christy", maxGuests: 2 },
  { id: "bride-family-3", name: "Bro Men & Sis Beth", maxGuests: 2 },
  { id: "bride-family-4", name: "Mum Bethel", maxGuests: 2 },
  { id: "bride-family-5", name: "Nnem", maxGuests: 1 },
  { id: "bride-family-6", name: "Onome & Mum Onome", maxGuests: 2 },
  { id: "bride-family-7", name: "Uncle Jun", maxGuests: 2 },
  { id: "bride-family-8", name: "Uncle BJ & Aunty Esther", maxGuests: 2 },
  { id: "bride-family-9", name: "Feji & Fego", maxGuests: 2 },
  { id: "bride-family-10", name: "Uncle Paul & Wife", maxGuests: 2 },
  { id: "bride-family-11", name: "Uncle Tombara & Wife", maxGuests: 2 },
  { id: "bride-family-12", name: "Aunty Ebi", maxGuests: 3 },
  { id: "bride-family-13", name: "Uncle Patani & Wife", maxGuests: 2 },
  { id: "bride-family-14", name: "Uncle Preye & Wife", maxGuests: 2 },
  { id: "bride-family-15", name: "Uncle Yonwe & Aunty Douye", maxGuests: 2 },
  { id: "bride-family-16", name: "Aunty Helen", maxGuests: 1 },
  { id: "bride-family-17", name: "Iya Bolanle", maxGuests: 1 },
  { id: "bride-family-18", name: "Uncle Michael", maxGuests: 1 },
  { id: "bride-family-19", name: "Bro Nwani & Wife", maxGuests: 2 },
  { id: "bride-family-20", name: "Francis", maxGuests: 1 },
  { id: "bride-family-21", name: "Sis Funmi Family", maxGuests: 2 },
  
  // Bride's Brothers (Congregation/Spiritual Family)
  { id: "bride-brothers-1", name: "Bro Igbeto", maxGuests: 1 },
  { id: "bride-brothers-2", name: "Bro Balogun & Sis Balogun", maxGuests: 2 },
  { id: "bride-brothers-3", name: "Lolade", maxGuests: 2 },
  { id: "bride-brothers-4", name: "Sis Amosun & Twins", maxGuests: 3 },
  { id: "bride-brothers-5", name: "Mama Dada", maxGuests: 1 },
  { id: "bride-brothers-6", name: "Bro Jerry & Wife", maxGuests: 2 },
  { id: "bride-brothers-7", name: "Uloma & Husband", maxGuests: 2 },
  { id: "bride-brothers-8", name: "Bro Ebuka & Wife", maxGuests: 2 },
  { id: "bride-brothers-9", name: "Kewe", maxGuests: 1 },
  { id: "bride-brothers-10", name: "Josiah", maxGuests: 1 },
  { id: "bride-brothers-11", name: "Femi", maxGuests: 1 },
  { id: "bride-brothers-12", name: "Bro Obi", maxGuests: 1 },
  { id: "bride-brothers-13", name: "Arinze", maxGuests: 4 },
  { id: "bride-brothers-14", name: "Sis Ayeni", maxGuests: 1 },
  { id: "bride-brothers-15", name: "Bro & Sis Nwabueze", maxGuests: 2 },
  { id: "bride-brothers-16", name: "Bro & Sis Oiyemuriai", maxGuests: 2 },
  { id: "bride-brothers-17", name: "Bro & Sis Agomo", maxGuests: 2 },
  { id: "bride-brothers-18", name: "Bro & Sis Ifetoye", maxGuests: 2 },
  { id: "bride-brothers-19", name: "Bro Obi Godwin", maxGuests: 1 },
  { id: "bride-brothers-20", name: "Bro Olaniran", maxGuests: 1 },
  
  // Bride's Sisters & Friends
  { id: "bride-friends-1", name: "Ruth Obi", maxGuests: 1 },
  { id: "bride-friends-2", name: "Teniola Alufa", maxGuests: 1 },
  { id: "bride-friends-3", name: "Mary Rasheed", maxGuests: 1 },
  
  // Bride's Counselors & Mentors
  { id: "bride-mentors-1", name: "Counselor", maxGuests: 1 },
  { id: "bride-mentors-2", name: "Oloyede", maxGuests: 1 },
  { id: "bride-mentors-3", name: "Mama Welder", maxGuests: 1 },
  
  // Bride's Colleagues & Associates
  { id: "bride-colleagues-1", name: "Nahola", maxGuests: 1 },
  { id: "bride-colleagues-2", name: "Mrs Funke", maxGuests: 1 },
  { id: "bride-colleagues-3", name: "Mrs Abimbola", maxGuests: 1 },
  { id: "bride-colleagues-4", name: "Blessing", maxGuests: 1 },
  { id: "bride-colleagues-5", name: "Pamela", maxGuests: 1 },
  { id: "bride-colleagues-6", name: "Busayo", maxGuests: 1 },
  { id: "bride-colleagues-7", name: "Simi", maxGuests: 1 },
  { id: "bride-colleagues-8", name: "Mrs Esther", maxGuests: 1 },
  { id: "bride-colleagues-9", name: "Becca", maxGuests: 1 },
  { id: "bride-colleagues-10", name: "Tolani", maxGuests: 1 },
  { id: "bride-colleagues-11", name: "Lilian", maxGuests: 1 },
  { id: "bride-colleagues-12", name: "Aunty Funmi", maxGuests: 1 },
  { id: "bride-colleagues-13", name: "Aunty Nwakego", maxGuests: 1 },
  { id: "bride-colleagues-14", name: "Olamide", maxGuests: 1 },
  { id: "bride-colleagues-15", name: "Chiyonce", maxGuests: 1 },
  { id: "bride-colleagues-16", name: "Sis Fatunsin", maxGuests: 1 },
  { id: "bride-colleagues-17", name: "Jahdarasimi", maxGuests: 1 },
  
  // Groom's Family & Close Friends
  { id: "groom-family-1", name: "Oyeyemi", maxGuests: 3 },
  { id: "groom-family-2", name: "Afolabi", maxGuests: 5 },
  { id: "groom-family-3", name: "Sola Family", maxGuests: 4 },
  { id: "groom-family-4", name: "Idris Family", maxGuests: 5 },
  { id: "groom-family-5", name: "Qudus", maxGuests: 4 },
  { id: "groom-family-6", name: "Sodiq", maxGuests: 3 },
  { id: "groom-family-7", name: "Kate", maxGuests: 6 },
  { id: "groom-family-8", name: "Rose", maxGuests: 5 },
  { id: "groom-family-9", name: "Elizabeth", maxGuests: 1 },
  { id: "groom-family-10", name: "Funmi Akinremi", maxGuests: 4 },
  { id: "groom-family-11", name: "Kemi Ologe", maxGuests: 4 },
  { id: "groom-family-12", name: "Aunty's Aina and Wande Family", maxGuests: 5 },
  { id: "groom-family-13", name: "Bisi Yaya and Family", maxGuests: 3 },
  { id: "groom-family-14", name: "Jumoke, Adiza, Oga", maxGuests: 3 },
  { id: "groom-family-15", name: "Ugochukwu Family", maxGuests: 6 },
  { id: "groom-family-16", name: "Bewaji Family", maxGuests: 6 },
  { id: "groom-family-17", name: "Abel Iboku", maxGuests: 3 },
  { id: "groom-family-18", name: "Fatimehin Family", maxGuests: 2 },
  { id: "groom-family-19", name: "Imoh Iniunam", maxGuests: 1 },
  { id: "groom-family-20", name: "Agali", maxGuests: 3 },
  { id: "groom-family-21", name: "Ojo", maxGuests: 6 },
  { id: "groom-family-22", name: "Williams", maxGuests: 4 },
  
  // Groom's Brothers & Associates
  { id: "groom-brothers-1", name: "Bro Ado", maxGuests: 1 },
  { id: "groom-brothers-2", name: "Bro Otome Opuoro", maxGuests: 1 },
  { id: "groom-brothers-3", name: "Dami Folarin", maxGuests: 1 },
  { id: "groom-brothers-4", name: "Chinedum", maxGuests: 1 },
  { id: "groom-brothers-5", name: "Chidinma", maxGuests: 1 },
  { id: "groom-brothers-6", name: "Aliyu", maxGuests: 1 },
  { id: "groom-brothers-7", name: "Emmanuel", maxGuests: 1 },
  { id: "groom-brothers-8", name: "Waliyah", maxGuests: 1 },
  { id: "groom-brothers-9", name: "Soji", maxGuests: 2 },
  { id: "groom-brothers-10", name: "Brown", maxGuests: 1 },
  { id: "groom-brothers-11", name: "Taiwo", maxGuests: 1 },
  { id: "groom-brothers-12", name: "Precious", maxGuests: 1 },
  { id: "groom-brothers-13", name: "Zino", maxGuests: 1 },
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
  
  const params = new URLSearchParams({
    guest: guest.name,
    max: guest.maxGuests.toString()
  });
  
  return `/?${params.toString()}`;
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