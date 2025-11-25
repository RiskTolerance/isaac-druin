<!-- spell-checker: disable -->
<script lang="ts">
	import { Prose, Marked, HighlightCode } from '$components';

	import { gsap } from 'gsap';
	import { Bounce } from 'gsap';

	import { onMount } from 'svelte';

	let ballContainer: HTMLElement;
	let ball: HTMLElement;

	let ballBounceTl: gsap.core.Timeline | null = $state(null);

	const ballBounce = () => {
		// Calculate the distance from bottom to top
		// Since ball is positioned at bottom-0, we need to move it up
		const containerHeight = ballContainer.clientHeight - 20;
		const ballHeight = ball.clientHeight;
		const moveUpDistance = -(containerHeight - ballHeight);

		// Set initial position: ball starts at bottom (y: 0 means no transform from original position)
		gsap.set(ball, { y: 0 });

		const tl = gsap.timeline({ repeat: -1 });
		// Move ball up to top (negative y moves up)
		tl.to(ball, { y: moveUpDistance, duration: 0.5 }, '0.25');
		// Bounce back down to bottom (y: 0 returns to original bottom position)
		tl.to(ball, {
			y: 0,
			ease: Bounce.easeOut,
			duration: 1.25
		});
		// Move ball horizontally (and optionally back up, but let's keep it simple first)
		tl.to(
			ball,
			{
				x: `+=${ballContainer.clientWidth - ball.clientWidth}`,
				duration: 2.5
			},
			'-=1.75'
		);
		tl.to(ball, { y: moveUpDistance, duration: 0.5 }, '+=0.25');
		tl.to(ball, {
			y: 0,
			ease: Bounce.easeOut,
			duration: 1.25
		});
		tl.to(
			ball,
			{
				x: 0,
				duration: 2.5
			},
			'-=1.75'
		);
		return tl;
	};

	const ballBounceSetup = () => {
		if (ballBounceTl) {
			ballBounceTl.kill();
			ballBounceTl = null;
		}
		// Reset transforms before creating new timeline
		// This ensures the ball starts from the correct position (bottom-left)
		gsap.set(ball, { x: 0, y: 0 });
		ballBounceTl = ballBounce();
		ballBounceTl.play();
	};

	onMount(() => {
		ballBounceSetup();
	});
</script>

<svelte:window onresize={ballBounceSetup} />

<Prose
	class="-mt[12.5vh] dark:bg-brandGreen-800 relative z-10 mx-auto max-w-3xl bg-neutral-50 p-8 md:-mt-[25vh]"
>
	<Marked
		md={`
If you take a look my last post, [The Stack](/blog/2025/November/21/the-stack), you will notice that something is missing. A CMS (Content Management System). The CMS might as well be the butter to the web framework bread - it creates an environment which eases the creation of content for a site.

When I started learning web development, I quite honestly couldn't fathom why anyone would want a CMS. I could only see downsides. A few examples (which are still valid, in my opinion):

- Setting up a CMS requires resources, adds complexity, and usually costs money. Why would I (and by extension, why would anyone) spend the time to set up and maintain another system when I could just create a new HTML file and write my content there (for free!)?
- CMS content types (with some exceptions) are built through the CMS's UI. This usually feels clunky.
- A CMS introduces constraints. One-off content becomes problematic because your frontend needs to fit the shape of your CMS data. What if I want a bouncing ball in the middle of my post? Sure, you could add a bouncing ball content type, but one-off content becomes visual noise in the CMS.
    `}
	/>
</Prose>
<div
	bind:this={ballContainer}
	class="bg-brandGray-900 relative mx-auto h-[12vh] w-full max-w-3xl px-8 md:h-[20vh]"
>
	<div
		bind:this={ball}
		id="ball"
		class="bg-brandGreen-300 absolute bottom-0 left-0 aspect-square h-12 w-12 rounded-full md:h-20 md:w-20"
	></div>
</div>
<Prose class="dark:bg-brandGreen-900 mx-auto max-w-3xl p-8">
	<Marked
		md={`
But, when I started learning web development I was thinking a lot more about myself and what I wanted as oppposed to the end user and what they needed. Sure, this site doesn't have a CMS, but it's running with some serious self-imposed [constraints](/projects/2025/November/15/isaac-druin-dot-com) and the only content editor is me.

So, I've been on a quest to find the CMS that works with the aforementioned downsides. The reason I didn't include a CMS in my stack is simply because I haven't settled on one yet, though I think I'm getting close. Here is my "perfect CMS" checklist:

- It won't introduce a new programming language into the stack. If the frontend is TypeScript, I want the CMS to be TypeScript as well. 
- It offers a free self-hosted option or, at the very least, a free tier. 
- Scaling up shouldn't cost a disporportionate fortune (I call it the 'success tax' - "Oh, you have X amount of traffic, now? Time to pay up!").
- The content schema can be written in code vs built in a UI
- All the bells and whistles. (visual editor/previews, flexible schemas, content versioning, search integration, rest API, file storage, image handling, auth, etc.)

OK, I'll admit, that's a tall order. But like I said, there are a _lot_ of options.

So far, the closest I've come is [SanityCMS](https://www.sanity.io/). There is no self-hosted option (and thus, no additional programming language), but the base tier is free. It handles images and all that jazz. But the crown jewel is the content modeling. Here's an example of a basic blog post:

		`}
	/>

	<HighlightCode
		class="max-w-3xl"
		code={`const post = {
	title: 'Post',
	name: 'post',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
		},
		{
			name: 'publishedAt',
			title: 'Published at',
			type: 'datetime',
		},
		{
			name: 'body',
			title: 'Body',
			type: 'array',
			of: [
				{
					type: 'block',
				},
			],
		},
	],
	preview: {
		select: {
			title: 'title',
		},
	},
}

export default post`}
	></HighlightCode>
</Prose>

<div>Sanity declaration here</div>
