# SIH 2025 Website - Deployment Guide

This guide will help you deploy the SIH 2025 Internal Hackathon website on various platforms.

## Quick Setup

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Local Development
1. **Navigate to project directory**
   ```bash
   cd SIH_2025_WEBSITE_CODE
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   
   The website will be available at `http://localhost:5000`

### Production Build
```bash
npm run build
npm start
```

## Deployment Options

### 1. Vercel (Recommended)
1. Push your code to GitHub/GitLab
2. Connect your repository to Vercel
3. Build Command: `npm run build`
4. Output Directory: `dist/public`
5. Install Command: `npm install`

### 2. Netlify
1. Push your code to GitHub/GitLab
2. Connect to Netlify
3. Build Command: `npm run build`
4. Publish Directory: `dist/public`

### 3. GitHub Pages
1. Build the project: `npm run build`
2. Copy contents of `dist/public` to your GitHub Pages repository
3. Ensure `index.html` is in the root

### 4. Traditional Web Hosting
1. Run `npm run build`
2. Upload contents of `dist/public` folder to your web hosting provider
3. Ensure your hosting supports single-page applications (SPA)

## Environment Configuration

### Required Environment Variables
None required for the basic website. The site works entirely with static content.

### Optional Customizations
- Update Google Form link in the registration section
- Modify coordinator contact information
- Adjust color scheme in `client/src/index.css`

## Custom Domain Setup

### For Vercel/Netlify
1. Go to your project dashboard
2. Navigate to "Domains" or "Domain Management"
3. Add your custom domain
4. Update your DNS records as instructed

### For Other Hosting
1. Update your domain's DNS A record to point to your hosting provider's IP
2. Ensure SSL certificate is configured

## Content Updates

### Event Details
Edit `client/src/pages/home.tsx` to update:
- Event dates
- Registration deadlines
- Schedule information
- Requirements

### Coordinator Information
Edit `client/src/pages/contacts.tsx` to update:
- Faculty coordinator details
- Student coordinator list
- Faculty jury members

### Registration Form
Update the Google Form link in the registration section of `home.tsx`:
```tsx
<Button onClick={() => window.open('YOUR_GOOGLE_FORM_URL', '_blank')}>
```

## Performance Optimization

### Recommended Settings
- Enable gzip compression on your server
- Set appropriate cache headers for static assets
- Consider using a CDN for better global performance

### Image Optimization
- All images are optimized SVGs or external URLs
- No additional image processing required

## Troubleshooting

### Build Fails
1. Check Node.js version (18+ required)
2. Clear node_modules and reinstall: `rm -rf node_modules && npm install`
3. Check for any TypeScript errors: `npm run type-check`

### Website Not Loading
1. Ensure all files are uploaded correctly
2. Check that index.html is in the root directory
3. Verify your hosting supports single-page applications

### Styling Issues
1. Ensure Tailwind CSS is building correctly
2. Check that all CSS files are included in the build
3. Verify browser compatibility

## Support

For technical issues with the website code, refer to the project documentation or contact the development team.

For event-related questions, contact the coordinators listed on the website.

## Security Notes

- No sensitive data is stored in the frontend code
- All contact information is intentionally public
- Google Form handles all registration data securely
- Consider adding rate limiting if using a custom backend

## Backup and Maintenance

### Regular Updates
- Keep dependencies updated: `npm update`
- Monitor for security vulnerabilities: `npm audit`
- Test functionality after updates

### Content Backup
- Keep a backup of your customized content
- Document any changes made to the original template
- Use version control (Git) for change tracking