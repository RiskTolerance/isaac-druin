<script lang="ts">
	import type { PageData } from './$types';
	import { Container, Grid } from '$layouts';
	import { ProjectCard } from '$components';

	let { data }: { data: PageData } = $props();
</script>

<Container>
	<h1 class="mb-8 text-4xl font-bold">Projects</h1>
	<Grid columns={2}>
		{#each data.projects as project}
			<ProjectCard slug={project.slug} metadata={project.metadata} />
		{/each}
	</Grid>
</Container>
