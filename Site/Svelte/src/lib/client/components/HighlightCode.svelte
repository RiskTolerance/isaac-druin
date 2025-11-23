<script lang="ts">
	import hljs from 'highlight.js/lib/core';
	import javascript from 'highlight.js/lib/languages/javascript';
	hljs.registerLanguage('javascript', javascript);

	let { code, language = 'javascript' }: { code: string; language?: string } = $props();

	// Trim leading/trailing whitespace but preserve internal formatting
	const trimmedCode = code.trim();
	const highlightedCode = hljs.highlight(trimmedCode, { language: language }).value;
</script>

<pre class="overflow-x-auto bg-emerald-950! font-mono font-semibold">
	<code class="language-{language}">
		{@html highlightedCode}
	</code>
</pre>
