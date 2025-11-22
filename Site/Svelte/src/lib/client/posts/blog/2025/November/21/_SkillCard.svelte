<script lang="ts">
	let {
		name,
		shortDescription,
		icon,
		onClick
	}: { name: string; shortDescription: string; icon: string; onClick: (e: MouseEvent) => void } =
		$props();
	import { BookOpen } from '@lucide/svelte';
	import gsap from 'gsap';
</script>

<button onclick={onClick} class="group cursor-pointer">
	<div class=" flex w-full gap-4 p-4">
		<!-- transition-transform duration-200 group-hover:scale-105 -->
		<img class="skill-icon m-0! h-20 w-20 p-0" src={icon} alt={name} />
		<div class="prose text-start">
			<h4 class="skill-name">
				<!--  transition-all duration-200 group-hover:tracking-widest -->
				{name}
			</h4>
			<p class="skill-short-description text-sm">{shortDescription}</p>
		</div>
	</div>
</button>
