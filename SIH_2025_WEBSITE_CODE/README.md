# SIH 2025 Internal Hackathon Website

A modern, eye-friendly website for the Smart India Hackathon 2025 internal selection process at your college. Built with React, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, eye-friendly interface with comfortable colors and Inter font
- **Complete Event Information**: Full hackathon details including schedule, requirements, and objectives
- **Registration System**: Dedicated registration section with Google Form integration
- **Coordinator Details**: Separate page with faculty and student coordinator information
- **Responsive Design**: Mobile-friendly layout that works on all devices
- **Smooth Navigation**: Anchor-based navigation with smooth scrolling

## Quick Start

### Option 1: Use Setup Script (Recommended)
**Windows:**
```bash
quick-setup.bat
```

**Mac/Linux:**
```bash
./quick-setup.sh
```

### Option 2: Manual Setup
1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Build Frontend (IMPORTANT - Must do this first)**
   ```bash
   npm run build
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```
   Website will be available at `http://localhost:5000`

4. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

### ⚠️ Important Note
You **must** run `npm run build` before starting the development server. This creates the frontend build files that the Express server needs to serve your website.

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utility functions and configurations
│   │   ├── pages/         # Main page components
│   │   │   ├── home.tsx   # Main hackathon page
│   │   │   ├── contacts.tsx # Coordinator details page
│   │   │   └── not-found.tsx # 404 page
│   │   ├── App.tsx        # Main app component with routing
│   │   ├── main.tsx       # App entry point
│   │   └── index.css      # Global styles and Tailwind CSS
│   └── index.html         # HTML template
├── server/                # Backend Express application
├── shared/                # Shared types and schemas
├── components.json        # shadcn/ui configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── vite.config.ts         # Vite build configuration
└── package.json           # Dependencies and scripts
```

## Key Pages

### Home Page (/)
- Hero section with event details and registration button
- Event overview and objectives
- Detailed 3-day schedule (Aug 14, 21, 22, 2025)
- Registration details section
- Requirements and expected outcomes

### Coordinator Details (/contacts)
- Faculty coordinator: S. Jyotsna
- 12 student coordinators with contact information
- 5 faculty jury members with specializations

## Technology Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui components
- **Routing**: Wouter (lightweight router)
- **Backend**: Express.js, Node.js
- **Database**: PostgreSQL with Drizzle ORM
- **State Management**: TanStack Query

## Customization

### Colors and Themes
Edit `client/src/index.css` to modify the color scheme and styling.

### Content Updates
- Event details: Edit `client/src/pages/home.tsx`
- Coordinator information: Edit `client/src/pages/contacts.tsx`
- Registration form link: Update the Google Form button in the registration section

### Adding New Pages
1. Create new component in `client/src/pages/`
2. Add route in `client/src/App.tsx`
3. Update navigation links as needed

## Event Details

**Event**: Smart India Hackathon 2025 Internal Selection
**Dates**: August 14th, 21st, 22nd, 2025
**Organizer**: Department of CSE (Data Science)
**SPOC**: Mrs. S. Jyotsna

## Development Notes

- Uses modern React patterns with hooks and functional components
- Fully responsive design with mobile-first approach
- Optimized for performance with Vite build system
- Clean code structure following best practices
- Type-safe development with TypeScript

## Support

For any issues or questions regarding the website, contact the coordinators listed in the Coordinator Details page.