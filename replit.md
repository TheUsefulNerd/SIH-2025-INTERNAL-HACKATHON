# Overview

This is a full-stack TypeScript application built with React (frontend) and Express.js (backend), featuring a modern tech stack with PostgreSQL database integration through Drizzle ORM. The application appears to be a template for a hackathon event website (SIH 2025) with a comprehensive UI component library based on shadcn/ui.

# User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes (January 2025)
- Created SIH 2025 internal hackathon website with modern, eye-friendly design
- Removed budget section and industry professionals from jury as per user request
- Updated jury to include 7 faculty members only
- Created separate contacts page with circular profile placeholders
- Moved date badge below main heading in hero section
- Removed formal signatures and event coordinators section from requirements

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Form Handling**: React Hook Form with Zod validation resolvers

## Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js for REST API
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon serverless)
- **Session Management**: connect-pg-simple for PostgreSQL session storage
- **Build**: esbuild for fast server-side compilation

## Project Structure
- `/client` - React frontend application
- `/server` - Express.js backend API
- `/shared` - Shared TypeScript types and database schema
- `/components.json` - shadcn/ui configuration

# Key Components

## Database Layer
- **Schema Definition**: Centralized in `/shared/schema.ts` using Drizzle ORM
- **User Model**: Basic user table with id, username, and password fields
- **Type Safety**: Auto-generated TypeScript types from schema
- **Migrations**: Managed through Drizzle Kit

## API Layer
- **Storage Interface**: Abstracted storage layer with both in-memory and database implementations
- **Route Structure**: Modular route registration in `/server/routes.ts`
- **Error Handling**: Centralized error middleware
- **Request Logging**: Built-in API request/response logging

## Frontend Components
- **UI Components**: Comprehensive set of accessible components from shadcn/ui
- **Query Client**: Configured TanStack Query for API state management
- **Toast System**: Built-in notification system
- **Theme Support**: Dark/light mode with CSS custom properties

# Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **API Processing**: Express routes handle requests and interact with storage layer
3. **Database Operations**: Drizzle ORM performs type-safe database queries
4. **Response Handling**: JSON responses with proper error handling
5. **State Updates**: TanStack Query manages cache invalidation and updates

# External Dependencies

## Core Dependencies
- **@neondatabase/serverless**: PostgreSQL serverless driver for Neon
- **drizzle-orm**: Type-safe ORM for database operations
- **@tanstack/react-query**: Server state management
- **wouter**: Lightweight React router
- **date-fns**: Date manipulation utilities

## UI Dependencies
- **@radix-ui/***: Accessible UI primitive components
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **lucide-react**: Icon library

## Development Dependencies
- **vite**: Build tool and dev server
- **tsx**: TypeScript execution for development
- **esbuild**: Fast JavaScript bundler

# Deployment Strategy

## Development Mode
- **Frontend**: Vite dev server with HMR and error overlay
- **Backend**: tsx for TypeScript execution with auto-restart
- **Database**: Environment variable-based connection to PostgreSQL

## Production Build
- **Frontend**: Vite builds optimized static assets to `/dist/public`
- **Backend**: esbuild bundles server code to `/dist/index.js`
- **Deployment**: Single Node.js process serving both API and static files

## Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string (required)
- **NODE_ENV**: Environment mode (development/production)
- **REPL_ID**: Replit-specific configuration for development features

## Database Management
- **Schema Push**: `npm run db:push` for development schema updates
- **Migrations**: Generated in `/migrations` directory through Drizzle Kit
- **Session Storage**: PostgreSQL-backed sessions for authentication