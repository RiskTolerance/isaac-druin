<script lang="ts">
	import hljs from 'highlight.js/lib/core';
	import javascript from 'highlight.js/lib/languages/javascript';
	hljs.registerLanguage('javascript', javascript);

	let {
		code,
		language = 'javascript',
		class: className
	}: { code: string; language?: string; class: string } = $props();

	// Trim leading/trailing whitespace but preserve internal formatting
	const trimmedCode = code.trim();
	const highlightedCode = hljs.highlight(trimmedCode, { language: language }).value;
</script>

<pre class="{className} overflow-x-auto rounded-none p-8 font-mono font-semibold"><code
		class="language-{language} ">{@html highlightedCode}</code
	></pre>
