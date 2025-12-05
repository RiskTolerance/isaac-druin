<script lang="ts">
	const colorScales = [
		{
			name: 'Brand Green',
			prefix: 'brandGreen',
			colors: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]
		},
		{
			name: 'Brand Yellow',
			prefix: 'brandYellow',
			colors: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]
		},
		{
			name: 'Brand Gray',
			prefix: 'brandGray',
			colors: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]
		}
	];
</script>

<div class="prose-layout">
	<h1>Colors</h1>
	<p class="lead">All color scales and semantic tokens in the design system.</p>

	<section class="space-y-12 mt-8">
		{#each colorScales as scale}
			<div>
				<h2>{scale.name}</h2>
				<div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-11 gap-4 mt-4">
					{#each scale.colors as shade}
						{@const colorClass = `bg-${scale.prefix}-${shade}`}
						{@const textClass = shade >= 500 ? 'text-white' : 'text-brandGray-900 dark:text-brandGreen-50'}
						<div class="space-y-2">
							<div class="{colorClass} {textClass} aspect-square rounded-lg flex items-center justify-center text-xs font-mono p-2 border border-brandGray-300 dark:border-brandGreen-700">
								{shade}
							</div>
							<div class="text-xs">
								<div class="font-mono">{scale.prefix}-{shade}</div>
								<div class="opacity-75">bg-{scale.prefix}-{shade}</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		{/each}

		<div>
			<h2>Semantic Tokens</h2>
			<div class="space-y-6 mt-4">
				<div>
					<h3>Light Theme</h3>
					<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div class="card-layout">
							<div class="text-sm font-mono mb-2">--brand-light-body</div>
							<div class="bg-brandGray-800 h-12 rounded"></div>
						</div>
						<div class="card-layout">
							<div class="text-sm font-mono mb-2">--brand-light-headings</div>
							<div class="bg-brandGray-900 h-12 rounded"></div>
						</div>
						<div class="card-layout">
							<div class="text-sm font-mono mb-2">--brand-light-links</div>
							<div class="bg-brandGray-900 h-12 rounded"></div>
						</div>
						<div class="card-layout">
							<div class="text-sm font-mono mb-2">--brand-light-code</div>
							<div class="bg-brandGray-900 h-12 rounded"></div>
						</div>
					</div>
				</div>
				<div>
					<h3>Dark Theme</h3>
					<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div class="card-layout">
							<div class="text-sm font-mono mb-2">--brand-dark-body</div>
							<div class="bg-brandGreen-50 h-12 rounded"></div>
						</div>
						<div class="card-layout">
							<div class="text-sm font-mono mb-2">--brand-dark-headings</div>
							<div class="bg-brandGreen-100 h-12 rounded"></div>
						</div>
						<div class="card-layout">
							<div class="text-sm font-mono mb-2">--brand-dark-links</div>
							<div class="bg-brandGreen-100 h-12 rounded"></div>
						</div>
						<div class="card-layout">
							<div class="text-sm font-mono mb-2">--brand-dark-code</div>
							<div class="bg-brandGreen-100 h-12 rounded"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>

