<div class="prose-layout">
	<h1>Layouts</h1>
	<p class="lead">Layout utilities and container patterns.</p>

	<section class="space-y-12 mt-8">
		<div>
			<h2>Container Layout</h2>
			<div class="container-layout bg-brandGray-100 dark:bg-brandGreen-900 rounded">
				<p>This uses the <code>container-layout</code> class with padding and max-width constraints.</p>
			</div>
			<div class="mt-4 p-4 bg-brandGray-100 dark:bg-brandGreen-900 rounded">
				<code class="text-xs">&lt;div class="container-layout"&gt;...&lt;/div&gt;</code>
			</div>
		</div>

		<div>
			<h2>Prose Layout</h2>
			<div class="prose-layout bg-brandGray-100 dark:bg-brandGreen-900 rounded p-4">
				<p>This uses the <code>prose-layout</code> class with vertical spacing and responsive padding.</p>
				<p>It's designed for content-heavy pages like blog posts.</p>
			</div>
			<div class="mt-4 p-4 bg-brandGray-100 dark:bg-brandGreen-900 rounded">
				<code class="text-xs">&lt;div class="prose-layout"&gt;...&lt;/div&gt;</code>
			</div>
		</div>

		<div>
			<h2>Card Layout</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div class="card-layout">
					<h3>Card 1</h3>
					<p>Card layout with background and padding.</p>
				</div>
				<div class="card-layout">
					<h3>Card 2</h3>
					<p>Cards work well in grid layouts.</p>
				</div>
			</div>
			<div class="mt-4 p-4 bg-brandGray-100 dark:bg-brandGreen-900 rounded">
				<code class="text-xs">&lt;div class="card-layout"&gt;...&lt;/div&gt;</code>
			</div>
		</div>

		<div>
			<h2>Grid Layout</h2>
			<div class="grid-layout grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				<div class="card-layout">Item 1</div>
				<div class="card-layout">Item 2</div>
				<div class="card-layout">Item 3</div>
				<div class="card-layout">Item 4</div>
				<div class="card-layout">Item 5</div>
				<div class="card-layout">Item 6</div>
			</div>
			<div class="mt-4 p-4 bg-brandGray-100 dark:bg-brandGreen-900 rounded">
				<code class="text-xs">&lt;div class="grid-layout grid-cols-3 gap-4"&gt;...&lt;/div&gt;</code>
			</div>
		</div>

		<div>
			<h2>Responsive Grid</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				<div class="card-layout">Responsive 1</div>
				<div class="card-layout">Responsive 2</div>
				<div class="card-layout">Responsive 3</div>
			</div>
			<div class="mt-4 p-4 bg-brandGray-100 dark:bg-brandGreen-900 rounded">
				<code class="text-xs">
					&lt;div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"&gt;...&lt;/div&gt;
				</code>
			</div>
		</div>

		<div>
			<h2>Flex Layouts</h2>
			<div class="space-y-4">
				<div class="flex gap-4">
					<div class="card-layout flex-1">Flex Item 1</div>
					<div class="card-layout flex-1">Flex Item 2</div>
					<div class="card-layout flex-1">Flex Item 3</div>
				</div>
				<div class="flex flex-col gap-4">
					<div class="card-layout">Stacked Item 1</div>
					<div class="card-layout">Stacked Item 2</div>
				</div>
			</div>
		</div>
	</section>
</div>

