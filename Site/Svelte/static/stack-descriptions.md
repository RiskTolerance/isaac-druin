# Isaac's Web Development Stack Documentation

This documentation covers the complete technology stack for Isaac's web development business in Sioux Falls, South Dakota—designed for building websites for small local businesses with a focus on **TypeScript-first development**, **SvelteKit foundations**, and **owning infrastructure** through self-hosted solutions rather than managed platforms.

---

## Common Stack — Framework Layer

### SvelteKit

**Documentation:** https://svelte.dev/docs/kit

SvelteKit is the official application framework from the Svelte team, powered by Vite. It handles the complex problems of building production-ready web applications—from file-system based routing that updates the UI when links are clicked, to build optimizations that load only minimal required code, page preloading, and configurable rendering (SSR, client-side, or static prerendering). Apps are **server-rendered by default** for excellent first-load performance and SEO, then transition to client-side navigation for a smooth SPA experience.

SvelteKit is the perfect foundation for small business web development because it's explicitly designed to "start simple and grow with you." Server-rendered defaults ensure excellent SEO out of the box—critical for local search visibility. Built-in TypeScript support aligns with the TypeScript-first philosophy, and various adapters (Node, static) support self-hosting on DigitalOcean. The file-based routing makes project structure predictable and maintainable across multiple client projects.

---

### Effect

**Documentation:** https://effect.website/docs/getting-started/introduction/

Effect is a powerful TypeScript library for building complex synchronous and asynchronous programs with a comprehensive standard library. It provides a fully-fledged functional effect system with robust primitives for managing side effects, ensuring type safety, and supporting structured concurrency. The core `Effect<Success, Error, Requirements>` type allows explicit tracking of errors and dependencies through the type system. Effect fills TypeScript's missing standard library gap, potentially replacing multiple specialized libraries like Lodash, Zod, or RxJS with a single cohesive solution.

Effect provides maximum type-safety essential for the TypeScript-first philosophy. Its explicit error handling and dependency tracking reduce runtime bugs and make code more maintainable across client projects. The "batteries included" approach means fewer external dependencies to manage when self-hosting. Effect is incrementally adoptable—introduce it where complexity warrants without requiring full adoption, particularly valuable for handling API integrations, form submissions, and data fetching common in small business websites.

---

### Runed

**Documentation:** https://runed.dev/docs

Runed is a collection of utilities for Svelte 5 that make composing powerful applications a breeze by leveraging Svelte Runes. It extends Svelte 5's reactive primitives with carefully crafted utility functions covering reactivity (`extract`, `resource`, `watch`), state management (`Debounced`, `PersistedState`, `StateHistory`, `FiniteStateMachine`), element handling (`ElementRect`, `ElementSize`, `IsInViewport`), browser interactions (`useEventListener`), sensors (`IsIdle`, `onClickOutside`, `PressedKeys`), and animation utilities.

Runed is a natural companion to SvelteKit, specifically designed for Svelte 5's runes system. Utilities like **PersistedState** (remembering user preferences), **IsInViewport** (scroll-triggered animations), and **Debounced** (search inputs) solve common UI patterns without reinventing the wheel. The TypeScript-first design with full type safety aligns perfectly with the stack philosophy. Being MIT licensed and community-driven means no vendor lock-in, and the consistent API reduces learning curve when building multiple client sites.

---

### Vitest

**Documentation:** https://vitest.dev/guide/

Vitest is a next-generation testing framework powered by Vite, providing a Vite-native testing experience with lightning-fast performance. It reuses Vite's configuration, transformers, resolvers, and plugins for consistency between your app and tests. Key features include smart instant watch mode (like HMR for tests), out-of-box ESM/TypeScript/JSX support, native code coverage via v8 or istanbul, built-in mocking with Tinyspy, and browser mode for component testing. It offers a Jest-compatible API making migration straightforward.

