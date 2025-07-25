#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Creating static-only deployment version...\n');

// Create a static-only package.json
const staticPackage = {
  "name": "sih-2025-website",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "update-browsers": "npx update-browserslist-db@latest"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "wouter": "^3.3.5",
    "lucide-react": "^0.453.0",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.6.0"
  },
  "devDependencies": {
    "@types/react": "^18.3.11",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.2",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.47",
    "tailwindcss": "^3.4.17",
    "typescript": "5.6.3",
    "vite": "^5.4.19"
  }
};

// Create static-only vite.config.ts
const staticViteConfig = `import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});`;

// Create a simple index.html for static deployment
const staticIndexHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SIH 2025 Internal Hackathon</title>
    <meta name="description" content="Join our internal hackathon to represent our college in Smart India Hackathon 2025. August 14th, 21st, 22nd 2025." />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`;

// Function to copy directory recursively
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Create static-only version
const staticDir = 'sih-2025-static';

try {
  // Remove existing static directory
  if (fs.existsSync(staticDir)) {
    fs.rmSync(staticDir, { recursive: true, force: true });
  }
  
  // Create new static directory
  fs.mkdirSync(staticDir);
  
  // Copy client source files
  if (fs.existsSync('client/src')) {
    copyDir('client/src', path.join(staticDir, 'src'));
  }
  
  // Copy public files if they exist
  if (fs.existsSync('client/public')) {
    copyDir('client/public', path.join(staticDir, 'public'));
  }
  
  // Copy configuration files
  const configFiles = [
    'tailwind.config.ts',
    'tsconfig.json',
    'postcss.config.js',
    'components.json'
  ];
  
  configFiles.forEach(file => {
    if (fs.existsSync(file)) {
      fs.copyFileSync(file, path.join(staticDir, file));
    }
  });
  
  // Create static-specific files
  fs.writeFileSync(
    path.join(staticDir, 'package.json'), 
    JSON.stringify(staticPackage, null, 2)
  );
  
  fs.writeFileSync(
    path.join(staticDir, 'vite.config.ts'), 
    staticViteConfig
  );
  
  fs.writeFileSync(
    path.join(staticDir, 'index.html'), 
    staticIndexHtml
  );
  
  // Copy styles
  if (fs.existsSync('client/src/index.css')) {
    fs.copyFileSync('client/src/index.css', path.join(staticDir, 'src/index.css'));
  }
  
  // Create deployment instructions
  const deployInstructions = \`# Static Deployment Instructions

This is a static-only version of the SIH 2025 website, perfect for deployment on:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting provider

## Quick Deploy

1. Install dependencies:
   \\\`\\\`\\\`bash
   npm install
   \\\`\\\`\\\`

2. Build for production:
   \\\`\\\`\\\`bash
   npm run build
   \\\`\\\`\\\`

3. Deploy the \\\`dist\\\` folder to your hosting provider.

## Platform-Specific Instructions

### GitHub Pages
1. Push this code to a GitHub repository
2. Go to Settings > Pages
3. Select "GitHub Actions" as source
4. The workflow will automatically deploy on push to main

### Netlify
1. Connect your GitHub repo to Netlify
2. Build command: \\\`npm run build\\\`
3. Publish directory: \\\`dist\\\`

### Vercel
1. Connect your GitHub repo to Vercel
2. Framework preset: Vite
3. Build command: \\\`npm run build\\\`
4. Output directory: \\\`dist\\\`

The website will work exactly the same as the full-stack version!\`;

  fs.writeFileSync(
    path.join(staticDir, 'DEPLOY.md'), 
    deployInstructions
  );
  
  console.log('✅ Static deployment version created successfully!');
  console.log(\`📁 Files created in: \${staticDir}/\`);
  console.log('');
  console.log('🚀 To deploy:');
  console.log(\`1. cd \${staticDir}\`);
  console.log('2. npm install');
  console.log('3. npm run build');
  console.log('4. Upload the "dist" folder to your hosting provider');
  console.log('');
  console.log('📖 See DEPLOY.md in the static folder for detailed instructions');
  
} catch (error) {
  console.error('❌ Error creating static version:', error.message);
  process.exit(1);
}