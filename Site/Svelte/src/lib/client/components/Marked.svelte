<script lang="ts">
	import { marked } from 'marked';

	marked.setOptions({
		gfm: true,
		breaks: true
	});

	const {
		md,
		inline = false
	}: {
		md: string;
		inline?: boolean;
	} = $props();

	const parsedMarkdown = inline ? marked.parseInline(md) : marked.parse(md);
</script>

{@html parsedMarkdown}