Vitest is the natural testing choice for any Vite-powered stack like SvelteKit. Since SvelteKit uses Vite under the hood, Vitest shares the same configuration and plugins, eliminating setup friction. **Instant watch mode** means faster development feedback loops. Out-of-box TypeScript support aligns with the TypeScript-first philosophy, and component testing support ensures UI components work correctly. The Jest-compatible API means abundant learning resources and familiar patterns. No external test runner dependencies simplifies the self-hosted infrastructure.

---

### Tailwind CSS

**Documentation:** https://tailwindcss.com/docs

Tailwind CSS is a utility-first CSS framework packed with composable classes like `flex`, `pt-4`, `text-center`, and `rotate-90` that build any design directly in markup. Unlike traditional frameworks, Tailwind generates CSS based on classes you're actually using, automatically removing unused CSS in production—most projects ship **less than 10kB of CSS**. The framework uses CSS layers to avoid specificity issues and provides responsive design variants (`sm:`, `md:`), state variants (`hover:`, `focus:`), container queries, and dark mode support.

Tailwind is ideal for small business web development because it enables rapid prototyping and consistent design without leaving the HTML—crucial for efficiently serving multiple local clients. The utility-first approach means designs are unique per client rather than looking like cookie-cutter templates. Built-in responsive design and dark mode cover common requirements. Small production bundle sizes improve page load performance (important for SEO and user experience). Theme customization allows creating consistent brand-specific design systems for each client.

---

### shadcn-svelte

**Documentation:** https://www.shadcn-svelte.com/docs

shadcn-svelte is an unofficial, community-led Svelte port of the popular shadcn/ui component library, built with Bits UI (headless components) and Tailwind CSS. Unlike traditional component libraries installed from NPM, shadcn-svelte provides components you **copy directly into your project**, giving complete control to customize, modify, and own the code. The library includes **60+ components**: Accordion, Alert Dialog, Button, Calendar, Card, Carousel, Charts, Combobox, Command, Data Table, Date Picker, Dialog, Drawer, Navigation Menu, Popover, Select, Sheet, Sidebar, Table, Tabs, Tooltip, and many more.

shadcn-svelte perfectly embodies the "own infrastructure" philosophy—you own the component code, not a package dependency. This means complete control over components without vendor lock-in or breaking changes from library updates. The Tailwind CSS integration provides seamless styling consistency. Built-in accessibility in all components saves development time and ensures client sites meet modern standards. The CLI distribution system makes it easy to add only needed components, keeping projects lean.

---

### GSAP (GreenSock Animation Platform)

**Documentation:** https://gsap.com/docs/v3

GSAP is an industry-standard JavaScript animation library capable of animating anything JavaScript can touch: CSS, SVG, canvas, WebGL, colors, strings, motion paths, and generic objects. At its core, GSAP is a high-speed property manipulator that updates values with extreme accuracy—up to **20x faster than jQuery**. The library provides powerful tools including ScrollTrigger for scroll-driven animations, ScrollSmoother, MorphSVG, MotionPath, SplitText, Flip for layout animations, and Draggable. GSAP is now completely free (acquired by Webflow) and used on over 12 million websites.

GSAP adds professional-grade animation capabilities that help client websites stand out from competitors. For small local businesses, engaging animations (scroll effects, micro-interactions, text reveals) create memorable user experiences that convert visitors to customers. The framework-agnostic design integrates seamlessly with SvelteKit/Svelte. **ScrollTrigger** is particularly valuable for storytelling websites common in service businesses. Now completely free, there's no cost barrier, and the lightweight plugin architecture means including only what's needed.

---

### Three.js

**Documentation:** https://threejs.org/docs/

Three.js is a cross-browser JavaScript library for creating and displaying animated 3D computer graphics in web browsers using WebGL (and experimental WebGPU). It abstracts the complexity of raw WebGL programming, enabling GPU-accelerated 3D animations without proprietary browser plugins. The library provides comprehensive 3D capabilities: scenes, cameras, geometries, physically-based rendering materials, lighting, textures, instancing, post-processing effects (bloom, depth of field), interactive controls (OrbitControls, DragControls), and loaders for 3D model formats (GLTF, OBJ, FBX).

