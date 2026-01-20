<!-- spell-checker: disable -->
<!-- This is a template for blog posts and projects. -->
<script lang="ts">
	import { Prose } from '$components';
	import { Marked } from '$components';

	const content = `
## Content A
`;
</script>

<Prose
	class="-mt[12.5vh] dark:bg-brandGreen-800 relative z-10 mx-auto max-w-3xl bg-neutral-50 p-4 md:-mt-[25vh] md:p-8"
>
	<Marked md={content} />
</Prose>
