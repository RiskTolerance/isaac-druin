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
		claude,
		mastra,
		cursor
	} from '$images/icons';

	// Common Stack - Framework
	export const framework = [
		{
			name: 'SvelteKit',
			shortDescription: 'A full-stack framework for building web applications.',
			url: 'https://svelte.dev/docs/kit',
			icon: sveltekit,
			description: `<p>SvelteKit is the official framework for building complete web applications with Svelte. It handles the behind-the-scenes complexity that every professional website needs—fast page loads, smooth navigation between pages, and search engine visibility.</p><p>When someone visits your site, pages load fully formed (not as a blank screen that fills in later), which means better search rankings and a faster experience for visitors. After that first load, clicking around feels instant because only the changing content updates.</p><p>SvelteKit hits the sweet spot: simple enough to keep projects maintainable, powerful enough to grow with your needs. Search engines can read your content properly out of the box, and the framework's structure keeps projects organized—even as they scale in complexity.</p>`
		},
		{
			name: 'Runed',
			shortDescription: 'A collection of Svelte utilities and helpers.',
			url: 'https://runed.dev/docs',
			icon: runed,
			description: `<p>Runed is a toolkit of pre-built solutions for common website behaviors. Instead of writing custom code for things like remembering user preferences, detecting when elements scroll into view, or handling search-as-you-type inputs, developers can use Runed's ready-made building blocks.</p><p>Think of it as a well-organized toolbox—each tool solves a specific problem that comes up repeatedly in web development. Need to trigger an animation when someone scrolls to a section? There's a tool for that. Want a form input that waits until the user stops typing before doing something? That too.</p><p>For projects built with Svelte, Runed fits in seamlessly and keeps code cleaner by handling fiddly details that would otherwise require a lot of repetitive work.</p>`
		},
		{
			name: 'Vitest',
			shortDescription: 'A fast unit test framework powered by Vite.',
			url: 'https://vitest.dev/guide/',
			icon: vitest,
			description: `<p>Vitest is a testing tool that automatically checks whether code is working correctly. When developers make changes, Vitest runs through a checklist of expected behaviors and flags anything that breaks—catching problems before they reach a live website.</p><p>The "fast" part matters more than it might sound. Tests that run instantly encourage developers to run them constantly, which means bugs get caught immediately rather than discovered later when they're harder to fix. Vitest is designed for speed, giving near-instant feedback as code changes.</p><p>For this stack specifically, Vitest shares the same underlying engine as SvelteKit, so there's no extra configuration or compatibility headaches—it just works.</p>`
		},
		{
			name: 'Tailwind CSS',
			shortDescription: 'A utility-first CSS framework for rapidly building custom designs.',
			url: 'https://tailwindcss.com/docs',
			icon: tailwind,
			description: `<p>Tailwind CSS is a styling system that lets developers build custom designs quickly. Instead of writing style code in a separate file, design choices are made directly alongside the page structure—making it faster to see what's happening and make changes.</p><p>The practical benefit: every website can look unique without starting from scratch. Unlike template-based approaches that make sites look similar, Tailwind provides building blocks that combine into whatever design a project needs. Responsive layouts (adapting to phone, tablet, desktop) and dark mode come built-in.</p><p>Tailwind also keeps websites fast. It automatically strips out anything unused, so visitors only download the styles actually needed—typically a tiny file that loads almost instantly.</p>`
		},
		{
			name: 'shadcn-svelte',
			shortDescription: 'Beautifully designed components built with Svelte and Tailwind CSS.',
			url: 'https://www.shadcn-svelte.com/docs',
			icon: shadcnSvelte,
			description: `<p>shadcn-svelte is a collection of pre-built interface components—buttons, forms, dialogs, dropdown menus, date pickers, data tables, navigation menus, and dozens more. Instead of building common UI elements from scratch every time, developers start with polished, working components and customize them to fit each project.</p><p>What makes this library different: the code becomes yours. Rather than depending on an external package that might change unexpectedly, components are copied directly into the project where they can be modified freely. This means complete design flexibility with no risk of updates breaking something down the road.</p><p>Every component is also built with accessibility in mind, so interactive elements work properly for keyboard users and screen readers without extra effort.</p>`
		},
		{
			name: 'GSAP',
			shortDescription: 'A JavaScript library for creating animations.',
			url: 'https://gsap.com/docs/v3',
			icon: gsapIcon,
			description: `<p>GSAP is an animation library used across millions of websites, from small portfolios to major brands. It handles the technical complexity of making things move smoothly—fading elements in, sliding content across the screen, animating text character by character, and more ambitious effects.</p><p>Scroll-triggered animations are where GSAP particularly shines. As visitors scroll down a page, elements can animate into view, backgrounds can shift, and content can reveal itself in sequence. This kind of motion turns a static page into something that feels crafted and engaging—useful for storytelling or guiding visitors through content.</p><p>GSAP recently became completely free, removing what used to be a significant cost barrier for some of its more powerful features.</p>`
		},
		{
			name: 'Three.js',
			shortDescription: 'A JavaScript library for creating 3D graphics.',
			url: 'https://threejs.org/docs/',
			icon: threejs,
			description: `<p>Three.js brings 3D graphics to websites—no app downloads or special plugins required, just standard web browsers. It powers interactive product viewers, virtual showrooms, architectural walkthroughs, and other immersive experiences that would otherwise need specialized software.</p><p>For the right project, 3D can be a real differentiator. Explorable floor plans, products shown from every angle, interactive data visualizations—these experiences keep visitors engaged longer and communicate information that static images can't.</p><p>Not every website needs 3D, but when it fits, Three.js transforms what's possible on the web.</p>`
		}
	];

	// Common Stack - Backend
	export const backendCommon = [
		{
			name: 'Bun',
			shortDescription: 'A fast JavaScript runtime, bundler, and package manager.',
			url: 'https://bun.com/docs',
			icon: bun,
			description: `<p>Bun is the engine that runs the code powering a website's server. Think of it as the software that executes all the behind-the-scenes logic—handling requests, processing data, and delivering pages to visitors.</p><p>What makes Bun notable is speed and simplicity. It runs significantly faster and uses less memory than older alternatives, which means servers can handle more visitors without needing expensive upgrades. It also consolidates several developer tools into one, reducing the number of moving parts in a project.</p><p>The practical outcome: leaner hosting costs and a simpler setup that's easier to maintain over time.</p>`
		},
		{
			name: 'PostgreSQL',
			shortDescription: 'A powerful, open source object-relational database system.',
			url: 'https://www.postgresql.org/docs/',
			icon: postgres,
			description: `<p>PostgreSQL is a database—the system that stores and organizes all the information a website needs to function. User accounts, form submissions, product listings, orders, content—everything lives in the database and gets retrieved when needed.</p><p>With over 35 years of active development, PostgreSQL has a reputation for being rock-solid. Banks, hospitals, and government agencies trust it with critical data. It handles everything from simple contact forms to complex applications without breaking a sweat.</p><p>It's also completely free with no usage fees or per-transaction pricing. Your data stays under your control, stored on your own server, with no dependency on a cloud provider's pricing whims.</p>`
		},
		{
			name: 'Cloudflare R2',
			shortDescription: 'Object storage with S3-compatible API and no egress fees.',
			url: 'https://developers.cloudflare.com/r2/',
			icon: cloudflare,
			description: `<p>Cloudflare R2 is file storage for things like images, documents, and videos—the larger files that don't belong in a traditional database. When a website displays product photos, hosts downloadable PDFs, or stores user uploads, those files need somewhere to live.</p><p>The key advantage: no bandwidth fees. Most cloud storage services charge you every time someone views or downloads a file, which can lead to unpredictable bills if something gets popular. R2 charges only for storage space, not for serving files to visitors.</p><p>The free tier covers 10GB of storage, which handles many projects comfortably. Beyond that, pricing stays predictable and straightforward.</p>`
		},
		{
			name: 'Resend',
			shortDescription: 'Transactional email API for developers.',
			url: 'https://resend.com/docs/api-reference/introduction',
			icon: resend,
			description: `<p>Resend handles the emails that websites need to send automatically—password resets, order confirmations, contact form submissions, appointment reminders. When something happens on a site that should trigger an email, Resend delivers it.</p><p>The hard part of email isn't sending; it's making sure messages actually arrive. Resend handles the technical requirements that keep emails out of spam folders and builds trust with email providers over time. Self-managing email delivery is notoriously difficult, so outsourcing it to a specialist makes sense.</p><p>The free tier includes 3,000 emails per month—plenty for most projects. Beyond that, pricing is straightforward and per-email.</p>`
		},
		{
			name: 'Sentry',
			shortDescription: 'Error monitoring and performance tracking platform.',
			url: 'https://docs.sentry.io/',
			icon: sentry,
			description: `<p>Sentry monitors websites for errors—when something breaks, it sends an alert with details about what went wrong. Instead of waiting for someone to report a problem (or never hearing about it at all), issues surface immediately.</p><p>Beyond just alerting, Sentry captures context that helps diagnose problems: what the user was doing, which page they were on, and technical details needed to fix things quickly. This turns vague bug reports like "the site isn't working" into actionable information.</p><p>The free tier covers 5,000 errors per month, which is more than enough for most projects. Setup takes minutes and then runs automatically in the background.</p>`
		}
	];

	// Common Stack - Infrastructure
	export const infrastructure = [
		{
			name: 'DigitalOcean VPS',
			shortDescription: 'Cloud hosting platform for virtual private servers.',
			url: 'https://www.digitalocean.com/products/droplets',
			icon: digitalOcean,
			description: `<p>DigitalOcean provides the actual servers that host websites—the computers that store your site's code and files and respond when visitors type in your address. Instead of running a physical machine somewhere, you rent server space that's always on, always connected, and maintained by professionals.</p><p>The pricing model is refreshingly simple: flat monthly rates starting at $4, with no surprise fees or metered charges. You know exactly what hosting will cost, making budgeting straightforward.</p><p>Full control over the server means no restrictions on what software runs or how things are configured. If you ever want to move elsewhere, everything transfers—no proprietary lock-in keeping your data hostage.</p>`
		},
		{
			name: 'Coolify',
			shortDescription: 'Self-hosted PaaS for deploying applications with Docker.',
			url: 'https://coolify.io/docs/',
			icon: coolify,
			description: `<p>Coolify is the management layer that sits on top of a server and handles the tedious work of deploying websites. Instead of manually configuring each site, Coolify provides a dashboard where you can launch new projects, manage databases, and keep everything running smoothly.</p><p>When code changes are ready, they go live automatically—no manual uploading or server commands required. Security certificates (the padlock icon in browsers) are set up and renewed automatically. If something needs a database, Coolify provisions one.</p><p>The economic advantage: deploy unlimited projects on a single server with no per-site fees. Managed hosting platforms charge per project; with Coolify, you pay only for the underlying server. It's free, open-source software with no feature restrictions or premium tiers.</p>`
		},
		{
			name: 'GitHub Actions',
			shortDescription: 'CI/CD platform for automating workflows.',
			url: 'https://docs.github.com/en/actions',
			icon: github,
			description: `<p>GitHub Actions automates the steps between writing code and publishing it to a live website. When changes are ready, it automatically runs through a checklist—verifying nothing is broken, checking for common mistakes—before allowing the update to go live.</p><p>Think of it as a quality control checkpoint. Code gets tested in a clean environment before it can affect the real website, catching problems that might slip through manual review. If something fails the checks, deployment stops and you get notified.</p><p>The free tier is generous: 2,000 minutes of automation time per month, which comfortably covers most projects. No separate servers or infrastructure to manage—it runs entirely within GitHub.</p>`
		},
		{
			name: 'Cloudflare',
			shortDescription: 'CDN, DNS, and SSL services.',
			url: 'https://developers.cloudflare.com/fundamentals/',
			icon: cloudflare,
			description: `<p>Cloudflare acts as a protective gateway between your website and the internet. All visitor traffic passes through their global network first, which provides two major benefits: security and speed.</p><p>On the security side, Cloudflare absorbs attacks so they never reach your server. It handles the security certificates that enable the padlock icon in browsers. Your actual server location stays hidden from potential attackers.</p><p>On the speed side, Cloudflare stores copies of your site's images, scripts, and files in data centers around the world. Visitors load content from whichever location is closest to them, which makes pages feel snappier regardless of where your server physically sits.</p><p>The free tier includes all of this with no bandwidth limits—a significant cost savings over comparable enterprise services.</p>`
		},
		{
			name: 'Bunny CDN',
			shortDescription: 'Content delivery network for static assets.',
			url: 'https://bunny.net/cdn/',
			icon: bunny,
			description: `<p>Bunny CDN speeds up file delivery by distributing content across servers worldwide. When your site includes large images, videos, or downloadable files, Bunny serves them from whichever location is closest to each visitor—reducing load times significantly.</p><p>The pricing model is pay-as-you-go with a $1 per month minimum. For sites that don't have massive traffic, this can be cheaper than alternatives that charge flat rates regardless of usage. You pay for what you actually use.</p><p>Bunny is particularly strong for video hosting and large file delivery, with built-in tools for streaming video content. For projects with significant media assets, it's often the more economical choice compared to general-purpose CDNs.</p>`
		},
		{
			name: 'Docker Compose',
			shortDescription: 'Tool for defining and running multi-container Docker applications.',
			url: 'https://docs.docker.com/compose/',
			icon: docker,
			description: `<p>Docker Compose is a configuration file that describes everything a website needs to run—the application itself, its database, any background services. Instead of manually setting up each piece, everything is defined once and can be started together with a single command.</p><p>The real value is consistency. The exact same configuration runs on a developer's laptop during building and on the live server in production. This eliminates the common headache of something working in one place but mysteriously breaking in another.</p><p>It also serves as living documentation. Anyone looking at the file can see exactly what components a project requires and how they connect—useful when revisiting a project months later or handing it off to someone else.</p>`
		}
	];

	// Custom Application Stack Extension - Additional Backend Dependencies
	export const backendCustom = [
		{
			name: 'Drizzle',
			shortDescription: 'A lightweight and performant TypeScript ORM.',
			url: 'https://orm.drizzle.team/',
			icon: drizzle,
			description: `<p>Drizzle connects the website's code to its database. When a site needs to save, retrieve, or update information—user records, form submissions, content—Drizzle handles the communication between the application and where that data lives.</p><p>The advantage over alternatives is that Drizzle stays close to how databases actually work rather than hiding everything behind abstractions. For developers who understand databases, this means fewer surprises and more control. It's also lightweight and fast, adding minimal overhead to the application.</p><p>Drizzle includes tools for managing database structure over time. As a project evolves and needs new fields or tables, changes are tracked and applied reliably across development and production environments.</p>`
		},
		{
			name: 'Effect',
			shortDescription: 'A powerful TypeScript library for building robust applications.',
			url: 'https://effect.website/docs/getting-started/introduction/',
			icon: effect,
			description: `<p>Effect is a toolkit for handling complex operations reliably. When a website needs to do multiple things that depend on each other—fetch data from an external service, validate it, save it to a database, then send a confirmation email—Effect provides structure for managing that complexity without things silently breaking.</p><p>The core benefit is explicit error handling. Instead of errors hiding until they crash something in production, Effect forces them to be addressed upfront. This leads to more predictable behavior and fewer surprises when real users interact with a site.</p><p>It's not needed for simple projects, but for sites with significant backend logic—payment processing, third-party integrations, multi-step workflows—Effect makes the code more maintainable and less prone to subtle bugs.</p>`
		},
		{
			name: 'better-auth',
			shortDescription: 'A full-featured authentication library for modern applications.',
			url: 'https://www.better-auth.com/',
			icon: betterAuth,
			description: `<p>better-auth handles user accounts and login for websites. When a site needs people to sign up, log in, reset passwords, or sign in with their Google or Apple account, better-auth provides all of that functionality ready to use.</p><p>Security features like two-factor authentication and session management are built in, so accounts stay protected without custom security code. For projects that need it, there's also support for team accounts with different permission levels.</p><p>The key distinction from services like Auth0 or Clerk: all user data stays in your own database rather than being stored on someone else's servers. No monthly fees per user, no external service dependency, and complete ownership of account information.</p>`
		}
	];

	export const design = [
		{
			name: 'Illustrator',
			shortDescription: 'Vector graphics editor for logos, icons, and illustrations.',
			url: '',
			icon: illustrator,
			description: `<p>Adobe Illustrator is a professional design tool for creating graphics that scale to any size without losing quality. Logos, icons, and illustrations created in Illustrator look equally sharp on a business card and a billboard—or on a website, from tiny favicons to full-screen hero images.</p><p>This scalability matters for web design because the same graphic needs to look crisp across phones, tablets, and desktop monitors at varying resolutions. Illustrator produces files in formats that browsers handle natively, keeping graphics sharp while loading quickly.</p><p>Illustrator is where brand assets like logos and custom icons get created before being integrated into a website.</p>`
		},
		{
			name: 'Photoshop',
			shortDescription: 'Raster graphics editor for photo editing and compositing.',
			url: '',
			icon: photoshop,
			description: `<p>Adobe Photoshop is the industry-standard tool for editing photographs and pixel-based images. Retouching product photos, adjusting colors, removing backgrounds, combining multiple images into a composite—anything involving actual photographs typically happens in Photoshop.</p><p>For web projects, Photoshop is where raw photography gets polished before it goes on the site. A product shot might need color correction, a headshot might need minor retouching, a hero image might need elements combined from multiple sources. These edits happen in Photoshop; optimization for web delivery is handled automatically during the build process.</p><p>Photoshop works alongside Illustrator: Illustrator handles graphics that need to scale (logos, icons), while Photoshop handles photographs and complex imagery.</p>`
		},
		{
			name: 'Blender',
			shortDescription: 'Open-source 3D modeling and animation software.',
			url: 'https://docs.blender.org/manual/en/latest/',
			icon: blender,
			description: `<p>Blender is a free, open-source application for creating 3D models, animations, and rendered imagery. It's the same tool used by professional studios for film and game production, yet costs nothing—a remarkable combination that makes 3D accessible to smaller projects.</p><p>For web projects, Blender creates the 3D assets that Three.js displays in browsers. Product models, animated logos, architectural visualizations, character animations—these are built in Blender, then exported in a web-friendly format that loads efficiently on websites.</p><p>The learning curve is steep, but for projects that call for custom 3D content, Blender is the go-to tool without the licensing costs of commercial alternatives.</p>`
		},
		{
			name: 'Figma',
			shortDescription: 'Collaborative interface design and prototyping tool.',
			url: '',
			icon: figma,
			description: `<p>Figma is a design tool for creating website layouts and interfaces before any code gets written. You can see exactly what pages will look like, click through interactive previews, and finalize the design before development begins.</p><p>The collaborative aspect sets Figma apart—multiple people can view and edit designs simultaneously, and everything lives in the cloud. Feedback can be left as comments directly on mockups, making it specific and actionable rather than vague.</p><p>For development, Figma bridges the gap between design and code. Designs can be inspected to extract exact colors, spacing, and dimensions, and images and icons export directly. This reduces the guesswork that typically slows down translating a design into a working website.</p>`
		}
	];

	export const ai = [
		{
			name: 'Claude',
			shortDescription: 'An AI assistant for reasoning, writing, and code.',
			url: 'https://docs.anthropic.com/',
			icon: claude,
			description: `<p>Claude is an AI assistant built by Anthropic, capable of understanding context, answering questions, generating content, and working through complex problems. It's the AI behind this conversation.</p><p>For web development, Claude accelerates the work itself—helping write code, debug problems, draft documentation, and think through architectural decisions. It's like having a knowledgeable colleague available around the clock.</p><p>Claude can also power features within websites. An intelligent FAQ that understands questions asked in natural language, a content tool that helps draft descriptions, a support assistant that handles common inquiries. The same AI capabilities available in this chat can be integrated into custom applications.</p>`
		},
		{
			name: 'Groq',
			shortDescription: 'High-speed AI inference for real-time applications.',
			url: 'https://console.groq.com/docs/overview',
			icon: groq,
			description: `<p>Groq is an AI platform built for speed. While most AI services run on general-purpose hardware, Groq uses specialized chips designed specifically for AI, resulting in dramatically faster response times—often feeling nearly instant.</p><p>This speed matters for features where responsiveness affects user experience. A chatbot that replies in a fraction of a second feels conversational; one that takes several seconds feels sluggish. For real-time interactions, that difference shapes how people perceive the product.</p><p>Groq runs open-source AI models at lower costs than premium services like Claude. The tradeoff is capability—Groq handles straightforward tasks well, while Claude excels at complex reasoning. Using both strategically keeps costs down while delivering the right tool for each job.</p>`
		},
		{
			name: 'Cursor',
			shortDescription: 'AI-powered code editor for faster development.',
			url: 'https://cursor.com/docs',
			icon: cursor,
			description: `<p>Cursor is a code editor with AI built into every part of the experience. It suggests code as you type, can write entire functions from plain English descriptions, and handles tedious refactoring tasks that would otherwise take hours.</p><p>The AI understands the full context of a project—not just the file you're working in, but how everything connects. This means suggestions are relevant and consistent with existing code patterns rather than generic boilerplate.</p><p>Cursor's productivity gains are significant. Tasks that previously required careful manual work can be delegated to the AI, freeing up time for the problems that actually need human judgment.</p>`
		},
		{
			name: 'Mastra',
			shortDescription: 'A framework for building AI agents and workflows.',
			url: 'https://mastra.ai/docs',
			icon: mastra,
			description: `<p>Mastra is a toolkit for building AI features that go beyond simple chat. When a website needs an AI assistant that can actually do things—check availability, submit requests, guide users through multi-step processes—Mastra provides the structure to make that work reliably.</p><p>The framework handles the complexity of AI workflows: maintaining conversation context, coordinating multiple steps, and pausing for human approval when needed. A booking assistant that checks calendars, proposes times, and waits for confirmation before finalizing—that kind of coordinated behavior is what Mastra enables.</p><p>For projects like customer support bots, FAQ assistants, or lead qualification tools, Mastra bridges the gap between a basic chatbot demo and something polished enough for real use.</p>`
		}
	];
</script>