Three.js provides 3D capabilities that can differentiate client websites in competitive markets. For small businesses like real estate, automotive, furniture, or retail, 3D product visualizations and interactive experiences can significantly increase engagement and conversions. Three.js works alongside GSAP for coordinated 3D animations. The vanilla JavaScript API integrates cleanly with SvelteKit components. While not every client needs 3D, having this capability positions the business for premium projects. Combined with TypeScript type definitions, it fits the TypeScript-first approach.

---

## Common Stack — Backend Layer

### Bun (Runtime)

**Documentation:** https://bun.com/docs

Bun is an all-in-one JavaScript/TypeScript runtime and toolkit that ships as a single executable. Built with Zig and powered by Apple's JavaScriptCore engine (used in Safari), it dramatically reduces startup times and memory usage compared to Node.js. Beyond the runtime, Bun includes a complete development toolkit: a package manager (faster than npm/yarn), a bundler (claims 1.75x faster than esbuild), a test runner (Jest-compatible), and **native TypeScript/JSX support without transpilation configuration**. It natively supports web-standard APIs like `fetch`, `WebSocket`, and `ReadableStream`, plus has built-in SQLite, Redis client, and HTTP server capabilities.

Native TypeScript execution without configuration aligns perfectly with the TypeScript-first philosophy. The **single binary with no complex dependencies** makes deployment on DigitalOcean VPS + Coolify straightforward. Lower memory usage and faster execution mean smaller VPS instances can handle more load, reducing infrastructure costs. The simplified tooling eliminates need for separate tools (npm, webpack, babel, jest), reducing complexity for small business projects. Node.js compatibility allows incremental adoption without migration risk.

---

### PostgreSQL

**Documentation:** https://www.postgresql.org/docs/

PostgreSQL is a powerful, open-source object-relational database system with over **35 years of active development**, earning a strong reputation for reliability, feature robustness, and performance. It's ACID-compliant, runs on all major operating systems, and conforms to at least 170 of 177 mandatory SQL:2023 Core features. PostgreSQL offers comprehensive features including complex queries, foreign keys, triggers, updatable views, transactional integrity, MVCC, full-text search, JSON/JSONB support, and geospatial data via PostGIS.

PostgreSQL runs perfectly on DigitalOcean VPS and can be managed via Coolify with no cloud vendor lock-in. Completely free and open-source with no per-query pricing or usage tiers ensures **cost predictability**. The 35+ years of development means battle-tested stability for small business applications. Skills and data are portable, and it's widely supported by all frameworks and ORMs. One database technology handles all use cases (relational, JSON, full-text search), eliminating decision fatigue and aligning with the "pre-decide tooling" philosophy.

---

### Cloudflare R2

**Documentation:** https://developers.cloudflare.com/r2/

Cloudflare R2 is S3-compatible object storage that allows storing large amounts of unstructured data **without the costly egress bandwidth fees** associated with typical cloud storage services. It's designed for high data durability and offers strong consistency per object. R2 works seamlessly with AWS S3 SDKs and tools. Key features include public buckets, bucket-scoped tokens, presigned URLs, CORS configuration, and object lifecycles. R2 offers a generous free tier (10GB storage, 10 million Class A operations, 1 million Class B operations per month), with standard storage at $0.015/GB/month beyond free allocation.

**Zero egress fees** are critical for cost predictability—downloading files doesn't incur surprise bandwidth charges (major savings vs. AWS S3/GCS). The generous free tier means small business websites with moderate file storage needs may operate entirely within free limits. S3 compatibility means using familiar tools and SDKs with no proprietary API lock-in. This represents a smart hybrid approach: keep core app self-hosted on VPS while offloading static file storage to a managed service with predictable pricing.

---

### Resend

**Documentation:** https://resend.com/docs/api-reference/introduction

