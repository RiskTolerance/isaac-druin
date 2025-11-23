<script lang="ts">
	let { children } = $props();
</script>

<span
	class="text-brandYellow-200 border-brandGray-300 bg-brandGray-800 rounded border px-2 py-0.5 text-xs"
	>{@render children()}</span
>
