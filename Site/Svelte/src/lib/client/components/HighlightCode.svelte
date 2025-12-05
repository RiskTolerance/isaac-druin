<script lang="ts">
	import hljs from 'highlight.js/lib/core';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';
	import css from 'highlight.js/lib/languages/css';
	import xml from 'highlight.js/lib/languages/xml';

	// Register languages (idempotent - safe to call multiple times)
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('html', xml);

	let {
		code,
		language = 'javascript',
		class: className = ''
	}: { code: string; language?: string; class?: string } = $props();

	// Trim leading/trailing whitespace but preserve internal formatting
	const trimmedCode = code.trim();
	const highlightedCode = hljs.highlight(trimmedCode, { language: language }).value;
</script>

<pre
	class="hljs-theme-light dark:hljs-theme-dark {className} overflow-x-auto rounded-none p-8 font-mono font-semibold"><code
		class="language-{language} ">{@html highlightedCode}</code
	></pre>