Resend is a modern email API platform designed specifically for developers, positioning itself as "the Stripe for Email." It provides a clean REST API and SDKs for Node.js, Python, Ruby, and other languages. Key features include batch email sending (up to 50 recipients per call), email scheduling with natural language, file attachments, webhooks for delivery/open/click/bounce events, domain verification with DKIM/SPF/DMARC, automatic suppression list management, and multiple sending regions. It integrates with React Email for building templates using React components instead of HTML tables.

The clean REST API with TypeScript SDKs fits the TypeScript-first philosophy perfectly. The simple pricing model includes a free tier of **3,000 emails/month** with predictable per-email pricing beyond that. Quick integration takes minutes—ideal when building websites for small local businesses. Built-in DKIM/SPF/DMARC and reputation management helps ensure client emails reach inboxes. This avoids the notorious difficulty and deliverability risks of self-hosting email servers.

---

### Sentry

**Documentation:** https://docs.sentry.io/

Sentry is a comprehensive application monitoring and debugging platform used by over 4 million developers. It automatically captures errors, uncaught exceptions, and unhandled rejections, then groups similar events into issues for efficient triage. Sentry provides end-to-end distributed tracing, performance monitoring, session replays, and profiling—all connected by the same trace. Key capabilities include stack traces with source code context, suspect commit identification, release tracking, breadcrumb trails showing user actions before errors, and AI-powered debugging assistance.

Drop-in integration—just install the SDK and initialize with a DSN—requires no agents or complex setup. A self-hosted option is available if needed for cost control at scale. The generous free tier includes **5,000 errors/month**, sufficient for many small business websites. Production errors on client websites can damage business reputation; Sentry provides immediate visibility. First-class TypeScript SDK with full typing aligns with stack philosophy. Once configured, it works automatically—fitting the "pre-decide and forget" approach.

---

## Common Stack — Infrastructure Layer

### DigitalOcean VPS (Droplets)

**Documentation:** https://www.digitalocean.com/products/droplets

DigitalOcean Droplets are Linux-based virtual private servers running on virtualized hardware using KVM as the hypervisor. Each Droplet provides a complete, isolated server environment with dedicated resources including CPU, RAM, SSD storage, and networking. Droplets are available in multiple sizes across **13+ global data center regions**, starting at just $4/month. Unlike AWS, GCP, or Azure with complex, unpredictable pricing structures, DigitalOcean emphasizes simplicity and cost transparency. Users get root access to their servers with full control over the operating system, applications, and data.

DigitalOcean is the foundational compute layer that perfectly embodies the "own your infrastructure" philosophy. Monthly caps and flat pricing mean bills are never a surprise—critical for quoting fixed prices to small business clients. Root access means complete control over the server environment with no vendor lock-in to platform-specific features. The developer-friendly interface is simpler than enterprise clouds, with extensive tutorials and documentation. Start small ($4-6/mo) and scale as client sites grow.

---

### Coolify

**Documentation:** https://coolify.io/docs/

Coolify is an open-source, self-hosted Platform as a Service (PaaS) that provides a Heroku/Vercel/Netlify-style developer experience on your own infrastructure. It enables deployment of static sites, APIs, backends, databases, and **280+ one-click services** to any server you control. Coolify handles Docker container orchestration, reverse proxy configuration (via Traefik), automated Let's Encrypt SSL certificates, Git integration (GitHub, GitLab, Bitbucket), automated deployments on push/PR, and database provisioning. Installation is simple: one bash command on any Ubuntu LTS server.

Coolify is the orchestration layer that makes self-hosting practical and competitive with managed platforms. All configurations save to your server—you can leave anytime without losing your setup (no vendor lock-in). Free and open-source with no feature paywalls means paying only for server costs. It provides the same DX as Vercel/Netlify—git push to deploy, automatic SSL, preview environments—**without per-site or per-deployment costs**. Deploy unlimited client sites on a single Coolify instance, with team collaboration and project organization.

---

### GitHub Actions

**Documentation:** https://docs.github.com/en/actions

