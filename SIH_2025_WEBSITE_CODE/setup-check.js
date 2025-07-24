#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 SIH 2025 Website Setup Verification\n');

// Check required files
const requiredFiles = [
  'package.json',
  'client/index.html',
  'client/src/main.tsx',
  'client/src/App.tsx',
  'client/src/index.css',
  'client/src/pages/home.tsx',
  'client/src/pages/contacts.tsx',
  'client/src/pages/not-found.tsx',
  'tailwind.config.ts',
  'vite.config.ts',
  'README.md',
  'DEPLOYMENT_GUIDE.md'
];

console.log('📁 Checking required files...');
let allFilesPresent = true;

requiredFiles.forEach(file => {
  if (fs.existsSync(path.join(__dirname, file))) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ ${file} - MISSING`);
    allFilesPresent = false;
  }
});

// Check package.json for key dependencies
if (fs.existsSync('package.json')) {
  console.log('\n📦 Checking dependencies...');
  const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  
  const keyDeps = ['react', 'typescript', 'tailwindcss', 'wouter', '@tanstack/react-query'];
  keyDeps.forEach(dep => {
    if (pkg.dependencies && pkg.dependencies[dep]) {
      console.log(`✅ ${dep}`);
    } else if (pkg.devDependencies && pkg.devDependencies[dep]) {
      console.log(`✅ ${dep} (dev)`);
    } else {
      console.log(`❌ ${dep} - MISSING`);
      allFilesPresent = false;
    }
  });
}

console.log('\n🚀 Setup Summary:');
if (allFilesPresent) {
  console.log('✅ All files and dependencies are present!');
  console.log('\n📋 Next steps:');
  console.log('1. Run: npm install');
  console.log('2. Run: npm run build (IMPORTANT - Build frontend first!)');
  console.log('3. Run: npm run dev');
  console.log('4. Open: http://localhost:5000');
  console.log('\nAlternatively, run quick-setup.bat (Windows) or ./quick-setup.sh (Mac/Linux)');
  console.log('\n📖 For deployment instructions, see DEPLOYMENT_GUIDE.md');
} else {
  console.log('❌ Some files or dependencies are missing. Please check the setup.');
}

console.log('\n🌐 Website Features:');
console.log('• Hero section with event details');
console.log('• Complete hackathon schedule');
console.log('• Registration section with Google Form integration');
console.log('• Coordinator contact details');
console.log('• Faculty jury information');
console.log('• Responsive modern design');
console.log('• Eye-friendly color scheme');