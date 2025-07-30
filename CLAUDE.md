# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React Form Management Demo application that showcases 9 different approaches to form state management in React. The project demonstrates various techniques from simple `useState` to complex cross-page flows with global state management.

## Development Commands

```bash
# Development server
pnpm dev

# Build for production
pnpm build

# Linting
pnpm lint

# Code formatting
pnpm format            # Format all files with Prettier
pnpm format:check      # Check if files are formatted

# Testing
pnpm test              # Run tests in watch mode
pnpm test:ui           # Run tests with UI
pnpm test:coverage     # Run tests with coverage report

# Preview production build
pnpm preview
```

## Architecture Overview

### Form Management Patterns Demonstrated

The application is organized around 9 form management scenarios:

1. **Scenario 1** (`useState`) - Simple contact form with basic state management
2. **Scenario 2** (`useReducer`) - Complex user profile with multiple sections  
3. **Scenario 3** (`react-hook-form + zod`) - Registration form with comprehensive validation
4. **Scenario 4** (`useState + lift`) - Multi-step checkout with lifted state (cross-page)
5. **Scenario 5** (`useReducer + Context`) - Onboarding flow with shared complex state (cross-page)
6. **Scenario 6** (`Zustand`) - Global app settings management
7. **Scenario 7** (`react-hook-form + Zustand + localStorage`) - Job application with draft saving (cross-page)
8. **Scenario 8** (`useForm({ values }) + Zustand`) - Dynamic product order with reactive updates (cross-page)
9. **Scenario 9** (`react-hook-form + watch() + useFieldArray`) - Survey builder with dynamic dependencies

### Routing Architecture

The application uses a mixed routing approach:

- **Single-page scenarios** (1, 2, 3, 6, 9): Direct routes like `/scenario-1`
- **Multi-page scenarios** (4, 5, 7, 8): Nested routes like `/scenario-4/shipping`, `/scenario-4/payment`

Multi-page scenarios have dedicated layout components in `src/pages/scenarios/multi-page/` that handle the nested routing structure and demonstrate cross-page state management patterns.

### Directory Structure

```
src/
├── components/           # Shared UI components
│   ├── Layout.tsx       # Main app layout with sidebar navigation
│   ├── ScenarioLayout.tsx # Wrapper for individual scenario pages
│   └── ui/              # shadcn/ui components
├── features/            # Feature-specific components (organized by scenario)
│   └── contact-form/    # Example: Scenario 1 implementation
├── pages/               # Page components
│   ├── HomePage.tsx     # Landing page with scenario cards
│   └── scenarios/       # Individual scenario page wrappers
│       └── multi-page/  # Cross-page scenario layouts
├── router/              # Routing configuration
│   └── AppRouter.tsx    # Main router with nested route handling
├── stores/              # Global state management (Zustand stores)
├── hooks/               # Custom React hooks
└── lib/                 # Utilities and validations
```

## Technology Stack

- **React 19** with TypeScript
- **Vite** for build tooling
- **React Router v7** for navigation (including nested routes)
- **Tailwind CSS v4** with context7 configuration
- **shadcn/ui** for UI components (New York style, Neutral base color)
- **Form Libraries**: react-hook-form, zod for validation
- **State Management**: Zustand for global state
- **Testing**: Vitest + React Testing Library
- **Icons**: Lucide React

## Key Configuration Details

### Path Aliases
- `@/*` maps to `./src/*` (configured in both tsconfig and Vite)

### Import Conventions
- **Always use absolute path imports** with the `@/` alias instead of relative paths
- **Use type-only imports** for TypeScript types due to `verbatimModuleSyntax` setting
- Examples:
  ```typescript
  // ✅ Correct - absolute path with type-only import
  import { useState } from 'react'
  import type { ContactFormData } from '@/features/contact-form/types'
  import { ContactForm } from '@/features/contact-form/ContactForm'
  
  // ❌ Incorrect - relative path and missing type import
  import { ContactFormData } from './types'
  ```

### Code Formatting
- **Prettier** is configured with Tailwind CSS plugin for automatic class sorting
- Run `pnpm format` to format all files before committing
- Prettier configuration:
  - Single quotes, no semicolons
  - 2-space indentation
  - 80 character line width
  - Tailwind classes are automatically sorted by the plugin

### Tailwind CSS v4 Setup
- Theme defined in `src/index.css` with `.light` and `.dark` classes
- HTML element has `class="light"` for theme context

### shadcn/ui Configuration
- Style: "new-york"
- Base color: "neutral" 
- CSS variables enabled
- Components installed to `@/components/ui`

## Form Implementation Patterns

When implementing new scenarios:

1. **Feature Directory**: Create in `src/features/{scenario-name}/`
2. **Types**: Define interfaces in `types.ts` within the feature directory
3. **Page Wrapper**: Create in `src/pages/scenarios/Scenario{N}.tsx`
4. **Multi-page Scenarios**: Use layout components in `src/pages/scenarios/multi-page/`
5. **Routing**: Update `src/router/AppRouter.tsx` and navigation arrays in `src/components/Layout.tsx`

Each scenario should demonstrate its specific state management approach clearly with educational content explaining when and why to use that pattern.

## Testing Setup

- **Environment**: jsdom
- **Setup file**: `src/test/setup.ts` (imports @testing-library/jest-dom)
- **Global**: Vitest globals enabled
- **Config**: Both `vite.config.ts` and `vitest.config.ts` for compatibility