GitHub Actions is a native CI/CD platform built directly into GitHub repositories. It enables automation of build, test, and deployment workflows triggered by events like pushes, pull requests, schedules, or webhooks. Workflows are defined in YAML files stored in `.github/workflows/`. Each workflow contains jobs that run on GitHub-hosted runners (Linux, Windows, macOS) or self-hosted runners. Key features include matrix builds, secrets management, artifact storage, dependency caching, parallel job execution, and integration with virtually any deployment target. The free tier includes **2,000 minutes/month for private repos** and unlimited minutes for public repos.

GitHub Actions serves as the automation layer connecting code changes to deployments with zero infrastructure overhead—no separate CI server to manage. No additional costs with a generous free tier for most small business projects. It integrates with Coolify via webhooks or API, or can run custom build/test steps before deployment. Pre-built actions for Node.js, npm/pnpm, type checking, and building SvelteKit apps simplify setup. Run linting, TypeScript checking, and tests before code reaches production.

---

### Cloudflare

**Documentation:** https://developers.cloudflare.com/fundamentals/

Cloudflare is a global network platform providing DNS, CDN, security, and performance services. It operates as a reverse proxy—when you point your domain's nameservers to Cloudflare, traffic flows through their network of **330+ data centers worldwide** (reaching 95% of the Internet-connected population within 50ms). Core services include authoritative DNS hosting, CDN with intelligent caching, DDoS protection at layers 3/4/7, Web Application Firewall, free SSL/TLS certificates, and HTTP/2/3 support. The free tier is exceptionally generous, including unlimited bandwidth, basic DDoS protection, free SSL, and DNS hosting.

Cloudflare is the edge/security layer that protects and accelerates self-hosted infrastructure. Essential features (DNS, CDN, SSL, DDoS protection) are free—massive cost savings vs. enterprise solutions. It **hides origin IP addresses** from direct attacks; attackers only see Cloudflare IPs. Global caching of static assets reduces load on origin servers and improves client site speed worldwide. Fast, reliable DNS with easy management is essential for hosting multiple client domains. The free tier eliminates bandwidth-based billing surprises from CDN usage.

---

### Bunny CDN

**Documentation:** https://bunny.net/cdn/

Bunny CDN is a lightning-fast, cost-effective content delivery network with **119 global PoPs** across 6 continents. It offers pay-as-you-go pricing starting at $0.002/GB with a $1/month minimum. Features include NVMe SSD servers, 250+ Tbps network capacity, 24ms average global latency, free Let's Encrypt SSL, instant cache purging, real-time analytics, Edge Rules, DDoS protection, and Perma-Cache for permanent edge storage. Beyond CDN, bunny.net offers Bunny Storage, Bunny Stream (video delivery with HLS/DRM), and Bunny Optimizer (image processing).

Bunny CDN offers extreme cost efficiency—pay only for bandwidth used, ideal for small business sites with variable traffic. The **$1/month minimum** is perfect for low-traffic client sites that still benefit from CDN performance. Better suited than Cloudflare for video streaming or large file downloads (Bunny Stream integration). Perma-Cache permanently caches static assets for 100% cache hit ratio, reducing origin server load to near-zero. Use Cloudflare for DNS/security and Bunny for large media assets, or use Bunny alone for simpler setups.

---

### Docker Compose

**Documentation:** https://docs.docker.com/compose/

Docker Compose is a tool for defining and running multi-container Docker applications using a single YAML configuration file. It allows defining services (containers), networks, volumes, secrets, and their relationships in a declarative format. With a single `docker compose up` command, all services are created and started with proper networking and dependencies. Key features include service scaling, environment variable management, health checks, restart policies, volume persistence, and network isolation. Docker Compose works across all environments—development, testing, staging, and production.

Coolify uses Docker Compose under the hood—understanding Compose means understanding your infrastructure. Run exact production stack locally using the same compose files, eliminating "works on my machine" issues. Compose files are transferable and can deploy the same setup to any Docker host, not locked to Coolify. Define **SvelteKit app + PostgreSQL + Redis + background workers** in one file. YAML files serve as infrastructure documentation for each client project. Standard Docker ecosystem tool works with any container orchestrator if you outgrow Coolify.

