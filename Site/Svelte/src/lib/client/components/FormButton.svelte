<script lang="ts">
	type Props = {
		text?: string;
		class?: string;
	};

	let { text = 'Submit', class: className = '' }: Props = $props();
</script>

<button class="rounded-md bg-white px-4 py-2 {className}" type="submit">
	{text}
</button>

