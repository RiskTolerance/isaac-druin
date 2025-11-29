<script lang="ts">
	let { width }: { width: number } = $props();
	let marginX = $state(0);
	let marginY = $state(0);
</script>

<div
	style="max-width: {width}px;"
	class="border-brandGreen-900 pattern relative mx-auto flex w-full justify-center border-4 py-2 sm:py-4"
>
	<div
		class="bg-brandGreen-700 text-brandYellow-200 absolute top-0 left-0 w-fit -translate-x-1/4 px-4 py-1 text-xs sm:py-2 sm:text-sm"
	>
		margin-inline: {marginX}px;
	</div>
	<div
		class="bg-brandGreen-700 text-brandYellow-200 absolute right-5 bottom-0 w-fit px-4 py-1 text-xs sm:py-2 sm:text-sm"
	>
		margin-block: {marginY}px;
	</div>

	<p
		style="font-size: calc({(width / 27) * 2}px);"
		class="font-metro bg-brandGreen-600 w-fit px-6 py-4"
	>
		<span>"</span>UI/UX Nerd<span>"</span>
	</p>
</div>

<style>
	.pattern {
		background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
	}

	p span {
		color: var(--color-brandYellow-200);
	}
</style>
