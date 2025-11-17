# ClickOn Solutions

A modern Next.js application with automated code quality checks.

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended)

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Code Quality & Git Hooks

This project uses Husky to maintain code quality automatically:

### Pre-commit Hook

Runs on every commit to:

- ✨ Auto-format code with Prettier
- 🔍 Lint and fix code with ESLint
- 📝 Apply Tailwind CSS class sorting

### Pre-push Hook

Runs before pushing to:

- 🔍 Run ESLint checks
- ✅ Verify code formatting
- 🏗️ Build the project to catch errors

### Available Scripts

```bash
# Development
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server

# Code Quality
pnpm lint         # Run ESLint
pnpm lint:fix     # Run ESLint and auto-fix issues
pnpm format       # Format all files with Prettier
pnpm format:check # Check if files are formatted
```

## Tech Stack

- **Framework:** Next.js 16
- **UI:** React 19, Tailwind CSS
- **Components:** Radix UI
- **Forms:** React Hook Form + Zod
- **Animations:** Framer Motion
- **Code Quality:** ESLint, Prettier, Husky, lint-staged

## Project Structure

```
├── app/              # Next.js app directory
├── components/       # React components
│   └── ui/          # UI component library
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
├── public/          # Static assets
└── styles/          # Global styles
```

## Contributing

When contributing to this project:

1. Make your changes
2. The pre-commit hook will automatically format and lint your code
3. Commit your changes
4. The pre-push hook will run additional checks before pushing

All code quality checks are automated through Husky, so you don't need to worry about manually running formatters or linters!
