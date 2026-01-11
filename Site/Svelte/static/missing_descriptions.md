# Design and AI Tools Stack Documentation

Isaac's web development business leverages a carefully selected set of design and AI tools that complement his SvelteKit and TypeScript workflow. These tools enable professional asset creation, efficient design-to-code handoff, and AI-powered features for small business clients in the Sioux Falls area.

---

## Design Tools

### Adobe Illustrator

Adobe Illustrator is a professional vector graphics editor that creates scalable artwork using mathematical formulas rather than pixels. Core capabilities include precision drawing with pen and shape tools, logo and brand identity design, icon set creation, typography, and pattern development. The tool excels at producing assets that scale infinitely—from **16px favicons to full-width hero graphics**—without quality loss, making it essential for responsive web design.

Illustrator serves as the primary tool for creating client logos, icon sets, and vector illustrations. Its SVG export produces clean, optimized code that works natively with SvelteKit's asset handling. The "Export As" workflow generates efficient SVG files with options for CSS-manipulable presentation attributes, minification, and responsive sizing. Vector assets exported from Illustrator can be directly embedded in HTML, imported as Svelte components, or styled with CSS animations—ideal for delivering crisp, performant graphics to small business clients.

### Adobe Photoshop

Adobe Photoshop is a raster graphics editor for creating and manipulating pixel-based images, handling photo retouching, color correction, compositing, and web graphics optimization. The tool supports layers with masks, alpha compositing, and multiple color models. Key web features include image resizing with resampling, resolution management for web display, and comprehensive export options for **JPEG, PNG, WebP, and GIF formats** with fine-tuned compression controls.

Photoshop handles all raster asset needs—optimizing client product photos, editing hero images, creating transparent PNGs for overlays, and preparing web-optimized images for fast page loads. The "Export As" dialog provides real-time compression previews for balancing visual quality against file size, critical for small business sites where performance affects user experience and SEO. Photoshop complements Illustrator by handling photographs and complex graphics while Illustrator manages all vector-based brand assets.

### Blender

Blender is a free, open-source 3D creation suite supporting the entire 3D pipeline: modeling, rigging, animation, simulation, rendering, and compositing. The software includes two render engines—Cycles for photorealistic output and EEVEE for real-time PBR rendering. With its **Principled BSDF material system** and comprehensive animation tools including skeletal animation, shape keys, and NLA tracks, Blender enables creation of production-quality 3D assets.

For web development, Blender's glTF 2.0 exporter (developed with Khronos Group) produces GLB files optimized for browser delivery. These compact binary files contain meshes, PBR materials, and animations in a single package that loads efficiently in Three.js via GLTFLoader. The workflow integrates with SvelteKit by hosting GLB files as static assets and initializing Three.js scenes within component lifecycle hooks.

### Figma

Figma is a cloud-based collaborative interface design tool combining UI/UX design, prototyping, and developer handoff in one platform. Core capabilities include real-time multiplayer collaboration, interactive prototyping with triggers and transitions, and a robust component system with variants, styles, and variables for design systems. The **Dev Mode interface** provides developers with layer inspection, auto-generated CSS snippets, asset exports, and integration with VS Code via the Figma extension.

Figma streamlines the design-to-development workflow by eliminating the traditional handoff friction between design and code. For small business projects, he can design UI mockups, create interactive prototypes for client approval, then extract CSS properties and export assets directly into his SvelteKit projects. The component system enables building reusable design patterns that mirror the component architecture of Svelte, ensuring consistency between designs and implementation. Dev Mode's CSS output in customizable units (px, rem, %) translates directly to Tailwind or vanilla CSS in his codebase.

### Rive

Rive is an interactive design tool paired with a lightweight, cross-platform runtime for creating real-time interactive animations. The editor combines vector graphics creation with timeline-based animation and a **visual state machine builder** that connects animations through conditional transitions, inputs (numbers, booleans, triggers), and interactive gestures. Unlike video exports, Rive animations run as compact `.riv` files that respond to user interaction at runtime.

Rive fits naturally into the SvelteKit stack through its TypeScript-typed JavaScript runtime (`@rive-app/canvas`). Animations can respond to hover states, clicks, scroll position, and data changes—enabling interactive hero sections, animated icons, loading states, and micro-interactions that elevate small business websites beyond static designs. The runtime integrates with Svelte using `onMount`/`onDestroy` lifecycle hooks for initialization and cleanup. At approximately 150KB gzipped, Rive adds sophisticated interactivity without significant bundle impact, and the state machine approach keeps animation logic within the design tool rather than scattered through JavaScript code.

