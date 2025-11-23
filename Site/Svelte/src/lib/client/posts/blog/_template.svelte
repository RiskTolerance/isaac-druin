<!-- spell-checker: disable -->
<!-- This is a template for blog posts and projects. -->
<script lang="ts">
	import { Prose } from '$components';
	import { Marked } from '$components';
	import { ProseLayout } from '$layouts';

	const content = `
## Content A
`;
</script>

<ProseLayout>
	<Prose>
		<!-- Write content in the script as a variable -->
		<Marked md={content} />
		<!-- Write content directly in the svelte file -->
		<Marked
			md={`
## Content B
    `}
		/>
	</Prose>
</ProseLayout>
