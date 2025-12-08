<script lang="ts">
	import { Switch, Label, useId, type WithoutChildrenOrChild } from 'bits-ui';

	let {
		id = useId(),
		checked = $bindable(false),
		ref = $bindable(null),
		class: className,
		labelText,
		...restProps
	}: WithoutChildrenOrChild<Switch.RootProps> & { labelText: string; class?: string } = $props();
</script>

<div class="flex items-center justify-between gap-4 {className}">
	<Label.Root class="text-sm text-nowrap" for={id}>{labelText}</Label.Root>
	<Switch.Root
		bind:checked
		bind:ref
		{...restProps}
		{id}
		name="sound-switch"
		class="focus-visible:ring-foreground focus-visible:ring-offset-background data-[state=checked]:bg-foreground data-[state=unchecked]:bg-brandGray-700 data-[state=unchecked]:shadow-mini-inset dark:data-[state=checked]:bg-brandGray-700 border-brandGray-300 peer inline-flex aspect-square h-[24px] w-9 shrink-0 cursor-pointer items-center border p-[2px] transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50"
	>
		<Switch.Thumb
			class="bg-background data-[state=unchecked]:shadow-mini dark:border-brandGreen-900/30 dark:bg-brandGreen-300 dark:shadow-popover data-[state=checked]:bg-brandYellow-200 pointer-events-none block size-[20px] shrink-0 transition-transform data-[state=checked]:translate-x-[11px] data-[state=unchecked]:translate-x-0 dark:border dark:data-[state=unchecked]:border"
		/>
	</Switch.Root>
</div>
