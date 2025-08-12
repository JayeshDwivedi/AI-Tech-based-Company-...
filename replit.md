# Modern React Web Application

## Overview

This is a modern React web application built for a technology services company. The application showcases various technology solutions including AI, IoT, cybersecurity, and industrial automation services. It's built with a modern tech stack including React 18, TypeScript, TailwindCSS, and shadcn/ui components, with an Express.js backend and PostgreSQL database using Drizzle ORM.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: TailwindCSS with shadcn/ui component library for consistent, accessible UI components
- **State Management**: TanStack Query (React Query) for server state management
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Server**: Express.js with TypeScript for type-safe API development
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Session Management**: Built-in session handling with PostgreSQL session storage
- **Development**: Hot reload with TSX for rapid development iteration

### Database Architecture
- **Database**: PostgreSQL with Neon serverless hosting
- **Schema Management**: Drizzle Kit for database migrations and schema management
- **Type Safety**: Automatic TypeScript type generation from database schema

## Key Components

### Frontend Structure
- **Component Library**: Extensive shadcn/ui component collection including forms, dialogs, navigation, and data display components
- **Page Architecture**: 
  - Home page with company overview
  - 8 dedicated service pages (AI, IoT, Cybersecurity, IT Infrastructure, Telecommunication, Surveillance, Automation, Industrial Automation)
  - 5 industrial solution pages (Healthcare, Mining, Agriculture, Automobile, Retail)
- **Layout Components**: Reusable Header and Footer components for consistent branding
- **Responsive Design**: Mobile-first approach with TailwindCSS breakpoints

### Backend Structure
- **API Routes**: RESTful API structure with `/api` prefix for all endpoints
- **Storage Layer**: Abstract storage interface with in-memory implementation for development
- **Middleware**: Request logging, error handling, and session management
- **Static File Serving**: Integrated static file serving for production builds

### Shared Components
- **Schema Definitions**: Shared TypeScript types and Zod validation schemas
- **Database Models**: User authentication schema with extensible design

## Data Flow

1. **Client Requests**: React frontend makes API calls using TanStack Query for caching and state management
2. **Server Processing**: Express.js server handles requests, applies middleware, and routes to appropriate handlers
3. **Database Operations**: Drizzle ORM provides type-safe database interactions with PostgreSQL
4. **Response Handling**: Structured JSON responses with proper error handling and logging
5. **Client Updates**: TanStack Query manages cache invalidation and UI updates

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL connection for Neon database
- **drizzle-orm & drizzle-kit**: Type-safe ORM and migration tools
- **@tanstack/react-query**: Server state management and caching
- **wouter**: Lightweight React router
- **zod**: Runtime type validation and schema definitions

### UI/UX Dependencies
- **@radix-ui/***: Headless UI components for accessibility and customization
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe component variants
- **lucide-react**: Icon library for consistent iconography

### Development Dependencies
- **vite**: Fast build tool with Hot Module Replacement
- **tsx**: TypeScript execution for development
- **esbuild**: Fast JavaScript bundler for production builds

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with Express.js backend
- **Hot Reload**: Automatic reload for both frontend and backend changes
- **Type Checking**: Continuous TypeScript compilation checking
- **Database**: Local PostgreSQL or Neon serverless database

### Production Build Process
1. **Frontend Build**: Vite builds optimized React application to `dist/public`
2. **Backend Build**: esbuild compiles TypeScript server code to `dist/index.js`
3. **Static Serving**: Express serves built React app and handles API requests
4. **Database Migration**: Drizzle Kit applies schema changes to production database

### Environment Configuration
- **Database**: PostgreSQL connection via `DATABASE_URL` environment variable
- **Session Storage**: PostgreSQL-backed session storage for scalability
- **Error Handling**: Comprehensive error logging and user-friendly error responses

### Scalability Considerations
- **Serverless Database**: Neon PostgreSQL for automatic scaling
- **Stateless Server**: Session storage in database enables horizontal scaling
- **CDN Ready**: Static assets can be served from CDN in production
- **Type Safety**: Full-stack TypeScript prevents runtime errors in production