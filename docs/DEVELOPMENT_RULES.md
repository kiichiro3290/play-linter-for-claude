# Development Rules

This document outlines the development rules and conventions for this Next.js project.

## Architecture

This project follows **Feature-Sliced Design (FSD)** architecture pattern.

### rules

refs
 - https://github.com/feature-sliced/eslint-config

### Layer Structure (`src/`)

```
src/
├── entities/     # Business entities (user, task, analytics, sales)
├── features/     # User-facing features
├── widgets/      # Composite UI blocks
├── pages/        # Application pages
└── shared/       # Reusable utilities, UI components, types
```

### Layer Rules

1. **Entities** contain business logic and data models
2. **Features** implement specific user functionality
3. **Widgets** combine multiple components into complex UI blocks
4. **Pages** orchestrate widgets and features
5. **Shared** provides common utilities and components

## Technology Stack

- **Framework**: Next.js 15.3.3 with App Router
- **UI Library**: React 19 with TypeScript
- **Styling**: Tailwind CSS v4
- **Package Manager**: pnpm
- **Linting**: ESLint with Next.js configuration

## Code Standards

### TypeScript
- Strict mode enabled
- All components must have proper type definitions
- Use interfaces for props and data structures
- Prefer type safety over `any`

### Component Rules
- Use functional components only
- Define props interfaces for all components
- Use descriptive component and prop names
- Export components as named exports

### Styling
- Use Tailwind utility classes
- Define reusable component variants
- Maintain consistent spacing and sizing
- Use semantic class combinations

### File Naming
- Components: `PascalCase.tsx` (e.g., `Button.tsx`)
- Types: Descriptive interface names (e.g., `User`, `AnalyticsData`)
- Directories: `kebab-case` (e.g., `user-profile-widget`)
- Use `index.ts` for barrel exports

## Import Rules

### Path Aliases
- Use `@/*` for absolute imports from root
- Import shared types from `shared/types/`
- Follow FSD layer hierarchy for cross-layer imports

### Import Order
1. External libraries (React, Next.js)
2. Internal shared utilities
3. Internal components
4. Relative imports

## Development Commands

```bash
# Development
pnpm dev          # Start development server with Turbopack

# Build
pnpm build        # Create production build

# Quality
pnpm lint         # Run ESLint validation
```

## Data Modeling

### Interface Standards
- Use descriptive property names
- Include optional properties with `?`
- Use union types for enums (e.g., `'admin' | 'user' | 'manager'`)
- Include dates as `Date` type
- Use consistent ID patterns (`string`)

### Example Structure
```typescript
interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'admin' | 'user' | 'manager';
  lastActive: Date;
}
```

## Component Patterns

### Props Interface
```typescript
interface ComponentProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
}
```

### Styling Pattern
```typescript
const baseClasses = 'inline-flex items-center justify-center';
const variantClasses = {
  primary: 'bg-blue-600 hover:bg-blue-700 text-white',
  secondary: 'bg-gray-600 hover:bg-gray-700 text-white'
};
```

## Git Workflow

- Use descriptive commit messages
- Follow conventional commits format
- Keep commits focused and atomic
- Test before committing

## Quality Assurance

- All code must pass ESLint validation
- Maintain TypeScript strict mode compliance
- Test components in isolation
- Verify responsive design patterns
