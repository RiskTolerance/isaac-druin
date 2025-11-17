<script lang="ts">
	let {
		children,
		class: className,
		columns,
		gap = 'gap-4'
	}: {
		children: any;
		class?: string;
		columns: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
		gap?: string;
	} = $props();
</script>

<div
	style="display: grid; grid-template-columns: repeat({columns}, minmax(0, 1fr));"
	id="grid"
	class="{gap} {className}"
>
	{@render children()}
</div>
