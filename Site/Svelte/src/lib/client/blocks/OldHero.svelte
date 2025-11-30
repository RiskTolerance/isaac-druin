<script lang="ts">
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { SplitText } from 'gsap/SplitText';
	gsap.registerPlugin(ScrollTrigger, SplitText);

	const titlesArr = [
		'Full Stack Web Developer',
		'Graphic Designer',
		'UX|UI Nerd',
		'3D Artist',
		'Photographer'
	];

	const toolsArr = [
		'SvelteKit',
		'Tailwind CSS',
		'GSAP',
		'Threejs',
		'Blender',
		'Illustrator',
		'Photoshop'
	];
</script>
