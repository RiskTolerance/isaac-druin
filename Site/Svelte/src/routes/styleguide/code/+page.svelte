<script lang="ts">
	import HighlightCode from '$client/components/HighlightCode.svelte';

	const codeExamples = {
		javascript: `function greet(name) {
		return \`Hello, \${name}!\`;
}

const message = greet('World');
console.log(message);`,
		typescript: `interface User {
	id: number;
	name: string;
	email: string;
}

const user: User = {
	id: 1,
	name: 'John Doe',
	email: 'john@example.com'
};`,
		css: `.container {
	display: flex;
	gap: 1rem;
	padding: 2rem;
	background: var(--bg-color);
}

@media (min-width: 768px) {
	.container {
		gap: 2rem;
	}
}`,
		html: `<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Example</title>
	</head>
	<body>
		<h1>Hello World</h1>
	</body>
</html>`
	};
</script>

<div class="prose-layout">
	<h1>Code</h1>
	<p class="lead">Code block styling.</p>

	<section class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
		<div class="space-y-4">
			<h2>JavaScript</h2>
			<HighlightCode code={codeExamples.javascript} language="javascript" />
		</div>

		<div class="space-y-4">
			<h2>TypeScript</h2>
			<HighlightCode code={codeExamples.typescript} language="typescript" />
		</div>

		<div class="space-y-4">
			<h2>CSS</h2>
			<HighlightCode code={codeExamples.css} language="css" />
		</div>

		<div class="space-y-4">
			<h2>HTML</h2>
			<HighlightCode code={codeExamples.html} language="html" />
		</div>
	</section>
</div>
