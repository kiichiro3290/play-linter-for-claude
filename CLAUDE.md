# CLAUDE.md - Project Documentation

## Project Overview
This is a **Next.js 15.3.3** dashboard application built with **TypeScript** and **Tailwind CSS v4**, implementing **Feature-Sliced Design (FSD)** architecture. The project demonstrates modern React development practices with a clean, maintainable codebase.

## Quick Start

### Development Commands
```bash
# Install dependencies
pnpm install

# Start development server (with Turbopack)
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linting
pnpm lint
```

### Development Server
- Local: http://localhost:3000
- Uses Turbopack for faster development builds

## Architecture: Feature-Sliced Design

### Layer Structure
```
src/
├── entities/     # Business entities (user, task, analytics, sales)
├── features/     # User-facing features (currently empty)
├── widgets/      # Composite UI blocks (4 widgets implemented)
├── pages/        # Application pages (dashboard page)
└── shared/       # Reusable utilities, UI components, types
```

### FSD Layer Rules
1. **Entities**: Business logic and data models
2. **Features**: Specific user functionality
3. **Widgets**: Complex UI blocks combining multiple components
4. **Pages**: Orchestrate widgets and features
5. **Shared**: Common utilities and reusable components

## Main Features

### Dashboard Components
- **AnalyticsWidget**: Metrics overview with trend indicators
- **SalesWidget**: Sales data and performance metrics
- **TaskWidget**: Task management with status tracking
- **UserProfileWidget**: User information and profile management

### Additional Features
- **Responsive Design**: Mobile-first grid layouts
- **Dark Mode Support**: Built-in theme switching
- **Quick Actions**: Generate reports, create tasks, invite users
- **System Status**: API, database, and storage monitoring
- **Recent Activity**: Timeline of system events

## API Structure
RESTful endpoints under `/app/api/`:
- `/api/analytics` - Analytics data
- `/api/sales` - Sales data
- `/api/tasks` - Task management
- `/api/users` - User management

## Technology Stack
- **Framework**: Next.js 15.3.3 with App Router
- **Language**: TypeScript 5+ (strict mode)
- **UI**: React 19
- **Styling**: Tailwind CSS v4
- **Font**: Geist (sans and mono)
- **Package Manager**: pnpm
- **Build Tool**: Turbopack

## Development Guidelines

### Code Standards
- **Components**: Functional components with TypeScript interfaces
- **File Naming**: PascalCase for components, kebab-case for directories
- **Styling**: Tailwind utility classes with semantic combinations
- **Imports**: Absolute imports using `@/*` aliases

### TypeScript Configuration
- Target: ES2017
- Strict mode enabled
- Path aliases: `@/*` for absolute imports
- Module resolution: Bundler mode

### ESLint Configuration
- Next.js core web vitals
- Feature-Sliced Design rules
- Boundary checking and import validation

## Shared Components

### UI Components (`/src/shared/ui/`)
- **Button**: Configurable with variants (primary, secondary, outline) and sizes
- **Card**: Layout component for content blocks
- **Chart**: Data visualization component

### Types (`/src/shared/types/`)
- **User**: `id`, `name`, `email`, `avatar`, `role`, `lastActive`
- **AnalyticsData**: `metric`, `value`, `change`, `trend`, `period`
- **SalesData**: `product`, `revenue`, `units`, `date`, `category`
- **Task**: `title`, `status`, `priority`, `assignee`, `dueDate`

## File Structure
```
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── docs/                   # Documentation
├── src/                    # Source code (FSD structure)
├── public/                 # Static assets
├── eslint.config.mjs      # ESLint configuration
├── next.config.ts         # Next.js configuration
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
└── CLAUDE.md              # This file
```

## Development Notes

### Current State
- Uses mock data in entity models
- Functional API endpoints for all data types
- Comprehensive TypeScript coverage
- Mobile-responsive design implemented

### Quality Assurance
- TypeScript strict mode compliance required
- ESLint validation must pass
- Responsive design patterns enforced
- Clean architecture with strict FSD layer separation

### Best Practices
- Follow conventional commit format
- Use semantic Tailwind class combinations
- Maintain proper component interfaces
- Respect FSD import rules and boundaries