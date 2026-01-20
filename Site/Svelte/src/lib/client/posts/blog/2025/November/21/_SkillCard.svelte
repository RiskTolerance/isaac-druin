<script lang="ts">
	let {
		name,
		shortDescription,
		description,
		icon,
		onClick
	}: {
		name: string;
		shortDescription: string;
		description: string;
		icon: string | null;
		onClick: (e: MouseEvent) => void;
	} = $props();
</script>

<button
	onclick={onClick}
	class="bg-brandGreen-600 hover:bg-brandGreen-700 flex cursor-pointer flex-col justify-center rounded-3xl p-2 transition-colors duration-150"
>
	<div class="flex w-full cursor-pointer flex-row gap-4">
		{#if icon}
			<img class="skill-icon m-0! h-20 w-20 p-0" src={icon} alt={name} />
		{:else}
			<div
				class="skill-icon m-0! flex h-20 w-20 items-center justify-center rounded dark:bg-gray-700"
			>
				<span class="text-2xl font-bold text-gray-500 dark:text-gray-400">{name.charAt(0)}</span>
			</div>
		{/if}
		<div class="prose max-w-prose text-start">
			<h4 class="skill-name">
				{name}
			</h4>
			<p class="skill-short-description text-sm">{shortDescription}</p>
			<div class="skill-long-description hidden">
				{@html description}
			</div>
		</div>
	</div>
</button>
