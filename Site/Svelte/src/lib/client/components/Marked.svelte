<script lang="ts">
	import { marked } from 'marked';

	let { md, class: className }: { md: string; class?: string } = $props();

	let parsedMarkdown = marked.parse(md);
</script>

{@html parsedMarkdown}
