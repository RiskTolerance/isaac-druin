<script lang="ts">
	import Prose from '$client/components/Prose.svelte';
</script>

<div class="prose-layout">
	<h1>Typography</h1>
	<p class="lead">All typographic elements and their styling.</p>

	<section class="mt-8 space-y-8">
		<div>
			<h2>Headings</h2>
			<div class="space-y-4">
				<div>
					<h1>Heading 1</h1>
					<p class="text-sm opacity-75">font-display, text-2xl lg:text-4xl, font-bold</p>
				</div>
				<div>
					<h2>Heading 2</h2>
					<p class="text-sm opacity-75">font-display, text-xl lg:text-3xl, font-bold</p>
				</div>
				<div>
					<h3>Heading 3</h3>
					<p class="text-sm opacity-75">
						font-display, text-xl lg:text-2xl, font-bold, text-balance
					</p>
				</div>
				<div>
					<h4>Heading 4</h4>
					<p class="text-sm opacity-75">font-display</p>
				</div>
				<div>
					<h5>Heading 5</h5>
					<p class="text-sm opacity-75">font-display</p>
				</div>
				<div>
					<h6>Heading 6</h6>
					<p class="text-sm opacity-75">font-display</p>
				</div>
			</div>
		</div>

		<div>
			<h2>Body Text</h2>
			<div class="space-y-4">
				<p>
					This is regular body text using the default font (font-sans). It's used for paragraphs and
					general content.
				</p>
				<p class="lead">
					This is lead text, typically used for introductions or emphasized paragraphs.
				</p>
			</div>
		</div>

		<div>
			<h2>Text Styles</h2>
			<div class="space-y-4">
				<p><strong>Strong text</strong> and <b>bold text</b></p>
				<p><em>Emphasized text</em> (italic)</p>
				<p><code>Inline code</code> using font-code</p>
				<p><kbd>Keyboard input</kbd> styling</p>
			</div>
		</div>

		<div>
			<h2>Lists</h2>
			<div class="space-y-4">
				<div>
					<h3>Unordered List</h3>
					<ul>
						<li>First item</li>
						<li>Second item</li>
						<li>Third item with <strong>bold text</strong></li>
					</ul>
				</div>
				<div>
					<h3>Ordered List</h3>
					<ol>
						<li>First numbered item</li>
						<li>Second numbered item</li>
						<li>Third numbered item</li>
					</ol>
				</div>
				<div>
					<h3>Definition List</h3>
					<dl>
						<dt>Term</dt>
						<dd>Definition of the term</dd>
						<dt>Another Term</dt>
						<dd>Another definition</dd>
					</dl>
				</div>
			</div>
		</div>

		<div>
			<h2>Blockquote</h2>
			<blockquote>
				<p>This is a blockquote. It's used for quotes, testimonials, or highlighted content.</p>
			</blockquote>
		</div>

		<div>
			<h2>Horizontal Rule</h2>
			<hr />
		</div>

		<div>
			<h2>Prose Content</h2>
			<Prose>
				<p>
					This content is wrapped in the Prose component, which applies all the prose-brand styling.
				</p>
				<h2>Prose Heading</h2>
				<p>
					More prose content with <a href="/styleguide">a link</a> and <strong>bold text</strong>.
				</p>
				<ul>
					<li>List item in prose</li>
					<li>Another list item</li>
				</ul>
			</Prose>
		</div>
	</section>
</div>
