# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- **Start dev server**: `npm run dev` (starts API server on port 50002 with auth emulator)
- **Build project**: `npm run build` (builds both app and API packages)
- **Start production**: `npm run start` (starts API server in production mode)

### Linting
- **Lint code**: `npm run lint` (lints test/ directory at root)
- **Lint API**: `cd packages/api && npm run lint` (lints API source)
- **Lint app**: `cd packages/app && npm run lint` (lints app source)
- **Fix lint errors**: Add `:fix` to any lint command

### Package Management
- **Build package**: `npm run pack` (creates distributable package)
- **Publish package**: `npm run publish` (publishes @graffiticode/l0002)
- **Build lexicon**: `cd packages/api && npm run build-lexicon` (rebuilds language lexicon)
- **Build spec**: `cd packages/api && npm run build-spec` (builds language specification HTML)

### Testing
Note: No test runner is currently configured. Test files exist (*.spec.js) but need a test script to be added.

## Architecture

This is a Graffiticode language implementation (L0002) with a monorepo structure using npm workspaces:

### Structure
- **packages/api/**: Express server providing compilation API and language runtime
  - Port: 50002 (dev) or process.env.PORT
  - Auth integration with @graffiticode/auth service
  - Compiler built on @graffiticode/basis framework
  
- **packages/app/**: React component library for rendering compiled output
  - Exports Form component and related UI
  - Uses SWR for data fetching
  - Built with Vite, TypeScript, and Tailwind CSS

### Key Components

**Compiler Pipeline** (packages/api/src/):
- `compiler.js`: Extends BasisCompiler with L0002-specific checker and transformer
- `compile.js`: API endpoint handler for compilation requests
- Language functions: `HELLO`, `THEME`, `IMAGE`, `PRINT`

**UI Components** (packages/app/lib/):
- `view.jsx`: Main view component managing state and compilation
- `components/form/Form.tsx`: Form component with theme support
- `lib/api.js`: API client for backend communication
- `swr/fetchers.js`: SWR data fetching utilities

### Language Specification
L0002 vocabulary includes:
- `hello <string>`: Renders hello message
- `theme [dark|light] <record>`: Sets UI theme with toggle button

### Dependencies
- Uses local @graffiticode/basis package (symlinked from ../../../basis)
- Auth service URL configurable via AUTH_URL env var
- Firestore emulator for development (port 8080)