---

## AI Tools

### Claude (Anthropic)

Claude is Anthropic's family of large language models designed to be helpful, honest, and harmless. The model family includes Opus for complex reasoning and autonomous agents, Sonnet for balanced performance (achieving **72.7% on SWE-bench** for coding tasks), and Haiku for real-time applications. Key capabilities include extended thinking for deep reasoning, vision for image and PDF processing, tool use, structured JSON outputs, and context windows up to 1 million tokens. The official TypeScript SDK provides straightforward API integration.

Claude serves dual purposes: accelerating development and powering client features. During development, Claude assists with code generation, debugging, test writing, and documentation across his SvelteKit/TypeScript codebase. For client projects, the API enables building conversational interfaces, content generation tools, and intelligent assistants. The Vercel AI SDK integration works seamlessly with SvelteKit's server endpoints for streaming chat responses. Claude's strength lies in sophisticated reasoning and high-quality outputs for complex tasks—ideal when building AI features that need to understand context and generate nuanced responses for local business customers.

### Groq

Groq is an AI inference platform built on proprietary LPU (Language Processing Unit) hardware designed specifically for language model inference. Unlike GPU-based providers, Groq's architecture achieves **10x faster inference speeds** through a streaming processor design, SRAM-centric memory architecture, and deterministic compiler scheduling. The platform runs open models including Llama 3.3 70B, Whisper for speech-to-text, and Qwen, with an OpenAI-compatible API for easy integration.

Groq complements the stack by providing cost-effective, ultra-fast inference for speed-critical applications. At $0.05-$0.79 per million tokens and response speeds of 280-1000+ tokens per second, Groq excels at real-time chat interfaces where sub-second latency directly impacts user experience. For small business clients, this means responsive AI chatbots that feel instantaneous rather than sluggish. The OpenAI-compatible API means existing code patterns work without modification, and the Vercel AI SDK's `@ai-sdk/groq` provider integrates cleanly with SvelteKit. Ideally, simpler, high-volume requests are routed through Groq while Claude is reserved for complex reasoning tasks—optimizing both cost and user experience.

### Cursor

Cursor is an AI-powered code editor built as a fork of Visual Studio Code with deep AI integration throughout the development experience. Core features include **Tab autocomplete** with a custom-trained model that predicts multi-line edits, Cmd+K inline editing for natural language code generation, and Agent Mode that autonomously searches codebases, executes terminal commands, and handles multi-step tasks. The editor connects to frontier models from OpenAI, Anthropic, and Google, while maintaining full compatibility with VS Code extensions, themes, and keybindings.

Cursor accelerates SvelteKit and TypeScript development without sacrificing the familiar VS Code environment. The codebase indexing provides context-aware completions that understand project structure, and Agent Mode can handle refactoring tasks across multiple files. All existing Svelte extensions work immediately, eliminating migration friction. Features like checkpoints for easy rollback, Debug Mode for runtime instrumentation, and BugBot for AI-powered code reviews add professional tooling that benefits both rapid prototyping and production code. For a solo developer building sites for small businesses, Cursor's productivity gains translate directly to serving more clients or delivering higher-quality work in the same timeframe.

### Mastra

Mastra is an open-source TypeScript framework for building AI-powered applications and agents, created by the team behind Gatsby.js. The framework provides agents (autonomous AI entities that use tools to complete tasks), a graph-based workflow engine for multi-step processes, memory and RAG support, human-in-the-loop patterns, and production features including observability, evaluation, and authentication. All components are defined in **native TypeScript with Zod schema validation** and connect to 40+ LLM providers through a unified interface.

Mastra is particularly relevant as it offers **official SvelteKit integration** with documented patterns for Actions and Server Endpoints. When building AI-powered features for clients—customer support chatbots, FAQ assistants, lead qualification bots, or booking systems with approval workflows—Mastra provides the architecture to move from prototype to production. The framework handles conversation memory, tool orchestration, and streaming responses while integrating cleanly with SvelteKit's server-side patterns. For self-hosted infrastructure, Mastra can run as a standalone server or bundle with the application, and the local playground at `localhost:4111` enables rapid agent development and testing before client deployment.