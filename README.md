# Eventt Management System

A production-grade event management platform built with Next.js App Router, TypeScript, Tailwind CSS, Clerk authentication, Prisma, Stripe, and responsive dashboards.

## Project structure

- `app/` — application routes, layouts, and page modules
- `components/` — reusable UI and dashboard building blocks
- `lib/` — Prisma client and utilities
- `prisma/` — database schema definitions
- `app/api/` — API endpoints for events, payments, and bookings

## Getting started

1. Copy environment variables:

```bash
cp .env.example .env
```

2. Install dependencies:

```bash
npm install
```

3. Generate Prisma client:

```bash
npm run prisma:generate
```

4. Run database migrations:

```bash
npm run prisma:migrate
```

5. Start the development server:

```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000)

## Authentication routes

- Sign in: `/sign-in`
- Sign up: `/sign-up`
- Forgot password: `/forgot-password`

## Dashboard routes

- `/dashboard`
- `/dashboard/events`
- `/dashboard/bookings`
- `/dashboard/tickets`
- `/dashboard/analytics`
- `/dashboard/customers`
- `/dashboard/settings`

## API endpoints

- `/api/events` — public event list and event creation
- `/api/stripe` — Stripe checkout session creation

## Environment variables

See `.env.example` for required keys.

## Notes

- Uses Clerk for secure authentication and session management.
- Prisma schema includes users, organizers, events, tickets, bookings, payments, notifications, reviews, venues, categories, and coupons.
- Includes a responsive admin dashboard with analytics, bookings, tickets, and customer management.