---

## Custom Application Stack Extension

### Drizzle ORM

**Documentation:** https://orm.drizzle.team/

Drizzle ORM is a lightweight, headless TypeScript ORM that provides both SQL-like and relational query APIs. Unlike traditional "data frameworks" that require building projects around them, Drizzle embraces SQL at its core—define database schemas in TypeScript, write SQL-like queries with full type inference, and manage migrations automatically. The philosophy is **"if you know SQL, you know Drizzle."** Distinguished by its zero-dependency architecture (~31KB), native PostgreSQL/MySQL/SQLite support, and serverless-ready design, it includes Drizzle Kit for migrations and Drizzle Studio for database visualization.

Drizzle is TypeScript-first by design with automatic type inference from schemas, eliminating duplicate type declarations. Native first-class PostgreSQL dialect support includes all PostgreSQL-specific features (RLS, sequences, schemas, extensions). It's framework-agnostic and works seamlessly with SvelteKit's server-side data loading patterns. No external services required—works with any PostgreSQL instance including Docker-based local development. The `drizzle-zod` extension integrates Zod validation schemas with database schemas.

---

### Zod

**Documentation:** https://zod.dev/

Zod is a TypeScript-first schema validation library that enables defining data schemas and validating runtime data against them. You declare a validator once, and Zod automatically infers the corresponding TypeScript type—solving the common problem of duplicating type definitions between validation logic and TypeScript interfaces. Zod 4 features a **2KB gzipped core bundle**, zero external dependencies, and works in both Node.js and browsers. Key features include safe parsing with `.safeParse()`, automatic type inference via `z.infer<>`, composable schemas, custom refinements, and comprehensive error formatting.

Zod's core strength eliminates duplicate type declarations by inferring static types from schemas (requires TypeScript strict mode). It works with `drizzle-zod` to generate Zod schemas directly from Drizzle database schemas, ensuring validation matches database constraints. Ideal for validating form data, API request/response bodies, and server actions in SvelteKit applications. Use cases include form validation, API payload validation, environment variable validation, and configuration parsing.

---

### better-auth

**Documentation:** https://www.better-auth.com/

Better Auth is a framework-agnostic, universal authentication and authorization framework for TypeScript. It provides comprehensive out-of-the-box features: email/password authentication, social sign-on (Google, GitHub, Apple, Discord), session management, built-in rate limiting, and automatic database schema management. Advanced features like 2FA, passkeys, multi-tenancy, organization management with RBAC, and SSO are available through plugins. Better Auth **auto-generates database schemas** (including migrations), offers client libraries for React, Vue, Svelte, and vanilla JS, and requires minimal configuration.

Built entirely for TypeScript with full type safety across client and server APIs. First-class PostgreSQL support with **Drizzle ORM adapter** and automatic schema generation/migrations for auth tables. Official Svelte client library (`better-auth/svelte`) with hooks designed for SvelteKit patterns. Designed to run on your own infrastructure with your own database—no third-party auth services required, excellent for self-hosted deployments. Unlike Clerk or Auth0, all auth data stays in your PostgreSQL database, giving full data ownership for small business clients.

---

### pg-boss

**Documentation:** https://github.com/timgit/pg-boss | https://timgit.github.io/pg-boss/

pg-boss is a job queue and background processing library built for Node.js that uses PostgreSQL as its storage engine. Instead of requiring Redis or a separate message broker, pg-boss leverages PostgreSQL's `SKIP LOCKED` feature to provide exactly-once job delivery with atomic commits. This allows jobs to be created within existing database transactions, ensuring consistency between business data and queued jobs. Key features include cron scheduling, priority queues, dead letter queues, automatic retries with exponential backoff, rate limiting, debouncing, and pub/sub API for fan-out patterns.

