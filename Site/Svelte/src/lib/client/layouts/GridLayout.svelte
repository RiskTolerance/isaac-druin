<script lang="ts">
	let {
		children,
		class: className,
		columns
	}: {
		children: any;
		class?: string;
		columns: 1 | 2 | 4 | 6 | 8 | 10 | 12;
	} = $props();

	const responsiveColumnClasses = {
		1: 'grid-cols-1',
		2: 'grid-cols-1 lg:grid-cols-2',
		4: 'grid-cols-1 lg:grid-cols-4',
		6: 'grid-cols-1 sm:grid-cols-4 lg:grid-cols-6',
		8: 'grid-cols-1 sm:grid-cols-4 lg:grid-cols-8',
		10: 'grid-cols-2 sm:grid-cols-4 lg:grid-cols-10',
		12: 'grid-cols-2 sm:grid-cols-6 lg:grid-cols-12'
	};
</script>

<div id="grid" class="layout-grid {className} {responsiveColumnClasses[columns]}">
	{@render children()}
</div>
