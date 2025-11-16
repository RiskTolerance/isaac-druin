<script lang="ts">
</script>

<div class="font-display container mx-auto pl-[calc(20%)]">
	<p>Hi! My name is</p>
	<p style="font-size: 4rem; padding-left: 2rem;">Isaac Druin</p>
	<div class="h-12"></div>
	<p>I am a</p>
	<p>
		Full Stack Web Developer <span>&&</span> Graphic Designer <span>&&</span> UX|UI Nerd
		<span>&&</span> 3D Artist <span>&&</span> Photographer
	</p>
	<p>using</p>
	<p>
		SvelteKit <span>&&</span> Illustrator <span>&&</span> Photoshop <span>&&</span> Blender
		<span>&&</span>
		Sanity CMS<span>&&</span> Docker <span>&&</span> Cloudflare
	</p>
	<p>to craft</p>
	<p style="font-size: 2.5rem; padding-left: 2rem;">Slightly above average web stuff</p>
</div>

<style>
	p {
		font-size: 3rem;
		text-wrap: nowrap;
		padding-left: 2rem;
	}
	p:not(:has(> span)) {
		font-size: 2rem;
		padding-left: 0rem;
	}
	p > span {
		font-size: 1.5rem;
		vertical-align: middle;
		line-height: 1;
		position: relative;
		top: -0.2em;
		color: #ff3e00;
	}
</style>
