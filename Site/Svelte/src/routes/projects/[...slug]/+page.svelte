<script lang="ts">
	import type { PageData } from './$types';
	import type { Component } from 'svelte';

	let { data }: { data: PageData } = $props();
	const ProjectComponent = data.component as Component;
</script>

<ProjectComponent />
