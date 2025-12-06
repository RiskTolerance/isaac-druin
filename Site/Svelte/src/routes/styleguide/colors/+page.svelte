<script lang="ts">
	import { Note, CopyButton } from '$components';

	const colorScales = [
		{
			name: 'Green',
			prefix: 'brandGreen',
			colors: [
				{ shade: 50, oklch: 'oklch(0.962 0.02 172.69)' },
				{ shade: 100, oklch: 'oklch(0.916 0.047 172.94)' },
				{ shade: 200, oklch: 'oklch(0.838 0.05 173.61)' },
				{ shade: 300, oklch: 'oklch(0.762 0.047 171.59)' },
				{ shade: 400, oklch: 'oklch(0.693 0.042 173.84)' },
				{ shade: 500, oklch: 'oklch(0.617 0.037 172.66)' },
				{ shade: 600, oklch: 'oklch(0.539 0.033 171.82)' },
				{ shade: 700, oklch: 'oklch(0.462 0.028 172.66)' },
				{ shade: 800, oklch: 'oklch(0.35 0.02 175.79)' },
				{ shade: 900, oklch: 'oklch(0.249 0.016 168.6)' },
				{ shade: 950, oklch: 'oklch(0.187 0.012 166.98)' }
			],
			hex: [
				'#e6f7f1',
				'#c4eee0',
				'#a9d5c7',
				'#94bcae',
				'#82a59a',
				'#6f8d83',
				'#5b756c',
				'#495e57',
				'#303e3a',
				'#1a2420',
				'#0e1512'
			]
		},
		{
			name: 'Yellow',
			prefix: 'brandYellow',
			colors: [
				{ shade: 50, oklch: 'oklch(0.966 0.04 88.18)' },
				{ shade: 100, oklch: 'oklch(0.93 0.089 89.91)' },
				{ shade: 200, oklch: 'oklch(0.859 0.174 95.21)' },
				{ shade: 300, oklch: 'oklch(0.767 0.155 95.2)' },
				{ shade: 400, oklch: 'oklch(0.682 0.138 95.48)' },
				{ shade: 500, oklch: 'oklch(0.585 0.118 94.9)' },
				{ shade: 600, oklch: 'oklch(0.5 0.101 95.45)' },
				{ shade: 700, oklch: 'oklch(0.405 0.082 95.12)' },
				{ shade: 800, oklch: 'oklch(0.32 0.065 95.33)' },
				{ shade: 900, oklch: 'oklch(0.224 0.046 95.66)' },
				{ shade: 950, oklch: 'oklch(0.176 0.036 93.21)' }
			],
			hex: [
				'#fff3d6',
				'#ffe6a3',
				'#f4ce12',
				'#d2b110',
				'#b3970b',
				'#927a08',
				'#756205',
				'#574802',
				'#3d3201',
				'#221b00',
				'#161000'
			]
		},
		{
			name: 'Gray',
			prefix: 'brandGray',
			colors: [
				{ shade: 50, oklch: 'oklch(0.975 0.002 228.43)' },
				{ shade: 100, oklch: 'oklch(0.93 0.008 228.74)' },
				{ shade: 200, oklch: 'oklch(0.844 0.017 230.9)' },
				{ shade: 300, oklch: 'oklch(0.757 0.02 227.33)' },
				{ shade: 400, oklch: 'oklch(0.662 0.016 229.06)' },
				{ shade: 500, oklch: 'oklch(0.576 0.014 229.05)' },
				{ shade: 600, oklch: 'oklch(0.491 0.012 229.04)' },
				{ shade: 700, oklch: 'oklch(0.404 0.01 225.25)' },
				{ shade: 800, oklch: 'oklch(0.309 0.008 223.63)' },
				{ shade: 900, oklch: 'oklch(0.224 0.005 219.63)' },
				{ shade: 950, oklch: 'oklch(0.176 0.004 229)' }
			],
			hex: [
				'#f5f7f8',
				'#e3e9ec',
				'#c1ced5',
				'#a4b3ba',
				'#89959b',
				'#717b80',
				'#5a6266',
				'#434a4d',
				'#2c3133',
				'#191c1d',
				'#0f1112'
			]
		}
	];
</script>

<!-- Add comma-seperated color classes - tailwind needs the actual class name to compile styles correctly -->
<!-- bg-brandGreen-50 bg-brandGreen-100 bg-brandGreen-200 bg-brandGreen-300 bg-brandGreen-400 bg-brandGreen-500 bg-brandGreen-600 bg-brandGreen-700 bg-brandGreen-800 bg-brandGreen-900 bg-brandGreen-950 bg-brandYellow-50 bg-brandYellow-100 bg-brandYellow-200 bg-brandYellow-300 bg-brandYellow-400 bg-brandYellow-500 bg-brandYellow-600 bg-brandYellow-700 bg-brandYellow-800 bg-brandYellow-900 bg-brandYellow-950 bg-brandGray-50 bg-brandGray-100 bg-brandGray-200 bg-brandGray-300 bg-brandGray-400 bg-brandGray-500 bg-brandGray-600 bg-brandGray-700 bg-brandGray-800 bg-brandGray-900 bg-brandGray-950 -->

<div class="prose-layout text-brandGray-50">
	<div class="divide-brandYellow-200/50 space-y-2 divide-y">
		<div class="prose pb-2">
			<h1>Brand Colors</h1>
			<p>
				All color scales and semantic tokens in the design system. Click on a color standard to copy
				it to your clipboard.
			</p>
		</div>

		<Note>
			<p class="prose-sm">
				Note that hex and OKLCH may not match 1:1.<br />If you want to learn more about the
				difference I recommend this
				<a
					class="underline"
					href="https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl">article</a
				>.
			</p>
		</Note>
	</div>

	<section class="mt-8 space-y-12">
		{#each colorScales as scale}
			<div>
				<h2>{scale.name}</h2>
				<div class="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-11">
					{#each scale.colors as color, i}
						{@const colorClass = `bg-${scale.prefix}-${color.shade}`}
						{@const textClass =
							color.shade >= 500 ? 'text-white' : 'text-brandGray-900 dark:text-brandGreen-50'}
						{@const hexValue = scale.hex[i]}
						<div class="space-y-2">
							<div
								class="{colorClass} {textClass} border-brandGray-300 dark:border-brandGreen-700 flex aspect-square items-center justify-center rounded-lg border p-2 font-mono text-xs"
							></div>
							<div class="grid grid-cols-3 place-items-start px-2 text-xs">
								<div class="w-fit font-mono text-xs">{color.shade}</div>
								<CopyButton
									selector="{scale.prefix}-{color.shade}-hex"
									value={hexValue}
									class="w-fit cursor-pointer font-mono text-xs underline opacity-75"
								>
									hex
								</CopyButton>
								<CopyButton
									selector="{scale.prefix}-{color.shade}-oklch"
									value={color.oklch}
									class="w-fit cursor-pointer font-mono text-xs underline opacity-75"
								>
									OKLCH
								</CopyButton>
							</div>
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</section>
</div>
