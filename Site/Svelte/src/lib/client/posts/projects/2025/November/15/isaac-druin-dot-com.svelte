<script lang="ts">
	import { RichText } from '$components';
	import { Marked } from '$components';
	import Chart from './_Chart.svelte';

	const content = `
One of the first sites I tried to build was a personal website with a blog and projects. The site actually looked a lot like this one and obviously the structure is similar. But this site is special because I wanted to challenge myself through constraint and the knowledge that I've gained over the past five years.

Modern web development takes a lot for granted. We assume that:
- everyone that views our site has high speed internet
- the hardware running our site is essentially limitless
- we will be paying for various services, trading established implemention and ease of use for money

I wanted to remove those assumptions for this site. So I constrained myself with the following:
- I would optimize this site to every degree possible. Loosly inspired by sites like [mother fucking website](https://motherfuckingwebsite.com/) and [the best motherfucking website](https://thebestmotherfucking.website/) (no, those aren't porn sites), I wanted to build something that feels modern but is performant as possible.
- I would run the website locally, on the absolutely weakest hardware I could find that (I *hope*) will still perform under reasonable stress.
- I will not pay for anything outside of the site domain or use a service that could end up charging me at some scaling point.

So this is the setup.

### Frontend 

For the frontend I'm using [SvelteKit](https://svelte.dev/docs/kit). It precompresses the code, [optimizes the images](https://svelte.dev/docs/kit/images#sveltejs-enhanced-img), and handles a [whole laudary list](https://svelte.dev/docs/kit/performance) of additional optimizations. SvelteKit is a full-stack framework, meaning it handles the frontend *and* the backend, so we'll be talking about it again soon.

While there are CMS options that are technically free, there aren't any that:
- you can run locally with zero performance overhead
- you can run remotely without impending cost down the road

For the site content, I'm writing it all in augmented markdown files.

For fonts, I'm using Google Fonts with [subsetting](https://web.dev/learn/performance/optimize-web-fonts#subset_your_web_fonts). This speeds up the local build because I don't have to serve fonts, and speeds up the site because the characters pulled from Google are the exact characters that I need.

Image optimization is worth touching on in more detail. Since the website is built on a more powerful machine, I have the luxury of dropping big ol' images in and getting small, optimized images out after building. Images are the biggest contributor to page load speed and automating their optimization was a must.

### Backend

This is actually where it gets crazy. This site is running on a Rasberry Pi Zero 2w. The machine is the size of a stick of gum, is single core, and has a whopping 512MB of RAM. After intalling Pi OS 64bit Lite, there isn't a lot to work with. But we do have a lot of options. The problem is, given the amount of relivent, up-to-date information avalible, those options aren't clear-cut. So it's time to ✨experiment✨.

There are two avenues that we can take:

1. SvelteKit at runtime. Utilize a JavaScript runtime like Node/Bun/Deno with adapter-node. This implies:
  - (benefit) We will have a server environment to work with, so we could handle requests (e.g database writes).
  - (drawback) This will use more RAM/CPU than a file server architecture (or, that's my strong assumption)
2. SvelteKit for build. Use adapter-static to precompile the site down to static assets (HTML/CSS/JavaScript). This implies:
  - (benefit) We can use a simple web server to serve our static assets (still assuming this will be more performant).
  - (drawback) No server-side logic unless we run a separate API server and let it handle requests from the client.

For option 1, we have the following JavaScript runtime options:

- [Nodejs](https://nodejs.org/) - The OG, first released in 2009.
- [Deno](https://deno.com/) - A newcomer, first release in 2018.
- [Bun](https://bun.sh/) - The definitive new kid, first released in 2021.

This post is getting a bit long, so I'm going to break out the testing phase into another post.

And the winner is: (spoiler, click/tap to reveal): 

>! BUN!

For option 2, we can build the static assets and serve them with a web server. There are actually dozens of options but I don't have infintiate time. Based on my research, these are the top contenders for this use-case:

- [Nginx](https://nginx.org/) - Tried and true, first released in 2004.
- [Caddy](https://caddyserver.com/) - Modern and easy to configure
- [Lighttpd](https://www.lighttpd.net/) - Lightweight and fast

Additional testing post coming soon.

And the winner is:

>! NGINX!

### Deployment

### DNS 

This is where I'm just cheating. We're using Cloudflared to create a tunnel for our site.
`;
</script>

<RichText>
	<Marked md={content} />
	<Chart />
</RichText>
