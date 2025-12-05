<script lang="ts">
	const sections = [
		{ name: 'Typography', path: '/styleguide/typography' },
		{ name: 'Colors', path: '/styleguide/colors' },
		{ name: 'Components', path: '/styleguide/components' },
		{ name: 'Forms', path: '/styleguide/forms' },
		{ name: 'Code', path: '/styleguide/code' },
		{ name: 'Layouts', path: '/styleguide/layouts' }
	];
</script>

<div class="container-layout prose-layout">
	<h1>Style Guide</h1>
	<p class="lead">A comprehensive guide to all design elements and components in the system.</p>

	<nav class="grid-layout mt-8 gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each sections as section}
			<a
				href={section.path}
				class="card-layout cursor-pointer transition-transform hover:scale-105"
			>
				<h2 class="mb-2 text-xl">{section.name}</h2>
				<p class="text-sm opacity-75">View all {section.name.toLowerCase()} examples</p>
			</a>
		{/each}
	</nav>
</div>
