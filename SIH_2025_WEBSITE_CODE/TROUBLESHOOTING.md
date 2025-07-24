# SIH 2025 Website - Troubleshooting Guide

## Common Issues and Solutions

### ❌ Error: "Could not find the build directory: server/public"

**Problem**: The Express server can't find the frontend build files.

**Solution**: This happens when you haven't built the frontend yet. Run:
```bash
npm run build
```

This creates the `server/public` folder with your built website files.

**Why it happens**: The Vite build process creates the frontend files that the Express server needs to serve your website.

---

### ❌ "Browserslist: browsers data is 9 months old"

**Problem**: Browser compatibility database is outdated.

**Solution**: Run:
```bash
npm run update-browsers
```

Or manually:
```bash
npx update-browserslist-db@latest
```

---

### ❌ Build fails or crashes

**Problem**: Dependencies or configuration issues.

**Solutions**:
1. **Clear and reinstall dependencies**:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Check Node.js version**: Ensure you have Node.js 18+ installed
   ```bash
   node --version
   ```

3. **Run TypeScript check**:
   ```bash
   npm run check
   ```

---

### ❌ Website shows blank page or 404 errors

**Problem**: Frontend routing or build issues.

**Solutions**:
1. **Check browser console** for JavaScript errors
2. **Ensure build was successful**:
   ```bash
   npm run build
   ```
3. **Verify server/public exists** and contains files
4. **Clear browser cache** and refresh

---

### ❌ Styles not loading or broken layout

**Problem**: CSS/Tailwind not building correctly.

**Solutions**:
1. **Rebuild with clean cache**:
   ```bash
   npm run build
   ```
2. **Check Tailwind config** in `tailwind.config.ts`
3. **Verify CSS imports** in `client/src/index.css`

---

### ❌ Port already in use

**Problem**: Port 5000 is occupied by another process.

**Solutions**:
1. **Kill existing process**:
   ```bash
   # Windows
   netstat -ano | findstr :5000
   taskkill /PID <PID_NUMBER> /F
   
   # Mac/Linux
   lsof -ti:5000 | xargs kill -9
   ```

2. **Use different port**: Edit `server/index.ts` to change the port

---

### ❌ Database connection errors

**Problem**: PostgreSQL database not configured.

**Solutions**:
1. **For development**: The website works without database
2. **For production**: Set up `DATABASE_URL` environment variable
3. **Skip database features**: Comment out database-related code in `server/index.ts`

---

## Quick Fix Checklist

When something goes wrong, try these steps in order:

1. ✅ **Run the build**: `npm run build`
2. ✅ **Check for errors**: Look at terminal output
3. ✅ **Restart server**: Stop and run `npm run dev` again
4. ✅ **Clear browser cache**: Hard refresh (Ctrl+F5)
5. ✅ **Check file permissions**: Ensure you can read/write to project folder
6. ✅ **Reinstall dependencies**: Delete `node_modules` and run `npm install`

---

## Development Tips

### Hot Reload Not Working
- Restart the development server
- Check that you're editing files in the correct location
- Ensure no syntax errors in your code

### Performance Issues
- Check that only necessary dependencies are installed
- Optimize images (use SVGs when possible)
- Enable gzip compression in production

### Deployment Issues
- Ensure all environment variables are set
- Verify build directory structure
- Check hosting platform requirements

---

## Getting Help

### Before Asking for Help
1. Check this troubleshooting guide
2. Look at browser console for errors
3. Check terminal output for error messages
4. Try the quick fix checklist above

### Useful Information to Include
- Your operating system (Windows/Mac/Linux)
- Node.js version (`node --version`)
- Full error messages
- Steps you tried before the error occurred

### Log Collection
To get detailed logs:
```bash
npm run dev > debug.log 2>&1
```
This saves all output to `debug.log` file.

---

## Advanced Troubleshooting

### Clean Development Environment
```bash
# Remove all generated files
rm -rf node_modules package-lock.json server/public dist

# Fresh install
npm install
npm run build
npm run dev
```

### Check File Structure
Run the verification script:
```bash
node setup-check.js
```

### Manual Build Verification
```bash
# Build should create these files:
ls server/public/index.html
ls server/public/assets/
```

If these don't exist after `npm run build`, there's a build configuration issue.