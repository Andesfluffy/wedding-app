import { generateSignedUrl, parseSignedParams } from '@/lib/url-signer';

// Test the URL signing system
console.log('=== Testing Secure URL Signing System ===\n');

// Test 1: Generate signed URLs for different guests
const testGuests = [
  { name: 'Dad & Mum', maxGuests: 2 },
  { name: 'Oyeyemi', maxGuests: 3 },
  { name: 'Bro Igbeto', maxGuests: 1 }
];

console.log('Generated Signed URLs:');
testGuests.forEach(guest => {
  const url = generateSignedUrl(guest.name, guest.maxGuests);
  console.log(`${guest.name} (${guest.maxGuests} guests): ${url}`);
});

console.log('\n=== Testing URL Validation ===\n');

// Test 2: Validate valid URLs
const validUrl = generateSignedUrl('Dad & Mum', 2);
const urlParams = new URLSearchParams(validUrl.split('?')[1]);
const { guest, max, isValid } = parseSignedParams(urlParams);

console.log('Validating signed URL:');
console.log(`Guest: ${guest}`);
console.log(`Max Guests: ${max}`);
console.log(`Is Valid: ${isValid}`);

// Test 3: Test tampered URL (should be invalid)
urlParams.set('max', '10'); // Change max guests without updating signature
const tamperedResult = parseSignedParams(urlParams);

console.log('\nTesting tampered URL (max changed to 10):');
console.log(`Guest: ${tamperedResult.guest}`);
console.log(`Max Guests: ${tamperedResult.max}`);
console.log(`Is Valid: ${tamperedResult.isValid}`);

// Test 4: Test missing signature (should be invalid)
const missingSigParams = new URLSearchParams('guest=Dad%20%26%20Mum&max=2');
const missingSigResult = parseSignedParams(missingSigParams);

console.log('\nTesting URL with missing signature:');
console.log(`Guest: ${missingSigResult.guest}`);
console.log(`Max Guests: ${missingSigResult.max}`);
console.log(`Is Valid: ${missingSigResult.isValid}`);

console.log('\n=== Test Complete ===');