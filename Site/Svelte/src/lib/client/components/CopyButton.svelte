<script lang="ts">
	import { clickToCopy } from '$lib/utility/clickToCopy';

	let {
		selector,
		value,
		class: className = '',
		children
	}: {
		selector: string;
		value?: string;
		class?: string;
		children: any;
	} = $props();

	// Custom action for copying a specific value
	function copyValue(node: HTMLElement, text: string) {
		async function handleCopy() {
			try {
				await navigator.clipboard.writeText(text);
				node.dispatchEvent(
					new CustomEvent('copysuccess', {
						bubbles: true
					})
				);
			} catch (error: unknown) {
				node.dispatchEvent(
					new CustomEvent('copyerror', {
						bubbles: true,
						detail: error
					})
				);
			}
		}

		node.addEventListener('click', handleCopy);

		return {
			destroy() {
				node.removeEventListener('click', handleCopy);
			}
		};
	}
</script>

{#if value}
	<button use:copyValue={value} class="{selector} {className}">
		{@render children()}
	</button>
{:else}
	<button use:clickToCopy={`.${selector}`} class="{selector} {className}">
		{@render children()}
	</button>
{/if}
