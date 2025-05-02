<script lang="ts">
	import Project from '../projects/Project.svelte';
	const projects = [
		{
			title: 'Project 1',
			description: 'Description of project 1',
			image: 'https://picsum.photos/200/300',
			link: '/'
		},
		{
			title: 'Project 2',
			description: 'Description of project 2',
			image: 'https://picsum.photos/200/300',
			link: '/'
		},
		{
			title: 'Project 3',
			description: 'Description of project 3',
			image: 'https://picsum.photos/200/300',
			link: '/'
		}
	];
</script>

<div class="container mx-auto flex flex-col items-center gap-4">
	<div class="flex w-full justify-start">
		<p>Projects</p>
	</div>
	{#each projects as project}
		<Project {...project}></Project>
	{/each}
</div>
