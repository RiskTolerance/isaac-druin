<script lang="ts">
	import type { PageData } from './$types';
	import { BaseLayout, GridLayout } from '$layouts';
	import { ProjectCard } from '$components';

	let { data }: { data: PageData } = $props();
</script>

<BaseLayout>
	<h1 class="mb-8 text-4xl font-bold">Projects</h1>
	<GridLayout columns={2}>
		{#each data.projects as project}
			<ProjectCard slug={project.slug} metadata={project.metadata} />
		{/each}
	</GridLayout>
</BaseLayout>
