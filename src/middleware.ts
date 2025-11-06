import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Edge-safe HMAC-SHA256 using Web Crypto API
async function hmacSHA256Hex(secret: string, data: string): Promise<string> {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw',
    enc.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const signature = await crypto.subtle.sign('HMAC', key, enc.encode(data));
  const bytes = new Uint8Array(signature);
  return Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join('');
}

export async function middleware(request: NextRequest) {
  const { searchParams, pathname } = request.nextUrl;

  // Enforce signed URL for RSVP
  if (pathname === '/rsvp') {
    const guest = searchParams.get('guest') || '';
    const max = searchParams.get('max') || '';
    const signature = searchParams.get('signature') || '';
    const secret = process.env.URL_SIGNING_SECRET || '';

    // Require presence and validity
    const hasAllParams = Boolean(guest && max && signature && secret);
    let isValid = false;

    if (hasAllParams) {
      const expected = await hmacSHA256Hex(secret, `${guest}:${max}`);
      isValid = signature === expected;
    }

    if (!isValid) {
      return NextResponse.redirect(new URL('/invalid-link', request.url));
    }
  } else if (pathname === '/') {
    // Home remains permissive: validate only if params are present
    const guest = searchParams.get('guest') || '';
    const max = searchParams.get('max') || '';
    const signature = searchParams.get('signature') || '';

    if (guest || max || signature) {
      const secret = process.env.URL_SIGNING_SECRET || '';
      let isValid = false;

      if (secret && guest && max && signature) {
        const expected = await hmacSHA256Hex(secret, `${guest}:${max}`);
        isValid = signature === expected;
      }

      if (!isValid) {
        return NextResponse.redirect(new URL('/invalid-link', request.url));
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/rsvp'],
};