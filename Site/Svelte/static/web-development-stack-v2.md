# Web Development Stack Overview

A documented stack for Adept, optimized for flexibility, maintainability, and cost predictability.

## Common Stack

### Framework

| Layer         | Choice                  | Docs                                                           |
| ------------- | ----------------------- | -------------------------------------------------------------- |
| Framework     | SvelteKit (adapter-bun) | <https://kit.svelte.dev/docs>                                  |
| Utilities     | Effect                  | <https://effect.website/docs>                                  |
|               | Runed                   | <https://runed.dev/docs>                                       |
| Testing       | Vitest                  | <https://vitest.dev/guide>                                     |
| Styling       | Tailwind CSS            | <https://tailwindcss.com/docs>                                 |
| UI Components | shadcn-svelte           | <https://shadcn-svelte.com>                                    |
| Animation     | GSAP                    | <https://gsap.com/docs/v3/>                                    |
| 3D            | Three.js                | <https://threejs.org/docs>                                    |

### Backend

| Layer               | Choice        | Docs                                   |
| ------------------- | ------------- | -------------------------------------- |
| Runtime             | Bun           | <https://bun.sh/docs>                  |
| Database            | PostgreSQL    | <https://www.postgresql.org/docs>      |
| File Storage        | Cloudflare R2 | <https://developers.cloudflare.com/r2> |
| Transactional Email | Resend        | <https://resend.com/docs>              |
| Error Monitoring    | Sentry        | <https://docs.sentry.io>               |

### Infrastructure

| Layer           | Choice           | Docs                                 |
| --------------- | ---------------- | ------------------------------------ |
| Hosting         | DigitalOcean VPS | <https://docs.digitalocean.com>      |
| Deployment      | Coolify          | <https://coolify.io/docs>            |
| CI/CD           | GitHub Actions   | <https://docs.github.com/en/actions> |
| CDN / DNS / SSL | Cloudflare       | <https://developers.cloudflare.com>  |
| Static Assets   | Bunny CDN        | <https://docs.bunny.net>             |
| Dev Environment | Docker Compose   | <https://docs.docker.com/compose>    |

---

## Custom Application Stack Extension

**Architecture:** Full-stack SvelteKit app with integrated backend

For business logic, operational software, and anything requiring purpose-built interfaces.

### Additional Backend Dependencies

| Layer           | Choice      | Docs                                  |
| --------------- | ----------- | ------------------------------------- |
| ORM             | Drizzle     | <https://orm.drizzle.team/docs>       |
| Validation      | Zod         | <https://zod.dev>                     |
| Auth            | better-auth | <https://better-auth.com/docs>        |
| Background Jobs | pg-boss     | <https://timgit.github.io/pg-boss/#/> |

---

## Content Site Stack Extension

**Architecture:** SvelteKit frontend consuming Directus backend

For marketing sites, blogs, and projects where clients need to edit content.

### Additional Dependencies

| Layer         | Choice            | Docs                                                |
| ------------- | ----------------- | --------------------------------------------------- |
| CMS/API       | Directus          | <https://docs.directus.io>                          |
| Data Fetching | Directus SDK      | <https://docs.directus.io/guides/sdk>               |
| Auth          | Directus built-in | <https://docs.directus.io/reference/authentication> |
| Validation    | Directus built-in | <https://docs.directus.io/app/data-model/fields>    |

---

## Optional Extensions (Add When Needed)

| Layer              | Choice                 | Docs                                                  |
| ------------------ | ---------------------- | ----------------------------------------------------- |
| Rate Limiting      | sveltekit-rate-limiter | <https://github.com/ciscoheat/sveltekit-rate-limiter> |
| Structured Logging | Pino                   | <https://getpino.io>                                  |
| Real-time          | PartyKit               | <https://www.partykit.io>                             |
| Table Components   | TanStack Table         | <https://tanstack.com/table>                          |
| Edge Caching       | Cloudflare KV          | <https://developers.cloudflare.com/kv>                |

---

## When to Use Which Stack

**Use Custom Application Stack when:**

- The project involves business operations (scheduling, invoicing, patient management, etc.)
- Complex validation or transactional logic is required
- Users interact through purpose-built workflows, not content editing
- A CMS would add complexity without value

**Use Content Site Stack when:**

- The client needs to edit pages, posts, or media themselves
- Content volume justifies a CMS (blog posts, portfolio items, staff directories)
- The project is primarily marketing/informational

**Skip Directus entirely when:**

- Content updates are infrequent (seasonal menu changes, rare edits)
- The client would rather email you than learn an admin interface
- Hardcoded content or markdown files would suffice

---

## Key Decision Rationale

### Bun over Node

Faster runtime, better DX, compatible with Node ecosystem. Drop-in replacement with performance benefits.

### Drizzle over Prisma

Type-safe, lightweight, better SQL control. Works well with Zod for schema-to-validation alignment.

### pg-boss over BullMQ

Postgres-backed job queue — no Redis dependency. Handles both scheduled (cron-style) and event-driven jobs. Keeps the stack leaner.

### Cloudflare R2 over S3

Same S3-compatible API, cheaper egress, already using Cloudflare for CDN/DNS.

### Coolify for deployment

Self-hosted PaaS. Handles Docker deployments, SSL, and databases without platform lock-in. If it ever breaks, Docker Compose still works.

### Directus only when earned

A CMS adds complexity. Many small business clients won't use it. Default to simpler solutions; add Directus when content volume and update frequency justify it.

---

## Infrastructure Notes

### DigitalOcean

- $24/month baseline for 4GB RAM / 2 vCPU / 80GB SSD
- Managed Postgres available ($15/month for basic)
- Container registry included
- Stable pricing since 2022

### Cloudflare

- Free tier covers DNS, SSL, CDN, basic DDoS protection
- R2 storage: $0.015/GB/month, no egress fees
- Already in use for domains

### Bunny CDN

- $0.01/GB for static asset delivery
- Good Google Fonts alternative (Bunny Fonts)
- Add when high-traffic static assets justify it

### GitHub Actions

- 2,000 minutes/month free for private repos
- Runs tests before Coolify deploys
- Can trigger Coolify webhooks on successful builds

---

## Development Philosophy

1. **Pre-decide tooling** — Know what you'll reach for before the problem arrives
2. **Start simple** — Ship with the minimum viable stack; add complexity when pain demands it
3. **Own the infrastructure** — VPS + Coolify over managed platforms; portability over convenience
4. **CMS when earned** — Don't force content management into projects that don't need it
5. **Test what matters** — Vitest for logic, skip E2E unless user flows are complex
6. **Document as you build** — This stack doc is living; update it when choices change
