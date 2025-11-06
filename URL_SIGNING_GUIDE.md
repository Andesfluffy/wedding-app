# URL Signing Secret Management Guide

## 🔐 What is the URL Signing Secret?

The URL signing secret is a cryptographic key used to generate secure, tamper-proof invitation links for your wedding guests. It ensures that only authorized links with valid signatures can access personalized content.

## 🚀 How to Generate a Secure Secret

### Option 1: Use the Generator Script (Recommended)
```bash
node generate-secret.js
```

### Option 2: Generate Manually
```bash
# Linux/Mac
openssl rand -hex 32

# Windows (PowerShell)
-join ((65..90) + (97..122) + (48..57) | Get-Random -Count 32 | % {[char]$_})
```

### Option 3: Use Online Generator
- Visit: https://randomkeygen.com/
- Choose "CodeIgniter Encryption Keys" (32-character hex)

## 📋 Setting Up Your Secret

1. **Copy your generated secret**
2. **Update your .env.local file:**
   ```bash
   URL_SIGNING_SECRET="your-generated-secret-here"
   ```

3. **Restart your development server:**
   ```bash
   npm run dev
   ```

## ⚠️ Important Security Notes

### 🔒 Production Environment
- **NEVER** use the default/development secret in production
- **ALWAYS** generate a new, unique secret for production
- **NEVER** commit your secret to version control
- **NEVER** share your secret publicly

### 🔑 Secret Best Practices
- Use at least 32 characters (64 hex characters recommended)
- Use cryptographically secure random generation
- Rotate secrets periodically (requires regenerating all links)
- Store secrets in environment variables only
- Use different secrets for different environments

## 🔄 Regenerating Guest Links

When you change your secret, **all existing guest links become invalid**. You'll need to:

1. Generate a new secret
2. Update your environment
3. Regenerate all guest links using the guest-links page
4. Redistribute new links to guests

## 🚨 Emergency Secret Reset

If you suspect your secret has been compromised:

1. **Immediately** generate a new secret
2. **Update** your environment variables
3. **Regenerate** all guest links
4. **Redistribute** new links to guests
5. **Monitor** for unauthorized access attempts

## 📞 Need Help?

If you have issues with the URL signing system:
- Check that your secret is properly set in .env.local
- Ensure your development server is restarted after changes
- Verify the secret is at least 32 characters long
- Check the browser console for validation errors

## 🔗 Current Secret Status

✅ **Secret Generated**: 760e420d85db6efe0fd7eaf348cc3e1f1612e7cb8da2485803d8902c4e931fd9
✅ **Environment Updated**: .env.local file updated
✅ **System Active**: All new guest links will use this secret

---

**Remember**: Keep this secret safe and private! It's the key to your wedding invitation security.