Written in TypeScript (99.9% TypeScript codebase) with full type definitions. **Uses PostgreSQL as its only dependency**—no Redis or separate queue infrastructure needed; queues are PostgreSQL tables. Works with any Node.js environment and integrates into SvelteKit server hooks or API routes. Perfect for self-hosted infrastructure—consolidates job queue into existing PostgreSQL, reducing operational complexity. Use cases for small business apps include email sending, scheduled tasks (appointment reminders, report generation), webhook processing, and payment callbacks.

---

## Content Site Stack Extension

### Directus

**Documentation:** https://docs.directus.io/

Directus is an open-source headless CMS and Backend-as-a-Service built entirely in TypeScript on Node.js and Vue.js. It instantly wraps any SQL database (PostgreSQL, MySQL, SQLite, MariaDB, MS-SQL) with auto-generated REST and GraphQL APIs, providing a beautiful no-code admin interface (Data Studio) for non-technical users to manage content. Directus is unopinionated and doesn't require data migration—it works with existing database schemas. Key features include real-time WebSocket subscriptions, built-in automation flows, granular RBAC, SSO integration, file/asset management, live preview, and localization. Licensed under BSL 1.1—**free for organizations under $5M annual revenue**.

Directus is ideal for the "add CMS complexity only when content volume justifies it" philosophy. Add Directus when a client has growing content needs (blog posts, service pages, team bios, testimonials), when non-technical clients need to edit content (the intuitive Data Studio requires zero training), or when content workflow is needed (drafts, publishing schedules, approval flows). Runs perfectly on a VPS with Docker, keeping costs low. Official TypeScript SDK works seamlessly with SvelteKit's server-side data fetching. For simpler brochure sites, skip the CMS entirely.

---

## Optional Extensions

### sveltekit-rate-limiter

**Documentation:** https://github.com/ciscoheat/sveltekit-rate-limiter

sveltekit-rate-limiter is a modular, TypeScript-first rate limiting library designed specifically for SvelteKit applications. It integrates directly with SvelteKit's `+page.server.ts`, `+server.ts`, and `src/hooks.server.ts` files. The library provides multiple built-in limiters (IP address, IP + User Agent, secure cookies) that can be combined with configurable rates (e.g., `[10, 'h']` for 10 requests per hour). It uses an in-memory cache by default but supports custom stores and includes a `RetryAfterRateLimiter` variant that returns proper HTTP `Retry-After` headers.

Add sveltekit-rate-limiter when building features vulnerable to abuse: **contact/lead forms** (prevent spam without relying on CAPTCHAs), password reset flows (protect against enumeration attacks), account registration (limit signup attempts), and API endpoints (if exposing to third parties). Perfect for self-hosted VPS deployments where you don't have edge-level rate limiting. The SvelteKit-native design means zero friction integrating with the existing stack.

---

### Pino

**Documentation:** https://getpino.io/

Pino is an ultra-fast, low-overhead JSON logger for Node.js, designed with the philosophy that logging should never slow down your application. It's up to **5x faster than alternatives** like Winston and Bunyan by using asynchronous logging and efficient JSON serialization that doesn't block the event loop. Pino outputs structured JSON logs by default (with level, timestamp, pid, hostname, and message), making them ideal for log aggregators. Key features include six log levels, child loggers, worker thread transports, runtime log level changes, data redaction for sensitive fields, and `pino-pretty` for human-readable development output.

Add Pino when projects grow beyond simple console.log debugging: production error tracking (structured JSON logs integrate with monitoring tools), VPS deployments (essential for debugging issues on DigitalOcean without local access), performance-sensitive applications (minimal overhead is critical for Node.js), and compliance/audit trails (structured logs with timestamps often required for business clients). For SvelteKit, use in server-side code (`+server.ts`, `hooks.server.ts`) to log API calls, authentication events, and errors.

---

### PartyKit

**Documentation:** https://docs.partykit.io/

