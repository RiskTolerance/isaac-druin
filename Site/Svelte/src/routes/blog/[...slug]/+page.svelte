<script lang="ts">
	import type { PageData } from './$types';
	import type { Component } from 'svelte';
	import { PostHeader } from '$components';

	let { data }: { data: PageData } = $props();
	const PostComponent = data.component as Component;
</script>

<PostHeader metadata={data.metadata} />

<PostComponent />
