# SIH 2025 Website - Deployment Checklist

## Before You Deploy

### ✅ Pre-Deployment Checklist
- [ ] Code is in a GitHub repository
- [ ] All files are committed and pushed
- [ ] Node.js 18+ is available on deployment platform
- [ ] Build commands are correctly configured

### ✅ Choose Your Deployment Method

#### For Beginners (Recommended)
**Static Deployment** - Easiest and most reliable:
1. [ ] Run: `node static-deploy.js`
2. [ ] Use the created `sih-2025-static` folder
3. [ ] Deploy to GitHub Pages, Netlify, or Vercel

#### For Advanced Users
**Full-Stack Deployment** - Use the original project with Express server

---

## Platform-Specific Quick Setup

### 🚀 GitHub Pages (Static - FREE)
1. [ ] Create static version: `node static-deploy.js`
2. [ ] Push `sih-2025-static` contents to GitHub repo
3. [ ] Go to repo Settings > Pages
4. [ ] Source: "GitHub Actions"
5. [ ] Deployment will happen automatically

**Result**: `https://yourusername.github.io/your-repo-name`

### 🚀 Netlify (Static - FREE)
1. [ ] Create static version: `node static-deploy.js`
2. [ ] Push `sih-2025-static` contents to GitHub
3. [ ] Connect GitHub repo to Netlify
4. [ ] Build command: `npm run build`
5. [ ] Publish directory: `dist`

**Result**: `https://random-name.netlify.app` (customizable)

### 🚀 Vercel (Static - FREE)
1. [ ] Create static version: `node static-deploy.js`
2. [ ] Push `sih-2025-static` contents to GitHub
3. [ ] Import GitHub repo to Vercel
4. [ ] Framework: Vite
5. [ ] Build command: `npm run build`
6. [ ] Output directory: `dist`

**Result**: `https://your-project.vercel.app`

### 🚀 Traditional Web Hosting
1. [ ] Create static version: `node static-deploy.js`
2. [ ] Go to `sih-2025-static` folder
3. [ ] Run: `npm install && npm run build`
4. [ ] Upload contents of `dist` folder to your hosting provider

---

## Troubleshooting Common Issues

### ❌ Build Fails
- [ ] Check Node.js version (need 18+)
- [ ] Run: `npm install` then `npm run build`
- [ ] Check error messages in terminal

### ❌ Blank Page After Deployment
- [ ] Check browser console for errors
- [ ] Ensure `index.html` is in the root of deployed files
- [ ] Verify all assets loaded correctly

### ❌ 404 Errors on Refresh
- [ ] Configure SPA routing on your hosting platform
- [ ] For GitHub Pages: Already configured in workflow
- [ ] For Netlify: Already configured in `netlify.toml`
- [ ] For others: Set up redirect rules to `index.html`

### ❌ Styles Not Loading
- [ ] Ensure build completed successfully
- [ ] Check that CSS files are in the deployed assets
- [ ] Clear browser cache and refresh

---

## Quick Commands Reference

```bash
# Create static version (recommended)
node static-deploy.js

# Manual build (in static folder)
cd sih-2025-static
npm install
npm run build

# Development testing
npm run dev

# Check for issues
node setup-check.js
```

---

## After Successful Deployment

### ✅ Post-Deployment Checklist
- [ ] Website loads correctly
- [ ] All pages accessible (Home, Coordinator Details)
- [ ] Navigation works properly
- [ ] Contact information displays correctly
- [ ] Registration button works
- [ ] Mobile responsiveness verified
- [ ] Cross-browser testing (Chrome, Firefox, Safari)

### ✅ Content Updates
To update content after deployment:
1. [ ] Edit files in your GitHub repository
2. [ ] Commit and push changes
3. [ ] Deployment will happen automatically (if configured)

### ✅ Custom Domain (Optional)
- [ ] Purchase domain from registrar
- [ ] Configure DNS settings
- [ ] Add custom domain in platform settings
- [ ] Wait for SSL certificate generation

---

## Support

**Quick Fix**: Most issues are solved by using the static deployment method.

**For Deployment Issues**:
1. Try the static version first: `node static-deploy.js`
2. Check TROUBLESHOOTING.md for specific errors
3. Verify all checklist items above

**Platform Documentation**:
- [GitHub Pages](https://docs.github.com/en/pages)
- [Netlify](https://docs.netlify.com/)
- [Vercel](https://vercel.com/docs)