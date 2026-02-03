# Phase 1: Setup, Auth, DB Schema, Basic API Structure

## What's Implemented

### 1. Monorepo Structure

- Turborepo with Next.js 16 app router
- Shared packages: `@repo/db`, `@repo/auth`, `@repo/trpc`, `@repo/ui`
- TypeScript configuration for all packages

### 2. Database Schema (Drizzle + PostgreSQL)

All tables from the architecture:

- `organizations` - Multi-tenant organizations
- `users` - User accounts with Better-Auth integration
- `contacts` - Contact management with custom fields
- `segments` - Complex query builder for contact segmentation
- `templates` - Markdown-based email templates
- `campaigns` - Email campaigns
- `workflows` - Visual workflow builder
- `email_jobs` - Queue jobs for email sending
- `email_events` - Analytics events
- `domain_verifications` - DNS verification
- `api_keys` - SDK API keys
- `rate_limit_logs` - Rate limiting tracking

### 3. Authentication (Better-Auth)

- Email/password authentication
- OAuth providers (Google, GitHub)
- Session management
- Multi-tenant support with organization association

### 4. tRPC API Layer

Routers for:

- `organization` - Organization CRUD
- `user` - User profile
- `contact` - Contact management
- `campaign` - Campaign management
- `template` - Template management

### 5. Dashboard Pages

- Login page with email/password and OAuth
- Registration page
- Dashboard layout with navigation
- Dashboard home with stats and quick actions

## Getting Started

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Set Up Environment

```bash
cp apps/web/.env.example apps/web/.env
# Edit .env with your configuration
```

### 3. Start Infrastructure

```bash
cd infra
docker-compose up -d
```

### 4. Generate Database Schema

```bash
cd packages/db
pnpm db:generate
```

### 5. Run Development Server

```bash
pnpm dev
```

## Environment Variables

```env
# Database
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/kabootr

# Auth
AUTH_SECRET=your-secret-key-here
TRUSTED_ORIGINS=http://localhost:3000

# OAuth (optional)
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Next Steps

Phase 2 will include:

- Contact and template management UI
- Campaign builder
- Email sending via Azure Communication Service
- Analytics dashboard
