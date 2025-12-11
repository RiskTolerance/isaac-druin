<!-- spell-checker: disable -->
<!-- This is a template for blog posts and projects. -->
<script lang="ts">
	import Image from '$client/blocks/Image.svelte';
	import { Prose } from '$components';
	import { Marked } from '$components';
	import { iMadeThis } from '$images';

	const content = `
## Content A
`;
</script>

<Prose
	class="-mt[12.5vh] dark:bg-brandGreen-800 relative z-10 mx-auto max-w-3xl bg-neutral-50 md:-mt-[25vh] md:p-8"
>
	<!-- Write content directly in the svelte file -->
	<Marked
		md={`
### Definitions

- Cognitive Dissonance (I will be abbreviating it as 'CD'): a mental phenomenon in which people unknowingly or subconsciously hold fundamentally conflicting cognitions. [1](https://en.wikipedia.org/wiki/Cognitive_dissonance)

## A Quick Primer

As AI has become injected (by justifiable need or by monetary pressure) into every crevice of society, society has questioned the implication. Questions like: "Is AI making us dumber?", "Is AI making us lazier?" - or the more long-term approach: 

"Will AI make the children dumber?", 
"Will AI make the children lazier?", 
"Will AI kill us all?"

We also ponder ethics-centered questions like: 

"Is it wrong for a student to use AI to write a school paper?"
"Is it wrong for an artist to use AI to create a painting?"
"Is it wrong to involve AI when making the decision to to kill people?" [2](https://www.palantir.com/platforms/gotham/)

Spanning from somewhat trivial to borderline shocking, these are important questions that are worth asking, both for the individual and for society as a whole. As with most things, broader society (governments, corporations, religions, etc.) will eventually codify answers in some way. I imagine anyone reading this already holds an opinion.

My goal in writing this is to think about how the formation of beliefs and opinions regarding AI might conflict with previously held beliefs and opinions, and how the resulting CD will force us to either reshape our preconceptions or live with the discomfort caused by the inconsistancy.

Note: I do not consider myself a student of philosophy or much of a writer - if you happen to be one or both of these things (or you just think I'm wrong), please feel free to course correct me in the comment section at the end of the post.

---

## 
    `}
	/>
	<Image class="float-right max-h-[600px] p-6" src={iMadeThis} alt="I made this comic"></Image>
	<Marked
		md={`
## A Leading Example

By far the most common example of CD caused by AI arises from the use of AI to "create" something. The ability of AI to write text, generate media (images, video, music, human voices, etc.) has forced us to consider the following questions in their most extreme form:

"What is a creative tool?"
"If a creative tool removes the effort required to accomplish a human's vision, is the result still meaningful/credible?"

This has been a subject of contention to varying degrees since the dawn of artistic endevor. A French poet, Charles Baudelaair held the following option of photography and its relation to painting:

> As the photographic industry was the refuge of every would-be painter, every painter too ill-endowed or too lazy to complete his studies, this universal infatuation bore not only the mark of a blindness, an imbecility, but had also the air of a vengeance. I do not believe, or at least I do not wish to believe, in the absolute success of such a brutish conspiracy, in which, as in all others, one finds both fools and knaves; but I am convinced that the ill-applied developments of photography, like all other purely material developments of progress, have contrib­uted much to the impoverishment of the French artistic genius, which is already so scarce. [3](https://www.csus.edu/indiv/o/obriene/art109/readings/11%20baudelaire%20photography.htm)

Similar critique can be found directed at most forms of art created with digital aid. Photoshop, music synthesizers, digital photography, auto-tune, etc. In these instances, society as a whole has, in the end, usually sided with the creator. There was enough process and effort involved alongside the automation which allowed the viewer to align their preconceptions and values with the new paradigm.

Maybe you're a person who believes that digital photography is a lesser form of art in contrast to analog, or you think that a painting in Photoshop is inferior to an oil painting on canvas, or you think auto-tune is an abomonation (you're right in that instance). Those notions are beside the point.

If you believe that the distribution of pre-mixed oil paints is not an infringement on the integrity of oil painting.
	`}
	></Marked>
</Prose>
