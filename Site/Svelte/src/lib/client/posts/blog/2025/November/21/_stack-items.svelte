<script module lang="ts">
	import {
		sveltekit,
		bun,
		tailwind,
		postgres,
		drizzle,
		gsap as gsapIcon,
		cloudflare,
		docker,
		coolify,
		runed,
		bunny,
		github,
		sentry,
		zod,
		effect,
		shadcnSvelte,
		resend,
		digitalOcean,
		betterAuth,
		vitest,
		threejs,
		figma,
		groq,
		illustrator,
		photoshop,
		blender,
		rive,
		claude,
		mastra,
		cursor
	} from '$images/icons';

	import { Marked } from '$components';

	// Common Stack - Framework
	export const framework = [
		{
			name: 'SvelteKit',
			shortDescription: 'A full-stack framework for building web applications.',
			url: 'https://svelte.dev/docs/kit',
			icon: sveltekit,
			description:
				'SvelteKit is the official application framework from the Svelte team, powered by Vite. It handles the complex problems of building production-ready web applications—from file-system based routing that updates the UI when links are clicked, to build optimizations that load only minimal required code, page preloading, and configurable rendering (SSR, client-side, or static prerendering). Apps are **server-rendered by default** for excellent first-load performance and SEO, then transition to client-side navigation for a smooth SPA experience.\n\nSvelteKit is the perfect foundation for small business web development because it\'s explicitly designed to "start simple and grow with you." Server-rendered defaults ensure excellent SEO out of the box—critical for local search visibility. Built-in TypeScript support aligns with the TypeScript-first philosophy, and various adapters (Node, static) support self-hosting on DigitalOcean. The file-based routing makes project structure predictable and maintainable across multiple client projects.'
		},
		{
			name: 'Effect',
			shortDescription: 'A powerful TypeScript library for building robust applications.',
			url: 'https://effect.website/docs/getting-started/introduction/',
			icon: effect,
			description:
				'Effect is a powerful TypeScript library for building complex synchronous and asynchronous programs with a comprehensive standard library. It provides a fully-fledged functional effect system with robust primitives for managing side effects, ensuring type safety, and supporting structured concurrency. The core `Effect<Success, Error, Requirements>` type allows explicit tracking of errors and dependencies through the type system. Effect fills TypeScript\'s missing standard library gap, potentially replacing multiple specialized libraries like Lodash, Zod, or RxJS with a single cohesive solution.\n\nEffect provides maximum type-safety essential for the TypeScript-first philosophy. Its explicit error handling and dependency tracking reduce runtime bugs and make code more maintainable across client projects. The "batteries included" approach means fewer external dependencies to manage when self-hosting. Effect is incrementally adoptable—introduce it where complexity warrants without requiring full adoption, particularly valuable for handling API integrations, form submissions, and data fetching common in small business websites.'
		},
		{
			name: 'Runed',
			shortDescription: 'A collection of Svelte utilities and helpers.',
			url: 'https://runed.dev/docs',
			icon: runed,
			description:
				"Runed is a collection of utilities for Svelte 5 that make composing powerful applications a breeze by leveraging Svelte Runes. It extends Svelte 5's reactive primitives with carefully crafted utility functions covering reactivity (`extract`, `resource`, `watch`), state management (`Debounced`, `PersistedState`, `StateHistory`, `FiniteStateMachine`), element handling (`ElementRect`, `ElementSize`, `IsInViewport`), browser interactions (`useEventListener`), sensors (`IsIdle`, `onClickOutside`, `PressedKeys`), and animation utilities.\n\nRuned is a natural companion to SvelteKit, specifically designed for Svelte 5's runes system. Utilities like **PersistedState** (remembering user preferences), **IsInViewport** (scroll-triggered animations), and **Debounced** (search inputs) solve common UI patterns without reinventing the wheel. The TypeScript-first design with full type safety aligns perfectly with the stack philosophy. Being MIT licensed and community-driven means no vendor lock-in, and the consistent API reduces learning curve when building multiple client sites."
		},
		{
			name: 'Vitest',
			shortDescription: 'A fast unit test framework powered by Vite.',
			url: 'https://vitest.dev/guide/',
			icon: vitest,
			description:
				"Vitest is a next-generation testing framework powered by Vite, providing a Vite-native testing experience with lightning-fast performance. It reuses Vite's configuration, transformers, resolvers, and plugins for consistency between your app and tests. Key features include smart instant watch mode (like HMR for tests), out-of-box ESM/TypeScript/JSX support, native code coverage via v8 or istanbul, built-in mocking with Tinyspy, and browser mode for component testing. It offers a Jest-compatible API making migration straightforward.\n\nVitest is the natural testing choice for any Vite-powered stack like SvelteKit. Since SvelteKit uses Vite under the hood, Vitest shares the same configuration and plugins, eliminating setup friction. **Instant watch mode** means faster development feedback loops. Out-of-box TypeScript support aligns with the TypeScript-first philosophy, and component testing support ensures UI components work correctly. The Jest-compatible API means abundant learning resources and familiar patterns. No external test runner dependencies simplifies the self-hosted infrastructure."
		},
		{
			name: 'Tailwind CSS',
			shortDescription: 'A utility-first CSS framework for rapidly building custom designs.',
			url: 'https://tailwindcss.com/docs',
			icon: tailwind,
			description:
				"Tailwind CSS is a utility-first CSS framework packed with composable classes like `flex`, `pt-4`, `text-center`, and `rotate-90` that build any design directly in markup. Unlike traditional frameworks, Tailwind generates CSS based on classes you're actually using, automatically removing unused CSS in production—most projects ship **less than 10kB of CSS**. The framework uses CSS layers to avoid specificity issues and provides responsive design variants (`sm:`, `md:`), state variants (`hover:`, `focus:`), container queries, and dark mode support.\n\nTailwind is ideal for small business web development because it enables rapid prototyping and consistent design without leaving the HTML—crucial for efficiently serving multiple local clients. The utility-first approach means designs are unique per client rather than looking like cookie-cutter templates. Built-in responsive design and dark mode cover common requirements. Small production bundle sizes improve page load performance (important for SEO and user experience). Theme customization allows creating consistent brand-specific design systems for each client."
		},
		{
			name: 'shadcn-svelte',
			shortDescription: 'Beautifully designed components built with Svelte and Tailwind CSS.',
			url: 'https://www.shadcn-svelte.com/docs',
			icon: shadcnSvelte,
			description:
				'shadcn-svelte is an unofficial, community-led Svelte port of the popular shadcn/ui component library, built with Bits UI (headless components) and Tailwind CSS. Unlike traditional component libraries installed from NPM, shadcn-svelte provides components you **copy directly into your project**, giving complete control to customize, modify, and own the code. The library includes **60+ components**: Accordion, Alert Dialog, Button, Calendar, Card, Carousel, Charts, Combobox, Command, Data Table, Date Picker, Dialog, Drawer, Navigation Menu, Popover, Select, Sheet, Sidebar, Table, Tabs, Tooltip, and many more.\n\nshadcn-svelte perfectly embodies the "own infrastructure" philosophy—you own the component code, not a package dependency. This means complete control over components without vendor lock-in or breaking changes from library updates. The Tailwind CSS integration provides seamless styling consistency. Built-in accessibility in all components saves development time and ensures client sites meet modern standards. The CLI distribution system makes it easy to add only needed components, keeping projects lean.'
		},
		{
			name: 'GSAP',
			shortDescription: 'A JavaScript library for creating animations.',
			url: 'https://gsap.com/docs/v3',
			icon: gsapIcon,
			description:
				"GSAP is an industry-standard JavaScript animation library capable of animating anything JavaScript can touch: CSS, SVG, canvas, WebGL, colors, strings, motion paths, and generic objects. At its core, GSAP is a high-speed property manipulator that updates values with extreme accuracy—up to **20x faster than jQuery**. The library provides powerful tools including ScrollTrigger for scroll-driven animations, ScrollSmoother, MorphSVG, MotionPath, SplitText, Flip for layout animations, and Draggable. GSAP is now completely free (acquired by Webflow) and used on over 12 million websites.\n\nGSAP adds professional-grade animation capabilities that help client websites stand out from competitors. For small local businesses, engaging animations (scroll effects, micro-interactions, text reveals) create memorable user experiences that convert visitors to customers. The framework-agnostic design integrates seamlessly with SvelteKit/Svelte. **ScrollTrigger** is particularly valuable for storytelling websites common in service businesses. Now completely free, there's no cost barrier, and the lightweight plugin architecture means including only what's needed."
		},
		{
			name: 'Three.js',
			shortDescription: 'A JavaScript library for creating 3D graphics.',
			url: 'https://threejs.org/docs/',
			icon: threejs,
			description:
				'Three.js is a cross-browser JavaScript library for creating and displaying animated 3D computer graphics in web browsers using WebGL (and experimental WebGPU). It abstracts the complexity of raw WebGL programming, enabling GPU-accelerated 3D animations without proprietary browser plugins. The library provides comprehensive 3D capabilities: scenes, cameras, geometries, physically-based rendering materials, lighting, textures, instancing, post-processing effects (bloom, depth of field), interactive controls (OrbitControls, DragControls), and loaders for 3D model formats (GLTF, OBJ, FBX).\n\nThree.js provides 3D capabilities that can differentiate client websites in competitive markets. For small businesses like real estate, automotive, furniture, or retail, 3D product visualizations and interactive experiences can significantly increase engagement and conversions. Three.js works alongside GSAP for coordinated 3D animations. The vanilla JavaScript API integrates cleanly with SvelteKit components. While not every client needs 3D, having this capability positions the business for premium projects. Combined with TypeScript type definitions, it fits the TypeScript-first approach.'
		}
	];

	// Common Stack - Backend
	export const backendCommon = [
		{
			name: 'Bun',
			shortDescription: 'A fast JavaScript runtime, bundler, and package manager.',
			url: 'https://bun.com/docs',
			icon: bun,
			description:
				"Bun is an all-in-one JavaScript/TypeScript runtime and toolkit that ships as a single executable. Built with Zig and powered by Apple's JavaScriptCore engine (used in Safari), it dramatically reduces startup times and memory usage compared to Node.js. Beyond the runtime, Bun includes a complete development toolkit: a package manager (faster than npm/yarn), a bundler (claims 1.75x faster than esbuild), a test runner (Jest-compatible), and **native TypeScript/JSX support without transpilation configuration**. It natively supports web-standard APIs like `fetch`, `WebSocket`, and `ReadableStream`, plus has built-in SQLite, Redis client, and HTTP server capabilities.\n\nNative TypeScript execution without configuration aligns perfectly with the TypeScript-first philosophy. The **single binary with no complex dependencies** makes deployment on DigitalOcean VPS + Coolify straightforward. Lower memory usage and faster execution mean smaller VPS instances can handle more load, reducing infrastructure costs. The simplified tooling eliminates need for separate tools (npm, webpack, babel, jest), reducing complexity for small business projects. Node.js compatibility allows incremental adoption without migration risk."
		},
		{
			name: 'PostgreSQL',
			shortDescription: 'A powerful, open source object-relational database system.',
			url: 'https://www.postgresql.org/docs/',
			icon: postgres,
			description:
				'PostgreSQL is a powerful, open-source object-relational database system with over **35 years of active development**, earning a strong reputation for reliability, feature robustness, and performance. It\'s ACID-compliant, runs on all major operating systems, and conforms to at least 170 of 177 mandatory SQL:2023 Core features. PostgreSQL offers comprehensive features including complex queries, foreign keys, triggers, updatable views, transactional integrity, MVCC, full-text search, JSON/JSONB support, and geospatial data via PostGIS.\n\nPostgreSQL runs perfectly on DigitalOcean VPS and can be managed via Coolify with no cloud vendor lock-in. Completely free and open-source with no per-query pricing or usage tiers ensures **cost predictability**. The 35+ years of development means battle-tested stability for small business applications. Skills and data are portable, and it\'s widely supported by all frameworks and ORMs. One database technology handles all use cases (relational, JSON, full-text search), eliminating decision fatigue and aligning with the "pre-decide tooling" philosophy.'
		},
		{
			name: 'Cloudflare R2',
			shortDescription: 'Object storage with S3-compatible API and no egress fees.',
			url: 'https://developers.cloudflare.com/r2/',
			icon: cloudflare,
			description:
				"Cloudflare R2 is S3-compatible object storage that allows storing large amounts of unstructured data **without the costly egress bandwidth fees** associated with typical cloud storage services. It's designed for high data durability and offers strong consistency per object. R2 works seamlessly with AWS S3 SDKs and tools. Key features include public buckets, bucket-scoped tokens, presigned URLs, CORS configuration, and object lifecycles. R2 offers a generous free tier (10GB storage, 10 million Class A operations, 1 million Class B operations per month), with standard storage at $0.015/GB/month beyond free allocation.\n\n**Zero egress fees** are critical for cost predictability—downloading files doesn't incur surprise bandwidth charges (major savings vs. AWS S3/GCS). The generous free tier means small business websites with moderate file storage needs may operate entirely within free limits. S3 compatibility means using familiar tools and SDKs with no proprietary API lock-in. This represents a smart hybrid approach: keep core app self-hosted on VPS while offloading static file storage to a managed service with predictable pricing."
		},
		{
			name: 'Resend',
			shortDescription: 'Transactional email API for developers.',
			url: 'https://resend.com/docs/api-reference/introduction',
			icon: resend,
			description:
				'Resend is a modern email API platform designed specifically for developers, positioning itself as "the Stripe for Email." It provides a clean REST API and SDKs for Node.js, Python, Ruby, and other languages. Key features include batch email sending (up to 50 recipients per call), email scheduling with natural language, file attachments, webhooks for delivery/open/click/bounce events, domain verification with DKIM/SPF/DMARC, automatic suppression list management, and multiple sending regions. It integrates with React Email for building templates using React components instead of HTML tables.\n\nThe clean REST API with TypeScript SDKs fits the TypeScript-first philosophy perfectly. The simple pricing model includes a free tier of **3,000 emails/month** with predictable per-email pricing beyond that. Quick integration takes minutes—ideal when building websites for small local businesses. Built-in DKIM/SPF/DMARC and reputation management helps ensure client emails reach inboxes. This avoids the notorious difficulty and deliverability risks of self-hosting email servers.'
		},
		{
			name: 'Sentry',
			shortDescription: 'Error monitoring and performance tracking platform.',
			url: 'https://docs.sentry.io/',
			icon: sentry,
			description:
				'Sentry is a comprehensive application monitoring and debugging platform used by over 4 million developers. It automatically captures errors, uncaught exceptions, and unhandled rejections, then groups similar events into issues for efficient triage. Sentry provides end-to-end distributed tracing, performance monitoring, session replays, and profiling—all connected by the same trace. Key capabilities include stack traces with source code context, suspect commit identification, release tracking, breadcrumb trails showing user actions before errors, and AI-powered debugging assistance.\n\nDrop-in integration—just install the SDK and initialize with a DSN—requires no agents or complex setup. A self-hosted option is available if needed for cost control at scale. The generous free tier includes **5,000 errors/month**, sufficient for many small business websites. Production errors on client websites can damage business reputation; Sentry provides immediate visibility. First-class TypeScript SDK with full typing aligns with stack philosophy. Once configured, it works automatically—fitting the "pre-decide and forget" approach.'
		}
	];

	// Common Stack - Infrastructure
	export const infrastructure = [
		{
			name: 'DigitalOcean VPS',
			shortDescription: 'Cloud hosting platform for virtual private servers.',
			url: 'https://www.digitalocean.com/products/droplets',
			icon: digitalOcean,
			description:
				'DigitalOcean Droplets are Linux-based virtual private servers running on virtualized hardware using KVM as the hypervisor. Each Droplet provides a complete, isolated server environment with dedicated resources including CPU, RAM, SSD storage, and networking. Droplets are available in multiple sizes across **13+ global data center regions**, starting at just $4/month. Unlike AWS, GCP, or Azure with complex, unpredictable pricing structures, DigitalOcean emphasizes simplicity and cost transparency. Users get root access to their servers with full control over the operating system, applications, and data.\n\nDigitalOcean is the foundational compute layer that perfectly embodies the "own your infrastructure" philosophy. Monthly caps and flat pricing mean bills are never a surprise—critical for quoting fixed prices to small business clients. Root access means complete control over the server environment with no vendor lock-in to platform-specific features. The developer-friendly interface is simpler than enterprise clouds, with extensive tutorials and documentation. Start small ($4-6/mo) and scale as client sites grow.'
		},
		{
			name: 'Coolify',
			shortDescription: 'Self-hosted PaaS for deploying applications with Docker.',
			url: 'https://coolify.io/docs/',
			icon: coolify,
			description:
				"Coolify is an open-source, self-hosted Platform as a Service (PaaS) that provides a Heroku/Vercel/Netlify-style developer experience on your own infrastructure. It enables deployment of static sites, APIs, backends, databases, and **280+ one-click services** to any server you control. Coolify handles Docker container orchestration, reverse proxy configuration (via Traefik), automated Let's Encrypt SSL certificates, Git integration (GitHub, GitLab, Bitbucket), automated deployments on push/PR, and database provisioning. Installation is simple: one bash command on any Ubuntu LTS server.\n\nCoolify is the orchestration layer that makes self-hosting practical and competitive with managed platforms. All configurations save to your server—you can leave anytime without losing your setup (no vendor lock-in). Free and open-source with no feature paywalls means paying only for server costs. It provides the same DX as Vercel/Netlify—git push to deploy, automatic SSL, preview environments—**without per-site or per-deployment costs**. Deploy unlimited client sites on a single Coolify instance, with team collaboration and project organization."
		},
		{
			name: 'GitHub Actions',
			shortDescription: 'CI/CD platform for automating workflows.',
			url: 'https://docs.github.com/en/actions',
			icon: github,
			description:
				'GitHub Actions is a native CI/CD platform built directly into GitHub repositories. It enables automation of build, test, and deployment workflows triggered by events like pushes, pull requests, schedules, or webhooks. Workflows are defined in YAML files stored in `.github/workflows/`. Each workflow contains jobs that run on GitHub-hosted runners (Linux, Windows, macOS) or self-hosted runners. Key features include matrix builds, secrets management, artifact storage, dependency caching, parallel job execution, and integration with virtually any deployment target. The free tier includes **2,000 minutes/month for private repos** and unlimited minutes for public repos.\n\nGitHub Actions serves as the automation layer connecting code changes to deployments with zero infrastructure overhead—no separate CI server to manage. No additional costs with a generous free tier for most small business projects. It integrates with Coolify via webhooks or API, or can run custom build/test steps before deployment. Pre-built actions for Node.js, npm/pnpm, type checking, and building SvelteKit apps simplify setup. Run linting, TypeScript checking, and tests before code reaches production.'
		},
		{
			name: 'Cloudflare',
			shortDescription: 'CDN, DNS, and SSL services.',
			url: 'https://developers.cloudflare.com/fundamentals/',
			icon: cloudflare,
			description:
				"Cloudflare is a global network platform providing DNS, CDN, security, and performance services. It operates as a reverse proxy—when you point your domain's nameservers to Cloudflare, traffic flows through their network of **330+ data centers worldwide** (reaching 95% of the Internet-connected population within 50ms). Core services include authoritative DNS hosting, CDN with intelligent caching, DDoS protection at layers 3/4/7, Web Application Firewall, free SSL/TLS certificates, and HTTP/2/3 support. The free tier is exceptionally generous, including unlimited bandwidth, basic DDoS protection, free SSL, and DNS hosting.\n\nCloudflare is the edge/security layer that protects and accelerates self-hosted infrastructure. Essential features (DNS, CDN, SSL, DDoS protection) are free—massive cost savings vs. enterprise solutions. It **hides origin IP addresses** from direct attacks; attackers only see Cloudflare IPs. Global caching of static assets reduces load on origin servers and improves client site speed worldwide. Fast, reliable DNS with easy management is essential for hosting multiple client domains. The free tier eliminates bandwidth-based billing surprises from CDN usage."
		},
		{
			name: 'Bunny CDN',
			shortDescription: 'Content delivery network for static assets.',
			url: 'https://bunny.net/cdn/',
			icon: bunny,
			description:
				"Bunny CDN is a lightning-fast, cost-effective content delivery network with **119 global PoPs** across 6 continents. It offers pay-as-you-go pricing starting at $0.002/GB with a $1/month minimum. Features include NVMe SSD servers, 250+ Tbps network capacity, 24ms average global latency, free Let's Encrypt SSL, instant cache purging, real-time analytics, Edge Rules, DDoS protection, and Perma-Cache for permanent edge storage. Beyond CDN, bunny.net offers Bunny Storage, Bunny Stream (video delivery with HLS/DRM), and Bunny Optimizer (image processing).\n\nBunny CDN offers extreme cost efficiency—pay only for bandwidth used, ideal for small business sites with variable traffic. The **$1/month minimum** is perfect for low-traffic client sites that still benefit from CDN performance. Better suited than Cloudflare for video streaming or large file downloads (Bunny Stream integration). Perma-Cache permanently caches static assets for 100% cache hit ratio, reducing origin server load to near-zero. Use Cloudflare for DNS/security and Bunny for large media assets, or use Bunny alone for simpler setups."
		},
		{
			name: 'Docker Compose',
			shortDescription: 'Tool for defining and running multi-container Docker applications.',
			url: 'https://docs.docker.com/compose/',
			icon: docker,
			description:
				'Docker Compose is a tool for defining and running multi-container Docker applications using a single YAML configuration file. It allows defining services (containers), networks, volumes, secrets, and their relationships in a declarative format. With a single `docker compose up` command, all services are created and started with proper networking and dependencies. Key features include service scaling, environment variable management, health checks, restart policies, volume persistence, and network isolation. Docker Compose works across all environments—development, testing, staging, and production.\n\nCoolify uses Docker Compose under the hood—understanding Compose means understanding your infrastructure. Run exact production stack locally using the same compose files, eliminating "works on my machine" issues. Compose files are transferable and can deploy the same setup to any Docker host, not locked to Coolify. Define **SvelteKit app + PostgreSQL + Redis + background workers** in one file. YAML files serve as infrastructure documentation for each client project. Standard Docker ecosystem tool works with any container orchestrator if you outgrow Coolify.'
		}
	];

	// Custom Application Stack Extension - Additional Backend Dependencies
	export const backendCustom = [
		{
			name: 'Drizzle',
			shortDescription: 'A lightweight and performant TypeScript ORM.',
			url: 'https://orm.drizzle.team/',
			icon: drizzle,
			description:
				'Drizzle ORM is a lightweight, headless TypeScript ORM that provides both SQL-like and relational query APIs. Unlike traditional "data frameworks" that require building projects around them, Drizzle embraces SQL at its core—define database schemas in TypeScript, write SQL-like queries with full type inference, and manage migrations automatically. The philosophy is **"if you know SQL, you know Drizzle."** Distinguished by its zero-dependency architecture (~31KB), native PostgreSQL/MySQL/SQLite support, and serverless-ready design, it includes Drizzle Kit for migrations and Drizzle Studio for database visualization.\n\nDrizzle is TypeScript-first by design with automatic type inference from schemas, eliminating duplicate type declarations. Native first-class PostgreSQL dialect support includes all PostgreSQL-specific features (RLS, sequences, schemas, extensions). It\'s framework-agnostic and works seamlessly with SvelteKit\'s server-side data loading patterns. No external services required—works with any PostgreSQL instance including Docker-based local development. The `drizzle-zod` extension integrates Zod validation schemas with database schemas.'
		},
		{
			name: 'Zod',
			shortDescription: 'TypeScript-first schema validation library.',
			url: 'https://zod.dev/',
			icon: zod,
			description:
				"Zod is a TypeScript-first schema validation library that enables defining data schemas and validating runtime data against them. You declare a validator once, and Zod automatically infers the corresponding TypeScript type—solving the common problem of duplicating type definitions between validation logic and TypeScript interfaces. Zod 4 features a **2KB gzipped core bundle**, zero external dependencies, and works in both Node.js and browsers. Key features include safe parsing with `.safeParse()`, automatic type inference via `z.infer<>`, composable schemas, custom refinements, and comprehensive error formatting.\n\nZod's core strength eliminates duplicate type declarations by inferring static types from schemas (requires TypeScript strict mode). It works with `drizzle-zod` to generate Zod schemas directly from Drizzle database schemas, ensuring validation matches database constraints. Ideal for validating form data, API request/response bodies, and server actions in SvelteKit applications. Use cases include form validation, API payload validation, environment variable validation, and configuration parsing."
		},
		{
			name: 'better-auth',
			shortDescription: 'A full-featured authentication library for modern applications.',
			url: 'https://www.better-auth.com/',
			icon: betterAuth,
			description:
				'Better Auth is a framework-agnostic, universal authentication and authorization framework for TypeScript. It provides comprehensive out-of-the-box features: email/password authentication, social sign-on (Google, GitHub, Apple, Discord), session management, built-in rate limiting, and automatic database schema management. Advanced features like 2FA, passkeys, multi-tenancy, organization management with RBAC, and SSO are available through plugins. Better Auth **auto-generates database schemas** (including migrations), offers client libraries for React, Vue, Svelte, and vanilla JS, and requires minimal configuration.\n\nBuilt entirely for TypeScript with full type safety across client and server APIs. First-class PostgreSQL support with **Drizzle ORM adapter** and automatic schema generation/migrations for auth tables. Official Svelte client library (`better-auth/svelte`) with hooks designed for SvelteKit patterns. Designed to run on your own infrastructure with your own database—no third-party auth services required, excellent for self-hosted deployments. Unlike Clerk or Auth0, all auth data stays in your PostgreSQL database, giving full data ownership for small business clients.'
		}
	];

	export const design = [
		{
			name: 'Illustrator',
			shortDescription: 'A design tool for creating UI and UX.',
			url: '',
			icon: illustrator,
			description:
				'Adobe Illustrator is a professional vector graphics editor that creates scalable artwork using mathematical formulas rather than pixels. Core capabilities include precision drawing with pen and shape tools, logo and brand identity design, icon set creation, typography, and pattern development. The tool excels at producing assets that scale infinitely—from **16px favicons to full-width hero graphics**—without quality loss, making it essential for responsive web design.\n\n Illustrator serves as the primary tool for creating client logos, icon sets, and vector illustrations. Its SVG export produces clean, optimized code that works natively with SvelteKit\'s asset handling. The "Export As" workflow generates efficient SVG files with options for CSS-manipulable presentation attributes, minification, and responsive sizing. Vector assets exported from Illustrator can be directly embedded in HTML, imported as Svelte components, or styled with CSS animations—ideal for delivering crisp, performant graphics to small business clients.'
		},
		{
			name: 'Photoshop',
			shortDescription: 'A design tool for creating UI and UX.',
			url: '',
			icon: photoshop,
			description:
				'Adobe Photoshop is a raster graphics editor for creating and manipulating pixel-based images, handling photo retouching, color correction, compositing, and web graphics optimization. The tool supports layers with masks, alpha compositing, and multiple color models. Key web features include image resizing with resampling, resolution management for web display, and comprehensive export options for **JPEG, PNG, WebP, and GIF formats** with fine-tuned compression controls.\n\nPhotoshop handles all raster asset needs—optimizing client product photos, editing hero images, creating transparent PNGs for overlays, and preparing web-optimized images for fast page loads. The "Export As" dialog provides real-time compression previews for balancing visual quality against file size, critical for small business sites where performance affects user experience and SEO. Photoshop complements Illustrator by handling photographs and complex graphics while Illustrator manages all vector-based brand assets.'
		},
		{
			name: 'Blender',
			shortDescription: 'A design tool for creating UI and UX.',
			url: 'https://docs.blender.org/manual/en/latest/',
			icon: blender,
			description:
				"Blender is a free, open-source 3D creation suite supporting the entire 3D pipeline: modeling, rigging, animation, simulation, rendering, and compositing. The software includes two render engines—Cycles for photorealistic output and EEVEE for real-time PBR rendering. With its **Principled BSDF material system** and comprehensive animation tools including skeletal animation, shape keys, and NLA tracks, Blender enables creation of production-quality 3D assets.\n\nFor web development, Blender's glTF 2.0 exporter (developed with Khronos Group) produces GLB files optimized for browser delivery. These compact binary files contain meshes, PBR materials, and animations in a single package that loads efficiently in Three.js via GLTFLoader. The workflow integrates with SvelteKit by hosting GLB files as static assets and initializing Three.js scenes within component lifecycle hooks."
		},
		{
			name: 'Figma',
			shortDescription: 'A design tool for creating UI and UX.',
			url: '',
			icon: figma,
			description:
				"Figma is a cloud-based collaborative interface design tool combining UI/UX design, prototyping, and developer handoff in one platform. Core capabilities include real-time multiplayer collaboration, interactive prototyping with triggers and transitions, and a robust component system with variants, styles, and variables for design systems. The **Dev Mode interface** provides developers with layer inspection, auto-generated CSS snippets, asset exports, and integration with VS Code via the Figma extension.\n\nFigma streamlines the design-to-development workflow by eliminating the traditional handoff friction between design and code. For small business projects, he can design UI mockups, create interactive prototypes for client approval, then extract CSS properties and export assets directly into his SvelteKit projects. The component system enables building reusable design patterns that mirror the component architecture of Svelte, ensuring consistency between designs and implementation. Dev Mode's CSS output in customizable units (px, rem, %) translates directly to Tailwind or vanilla CSS in his codebase."
		},
		{
			name: 'Rive',
			shortDescription: 'A design tool for creating UI and UX.',
			url: 'https://rive.app/docs/getting-started/introduction',
			icon: rive,
			description:
				'Rive is an interactive design tool paired with a lightweight, cross-platform runtime for creating real-time interactive animations. The editor combines vector graphics creation with timeline-based animation and a **visual state machine builder** that connects animations through conditional transitions, inputs (numbers, booleans, triggers), and interactive gestures. Unlike video exports, Rive animations run as compact `.riv` files that respond to user interaction at runtime.\n\nRive fits naturally into the SvelteKit stack through its TypeScript-typed JavaScript runtime (`@rive-app/canvas`). Animations can respond to hover states, clicks, scroll position, and data changes—enabling interactive hero sections, animated icons, loading states, and micro-interactions that elevate small business websites beyond static designs. The runtime integrates with Svelte using `onMount`/`onDestroy` lifecycle hooks for initialization and cleanup. At approximately 150KB gzipped, Rive adds sophisticated interactivity without significant bundle impact, and the state machine approach keeps animation logic within the design tool rather than scattered through JavaScript code.'
		}
	];

	export const ai = [
		{
			name: 'Claude',
			shortDescription: 'An AI platform for creating AI models.',
			url: 'https://console.groq.com/docs/overview',
			icon: claude,
			description:
				"Claude is Anthropic's family of large language models designed to be helpful, honest, and harmless. The model family includes Opus for complex reasoning and autonomous agents, Sonnet for balanced performance (achieving **72.7% on SWE-bench** for coding tasks), and Haiku for real-time applications. Key capabilities include extended thinking for deep reasoning, vision for image and PDF processing, tool use, structured JSON outputs, and context windows up to 1 million tokens. The official TypeScript SDK provides straightforward API integration.\n\nClaude serves dual purposes: accelerating development and powering client features. During development, Claude assists with code generation, debugging, test writing, and documentation across his SvelteKit/TypeScript codebase. For client projects, the API enables building conversational interfaces, content generation tools, and intelligent assistants. The Vercel AI SDK integration works seamlessly with SvelteKit's server endpoints for streaming chat responses. Claude's strength lies in sophisticated reasoning and high-quality outputs for complex tasks—ideal when building AI features that need to understand context and generate nuanced responses for local business customers."
		},
		{
			name: 'Groq',
			shortDescription: 'An AI platform for creating AI models.',
			url: 'https://console.groq.com/docs/overview',
			icon: groq,
			description:
				"Groq is an AI inference platform built on proprietary LPU (Language Processing Unit) hardware designed specifically for language model inference. Unlike GPU-based providers, Groq's architecture achieves **10x faster inference speeds** through a streaming processor design, SRAM-centric memory architecture, and deterministic compiler scheduling. The platform runs open models including Llama 3.3 70B, Whisper for speech-to-text, and Qwen, with an OpenAI-compatible API for easy integration.\n\nGroq complements Claude by providing cost-effective, ultra-fast inference for speed-critical applications. At $0.05-$0.79 per million tokens and response speeds of 280-1000+ tokens per second, Groq excels at real-time chat interfaces where sub-second latency directly impacts user experience. For small business clients, this means responsive AI chatbots that feel instantaneous rather than sluggish. The OpenAI-compatible API means existing code patterns work without modification, and the Vercel AI SDK's `@ai-sdk/groq` provider integrates cleanly with SvelteKit. Simpler, high-volume requests through Groq while reserving Claude for complex reasoning tasks—optimizing both cost and user experience."
		},
		{
			name: 'Cursor',
			shortDescription: 'An AI platform for creating AI models.',
			url: 'https://cursor.com/docs',
			icon: cursor,
			description:
				"Cursor is an AI-powered code editor built as a fork of Visual Studio Code with deep AI integration throughout the development experience. Core features include **Tab autocomplete** with a custom-trained model that predicts multi-line edits, Cmd+K inline editing for natural language code generation, and Agent Mode that autonomously searches codebases, executes terminal commands, and handles multi-step tasks. The editor connects to frontier models from OpenAI, Anthropic, and Google, while maintaining full compatibility with VS Code extensions, themes, and keybindings.\n\nCursor accelerates SvelteKit and TypeScript development without sacrificing the familiar VS Code environment. The codebase indexing provides context-aware completions that understand project structure, and Agent Mode can handle refactoring tasks across multiple files. All existing Svelte extensions work immediately, eliminating migration friction. Features like checkpoints for easy rollback, Debug Mode for runtime instrumentation, and BugBot for AI-powered code reviews add professional tooling that benefits both rapid prototyping and production code. For a solo developer building sites for small businesses, Cursor's productivity gains translate directly to serving more clients or delivering higher-quality work in the same timeframe."
		},
		{
			name: 'Mastra',
			shortDescription: 'An AI platform for creating AI models.',
			url: 'https://mastra.ai/docs',
			icon: mastra,
			description:
				"Mastra is an open-source TypeScript framework for building AI-powered applications and agents, created by the team behind Gatsby.js. The framework provides agents (autonomous AI entities that use tools to complete tasks), a graph-based workflow engine for multi-step processes, memory and RAG support, human-in-the-loop patterns, and production features including observability, evaluation, and authentication. All components are defined in **native TypeScript with Zod schema validation** and connect to 40+ LLM providers through a unified interface.\n\nMastra offers **official SvelteKit integration** with documented patterns for Actions and Server Endpoints. When building AI-powered features for clients—customer support chatbots, FAQ assistants, lead qualification bots, or booking systems with approval workflows—Mastra provides the architecture to move from prototype to production. The framework handles conversation memory, tool orchestration, and streaming responses while integrating cleanly with SvelteKit's server-side patterns. For self-hosted infrastructure, Mastra can run as a standalone server or bundle with the application, and the local playground at `localhost:4111` enables rapid agent development and testing before client deployment."
		}
	];
</script>

{#snippet sveltekitDescription()}
	<Marked
		md={`
#### A full-stack framework for building web applications.

		`}
	/>
{/snippet}
