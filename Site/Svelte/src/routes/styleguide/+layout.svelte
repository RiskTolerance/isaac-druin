<script lang="ts">
	import { page } from '$app/state';

	let { children } = $props();

	const sections = [
		{ name: 'Typography', path: '/styleguide/typography' },
		{ name: 'Colors', path: '/styleguide/colors' },
		{ name: 'Components', path: '/styleguide/components' },
		{ name: 'Forms', path: '/styleguide/forms' },
		{ name: 'Code', path: '/styleguide/code' },
		{ name: 'Layouts', path: '/styleguide/layouts' }
	];
</script>

<div class="container-layout">
	<nav class="border-brandGray-300 dark:border-brandGreen-700 mb-8 border-b pb-4">
		<div class="flex flex-wrap gap-2">
			<a
				href="/styleguide"
				class="rounded px-3 py-1 text-sm transition-colors {page.url.pathname === '/styleguide'
					? 'bg-brandGray-200 dark:bg-brandGreen-800 text-brandGray-900 dark:text-brandGreen-100'
					: 'hover:bg-brandGray-100 dark:hover:bg-brandGreen-900'}"
			>
				Overview
			</a>
			{#each sections as section}
				<a
					href={section.path}
					class="rounded px-3 py-1 text-sm transition-colors {page.url.pathname === section.path
						? 'bg-brandGray-200 dark:bg-brandGreen-800 text-brandGray-900 dark:text-brandGreen-100'
						: 'hover:bg-brandGray-100 dark:hover:bg-brandGreen-900'}"
				>
					{section.name}
				</a>
			{/each}
		</div>
	</nav>

	{@render children()}
</div>