PartyKit is a deployment and hosting platform for globally distributed, stateful, on-demand WebSocket servers, built on Cloudflare Workers and Durable Objects. It provides a simple TypeScript API for building real-time multiplayer and collaborative features—from chat apps and live cursors to collaborative text editors. PartyKit handles connection management, state persistence, and automatic scaling across Cloudflare's global edge network (within ~50ms of 95% of internet users). Built-in support for collaboration frameworks (Y.js, Automerge, Replicache), MIT licensed with a free tier available.

Add PartyKit when clients need real-time collaborative features: **live presence indicators** (show who's viewing a page), real-time notifications (instant updates without polling), collaborative editing (multi-user admin tools), live dashboards/counters (real-time analytics), and chat/messaging (customer support widgets). PartyKit complements the self-hosted DigitalOcean VPS approach—run the main SvelteKit app on VPS while PartyKit handles specialized real-time infrastructure at the edge. Only add when clients specifically need real-time features; it's overkill for static brochure sites.

---

### TanStack Table

**Documentation:** https://tanstack.com/table/latest

TanStack Table is a headless UI library for building powerful tables and datagrids in TypeScript/JavaScript. Being "headless" means it provides all the logic, state management, and API for table features **without any markup, styles, or pre-built components**—giving 100% control over HTML and CSS. It's framework-agnostic with official adapters including `@tanstack/svelte-table`. Features include sorting (single and multi-column), global and column-specific filtering, pagination, row grouping/aggregation, row selection/expansion, column ordering/visibility/resizing, and virtualization for massive datasets. Lightweight at 10-15kb and fully tree-shakeable.

Add TanStack Table when building data-heavy admin interfaces or client dashboards: client admin panels (display orders, customers, inventory, appointments), reporting interfaces (sortable/filterable business data), CMS listing views (custom content management UIs), and invoice/transaction history. The headless approach pairs with any CSS framework (Tailwind, custom styles) without fighting pre-built component assumptions. Skip it for simple brochure sites; add when there's actual tabular data to manage. The Svelte adapter integrates cleanly with SvelteKit's reactive paradigm.

---

### Cloudflare KV

**Documentation:** https://developers.cloudflare.com/kv/

Cloudflare Workers KV is a global, low-latency key-value data store distributed across Cloudflare's **330+ edge locations**. It's designed for read-heavy workloads with eventual consistency—data written to central stores propagates to edge caches within ~60 seconds. KV supports values up to 25MB, keys up to 512 bytes, and includes automatic TTL expiration, metadata attachment, and bulk operations. Access KV via Workers Bindings (within Cloudflare Workers) or REST API (from external applications). Generous free tier: 100,000 reads/day and 1,000 writes/day.

Add Cloudflare KV when specific caching or global state needs arise: session storage (if using Cloudflare Workers for edge authentication), feature flags (toggle features without redeploying), rate limiting state (share counters across edge locations), cached API responses (store transformed data at the edge), and user preferences (quick access globally). **Important consideration:** Since the stack is self-hosted on DigitalOcean VPS, KV is most useful when using Cloudflare as a CDN in front of the VPS or adding Cloudflare Workers for specific edge functions. For pure VPS deployments, consider Redis or SQLite for key-value needs instead.

---

## Stack Philosophy Summary

This technology stack embodies several core principles for Isaac's web development business:

- **TypeScript-first**: Every tool offers first-class TypeScript support, from SvelteKit to Drizzle to better-auth
- **Own your infrastructure**: Self-hosted via DigitalOcean VPS + Coolify rather than per-site pricing of managed platforms
- **Cost predictability**: Flat monthly costs, generous free tiers, and no surprise bandwidth charges
- **Start simple, add complexity when justified**: Base stack handles most needs; extensions like Directus or pg-boss added only when warranted
- **Pre-decided tooling**: Consistent choices across all client projects reduce decision fatigue and compound expertise

The result is enterprise-level capabilities at a fraction of managed platform costs, with complete ownership and control over the infrastructure—ideal for building reliable websites for small local businesses.