<script lang="ts">
	import type { PageData } from './$types';
	import type { Component } from 'svelte';
	import { PostHeader } from '$components';

	let { data }: { data: PageData } = $props();
	const ProjectComponent = data.component as Component;
</script>

<PostHeader {...data.metadata} />

<ProjectComponent />
