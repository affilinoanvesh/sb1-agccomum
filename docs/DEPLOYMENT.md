# Deployment Guide - Fixing SPA Routing Issues

This guide explains how to fix 404 errors when directly accessing URLs or refreshing pages in your React SPA.

## The Problem

Single Page Applications (SPAs) handle routing on the client side, but servers look for physical files at those paths. When you visit `/voice-agent` directly, the server looks for a file at that path, which doesn't exist.

## Solutions by Hosting Provider

### 1. Netlify ✅ (Already configured)
The `public/_redirects` file is already set up:
```
/* /index.html 200
```

### 2. Vercel ✅ (Already configured)
The `public/vercel.json` file is now configured:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### 3. Apache Servers ✅ (Already configured)
The `public/.htaccess` file is now configured.

### 4. Nginx Servers ✅ (Already configured)
Use the `public/nginx.conf` as a reference for your server configuration.

### 5. GitHub Pages
Add this to your `package.json` scripts:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

Then install `gh-pages`:
```bash
npm install --save-dev gh-pages
```

### 6. Firebase Hosting
Create `firebase.json` in your project root:
```json
{
  "hosting": {
    "public": "dist",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

## Testing Locally

1. Build the project:
```bash
npm run build
```

2. Test the build locally:
```bash
npm run preview
```

3. Try accessing routes directly in your browser:
   - `http://localhost:4173/voice-agent`
   - `http://localhost:4173/about`
   - `http://localhost:4173/contact`

## Verification Checklist

- [ ] Direct URL access works
- [ ] Page refresh works on any route
- [ ] Browser back/forward buttons work
- [ ] All internal links work
- [ ] 404 page shows for invalid routes

## Common Issues

1. **Still getting 404s**: Check your hosting provider's documentation
2. **Console errors**: Check the browser console for JavaScript errors
3. **Blank pages**: Ensure your build output is correct

## Need Help?

If you're still experiencing issues:
1. Check your hosting provider's specific SPA configuration
2. Verify your build output in the `dist` folder
3. Test locally with `npm run preview`
4. Check browser console for errors 