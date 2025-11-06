import crypto from 'node:crypto';

const SECRET_KEY = process.env.URL_SIGNING_SECRET || 'your-secret-key-change-this-in-production';

export interface SignedParams {
  guest: string;
  max: string;
  signature: string;
}

export function generateSignedUrl(guest: string, maxGuests: number, baseUrl: string = ''): string {
  const params = new URLSearchParams();
  params.set('guest', guest);
  params.set('max', maxGuests.toString());
  
  const signature = generateSignature(guest, maxGuests.toString());
  params.set('signature', signature);
  
  return `${baseUrl}?${params.toString()}`;
}

export function generateSignature(guest: string, max: string): string {
  const data = `${guest}:${max}`;
  return crypto
    .createHmac('sha256', SECRET_KEY)
    .update(data)
    .digest('hex');
}

export function validateSignedUrl(guest: string, max: string, signature: string): boolean {
  const expectedSignature = generateSignature(guest, max);
  return crypto.timingSafeEqual(
    Buffer.from(signature, 'hex'),
    Buffer.from(expectedSignature, 'hex')
  );
}

export function parseSignedParams(searchParams: URLSearchParams): { guest: string; max: number; isValid: boolean } {
  const guest = searchParams.get('guest') || '';
  const max = searchParams.get('max') || '';
  const signature = searchParams.get('signature') || '';
  
  if (!guest || !max || !signature) {
    return { guest: '', max: 0, isValid: false };
  }
  
  const isValid = validateSignedUrl(guest, max, signature);
  const maxGuests = parseInt(max, 10);
  
  return {
    guest,
    max: isValid && !isNaN(maxGuests) ? maxGuests : 0,
    isValid
  };
}