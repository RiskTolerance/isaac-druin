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
	<p class="lead">Syntax highlighting and code block styling.</p>

	<section class="mt-8 space-y-8">
		<div>
			<h2>JavaScript</h2>
			<HighlightCode code={codeExamples.javascript} language="javascript" />
		</div>

		<div>
			<h2>TypeScript</h2>
			<HighlightCode code={codeExamples.typescript} language="typescript" />
		</div>

		<div>
			<h2>CSS</h2>
			<HighlightCode code={codeExamples.css} language="css" />
		</div>

		<div>
			<h2>HTML</h2>
			<HighlightCode code={codeExamples.html} language="html" />
		</div>

		<div>
			<h2>Inline Code</h2>
			<p>
				You can use <code>inline code</code> within paragraphs. It uses the <code>font-code</code> font
				family.
			</p>
		</div>

		<div>
			<h2>Code Block Styling</h2>
			<div class="space-y-4">
				<div>
					<h3>Light Theme</h3>
					<div class="hljs-theme-light rounded p-4">
						<pre><code class="language-javascript">const example = 'Light theme code block';</code
							></pre>
					</div>
				</div>
				<div>
					<h3>Dark Theme</h3>
					<div class="hljs-theme-dark rounded p-4">
						<pre><code class="language-javascript">const example = 'Dark theme code block';</code
							></pre>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>
