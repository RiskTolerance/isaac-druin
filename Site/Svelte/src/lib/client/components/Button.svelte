<script lang="ts">
	type Props = {
		text?: string;
		class?: string;
		src?: string;
		type: 'submit' | 'function' | 'link';
		callback?: () => void;
	};

	let { text = 'Click Me!', class: className, src, type, callback }: Props = $props();
</script>

{#if type === 'link'}
	<a href={src} class="bg-white px-4 py-2 {className}">
		{text}
	</a>
{:else if type === 'function'}
	<button class="bg-white px-4 py-2 {className}" onclick={callback}>
		{text}
	</button>
{:else}
	<button class="bg-white px-4 py-2 {className}" type="submit">
		{text}
	</button>
{/if}
