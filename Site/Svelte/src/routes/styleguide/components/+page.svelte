<script lang="ts">
	import Chip from '$client/components/Chip.svelte';
	import FormButton from '$client/components/FormButton.svelte';
	import Note from '$client/components/Note.svelte';
</script>

<div class="prose-layout">
	<h1>Components</h1>
	<p class="lead">Reusable UI components and their variations.</p>

	<section class="space-y-12 mt-8">
		<div>
			<h2>Chip</h2>
			<div class="flex flex-wrap gap-4 mt-4">
				<Chip>Default Chip</Chip>
				<Chip>Another Chip</Chip>
				<Chip>Longer Chip Text</Chip>
			</div>
			<div class="mt-4 p-4 bg-brandGray-100 dark:bg-brandGreen-900 rounded">
				<code class="text-xs">&lt;Chip&gt;Default Chip&lt;/Chip&gt;</code>
			</div>
		</div>

		<div>
			<h2>Form Button</h2>
			<div class="flex flex-wrap gap-4 mt-4">
				<FormButton />
				<FormButton text="Custom Text" />
				<FormButton text="Disabled" class="opacity-50 cursor-not-allowed" />
			</div>
			<div class="mt-4 p-4 bg-brandGray-100 dark:bg-brandGreen-900 rounded">
				<code class="text-xs">&lt;FormButton text="Submit" /&gt;</code>
			</div>
		</div>

		<div>
			<h2>Note</h2>
			<div class="mt-4">
				<Note>
					<p>This is a note component with an info icon. It's useful for callouts and important information.</p>
				</Note>
			</div>
			<div class="mt-4 p-4 bg-brandGray-100 dark:bg-brandGreen-900 rounded">
				<code class="text-xs">
					&lt;Note&gt;<br />
					&nbsp;&nbsp;&lt;p&gt;Your note content&lt;/p&gt;<br />
					&lt;/Note&gt;
				</code>
			</div>
		</div>

		<div>
			<h2>Card Layout</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
				<div class="card-layout">
					<h3>Card Title</h3>
					<p>This is content inside a card layout. Cards have padding and background styling.</p>
				</div>
				<div class="card-layout">
					<h3>Another Card</h3>
					<p>Cards adapt to light and dark themes automatically.</p>
				</div>
			</div>
			<div class="mt-4 p-4 bg-brandGray-100 dark:bg-brandGreen-900 rounded">
				<code class="text-xs">&lt;div class="card-layout"&gt;...&lt;/div&gt;</code>
			</div>
		</div>
	</section>
</div>

