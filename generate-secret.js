// Generate a secure random secret for URL signing
const crypto = require('crypto');

// Method 1: Generate a cryptographically secure random string
const generateSecureSecret = () => {
  return crypto.randomBytes(32).toString('hex'); // 64-character hex string
};

// Method 2: Generate a base64 encoded secret (shorter)
const generateBase64Secret = () => {
  return crypto.randomBytes(24).toString('base64'); // ~32 characters
};

// Method 3: Generate an alphanumeric secret (readable)
const generateAlphanumericSecret = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 32; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

console.log('=== Secure URL Signing Secret Generator ===\n');

console.log('Option 1 - Cryptographically Secure (Recommended):');
console.log(`URL_SIGNING_SECRET="${generateSecureSecret()}"\n`);

console.log('Option 2 - Base64 Encoded:');
console.log(`URL_SIGNING_SECRET="${generateBase64Secret()}"\n`);

console.log('Option 3 - Alphanumeric:');
console.log(`URL_SIGNING_SECRET="${generateAlphanumericSecret()}"\n`);

console.log('=== Instructions ===');
console.log('1. Copy one of the secrets above');
console.log('2. Replace the URL_SIGNING_SECRET in your .env.local file');
console.log('3. Restart your development server');
console.log('4. Regenerate all guest links using the new secret');