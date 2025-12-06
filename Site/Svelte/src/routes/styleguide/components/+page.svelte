<script lang="ts">
	import Chip from '$client/components/Chip.svelte';
	import FormButton from '$client/components/FormButton.svelte';
	import Note from '$client/components/Note.svelte';
</script>

<div class="prose-layout">
	<h1>Components</h1>
	<p class="lead">Some reusable UI components and their variations.</p>

	<section class="mt-8 space-y-12">
		<div>
			<h2>Chip</h2>
			<div class="mt-4 flex flex-wrap gap-4">
				<Chip>Default Chip</Chip>
				<Chip>Another Chip</Chip>
				<Chip>Longer Chip Text</Chip>
			</div>
		</div>

		<div>
			<h2>Button</h2>
			<div class="mt-4 flex flex-wrap gap-4">
				<FormButton />
				<FormButton text="Custom Text" />
				<FormButton text="Disabled" class="cursor-not-allowed opacity-50" />
			</div>
		</div>

		<div>
			<h2>Note</h2>
			<div class="mt-4">
				<Note>
					<p>
						This is a note component with an info icon. It's useful for callouts and important
						information.
					</p>
				</Note>
			</div>
		</div>
	</section>
</div>
