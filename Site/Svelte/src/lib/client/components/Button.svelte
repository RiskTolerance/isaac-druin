<script lang="ts">
	import { buttonSound } from '$components/audioHandler.svelte';
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
	<a href={src} class="bg-brandGray-50 cursor-pointer px-4 py-2 {className}">
		{text}
	</a>
{:else if type === 'function'}
	<button
		class="bg-brandGray-50 cursor-pointer px-4 py-2 {className}"
		onclick={() => {
			buttonSound();
			callback;
		}}
	>
		{text}
	</button>
{:else}
	<button
		onclick={buttonSound}
		class="bg-brandGray-50 cursor-pointer px-4 py-2 {className}"
		type="submit"
	>
		{text}
	</button>
{/if}
