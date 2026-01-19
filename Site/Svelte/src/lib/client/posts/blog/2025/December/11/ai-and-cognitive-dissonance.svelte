<script lang="ts">
	import Image from '$client/blocks/Image.svelte';
	import { Prose } from '$components';
	import { Marked } from '$components';
	import { iMadeThis } from '$images';
	import { onMount } from 'svelte';

	onMount(() => {
		document.querySelectorAll('a post');
	});
</script>

<Prose
	class="-mt[12.5vh] dark:bg-brandGreen-800 post relative z-10 mx-auto max-w-3xl bg-neutral-50 p-4 md:-mt-[25vh] md:p-8"
>
	<Marked
		md={`
Cover image: [Hercules and the Lernaean Hydra](https://www.artic.edu/artworks/20579/hercules-and-the-lernaean-hydra)

### Definitions

Cognitive Dissonance: a mental phenomenon in which people unknowingly or subconsciously hold fundamentally conflicting cognitions. [1](https://en.wikipedia.org/wiki/Cognitive_dissonance)

### Abbreviations

CD: Cognitive Dissonance

AI: Artificial Intelligence

## A Quick Primer

As AI has become injected (by justifiable need or by monetary pressure) into every crevice of society, society has questioned the implication. Questions like: "Is AI making us dumber?", "Is AI making us lazier?" - or the more long-term approach: 

"Will AI make the children dumber?", 
"Will AI make the children lazier?", 
"Will AI (AGI) kill us all?"

We also ponder ethical questions like: 

"Is it wrong for a student to use AI to write a school paper?"
"Is it wrong for an artist to use AI to create a painting?"
"Is it wrong to involve AI when making the decision to kill people?" [2](https://www.palantir.com/platforms/gotham/)

Spanning from somewhat trivial to borderline shocking, these are important questions worth asking, both for the individual and for society. Broader society (governments, corporations, religions, etc.) have already initiated the process to codify answers in some way.

My goal in writing this is to think about how the formation of beliefs and opinions regarding AI might conflict with previously held beliefs and opinions, and how the resulting CD will force us to either reshape our preconceptions or live with the discomfort caused by the inconsistency.

Note: I do not consider myself a student of philosophy or much of a writer - if you happen to be one or both things (or you just think I'm partially/fully off-base), please feel free to course correct me in the comment section at the end of the post.

---

## 
    `}
	/>
	<Image class="p-6 sm:float-right sm:max-h-[600px]" src={iMadeThis} alt="I made this comic"
	></Image>
	<Marked
		md={`
## A Leading Example

By far the most common example of CD caused by AI arises from the use of AI to "create" something. The ability of AI to write texts, generate media (images, video, music, human voices, etc.) has forced us to consider the following questions in their most extreme form:

"What is a creative tool?"
"If a creative tool removes the effort required to accomplish a human's vision, is the result still meaningful/credible?"

This has been a subject of contention to varying degrees since the dawn of artistic endeavor. A French poet, Charles Baudelaair held the following option of photography and its relation to painting:

> As the photographic industry was the refuge of every would-be painter, every painter too ill-endowed or too lazy to complete his studies, this universal infatuation bore not only the mark of a blindness, an imbecility, but had also the air of a vengeance. I do not believe, or at least I do not wish to believe, in the absolute success of such a brutish conspiracy, in which, as in all others, one finds both fools and knaves; but I am convinced that the ill-applied developments of photography, like all other purely material developments of progress, have contributed much to the impoverishment of the French artistic genius, which is already so scarce. [3](https://www.csus.edu/indiv/o/obriene/art109/readings/11%20baudelaire%20photography.htm)

Similar critique can be found directed at most forms of art created with digital aid. Photoshop, music synthesizers, digital photography, auto-tune, etc. In these instances, society has ultimately sided with the creator. There were enough process and effort involved alongside the automation which allowed the viewer to align their preconceptions and values with the new paradigm.

Perhaps a person does believe that digital photography is a lesser form of art in contrast to analog, or they believe that a painting in Photoshop is inferior to an oil painting on canvas, or that auto-tune is an abomination (they are correct in that instance). Believing these things is beside the point. At some level this person likely *does* dismiss some level of "shortcut" as acceptable.

If a person believes that the distribution of pre-mixed oil paints does *not* infringe on the integrity of oil painting, but AI creating an entire digital painting based on user input is an affront to the human creative spirit, they are already living with a tiny level of CD. They must constantly justify to themselves that one shortcut is acceptable while another is unacceptable.

---

## The Impossible Task

In Greek mythology, the Lernaean Hydra is a monster with many heads. To kill a Hydra, all its heads must be cut off. If a head is severed but the creature is not slain, two additional heads grow back for each head removed. Killing the Hydra was used as an analogy for a nearly impossible task. [4](https://en.wikipedia.org/wiki/Lernaean_Hydra)

AI has become a CD Hydra. As it becomes applicable to more areas of our lives, we will find ourselves grappling with each "head" and the inconsistency in beliefs and values that it implies. We will be forced to voice opinions for which our actions must align lest we live with the resulting cognitive dissonance of believing one thing while justifying another.

The impossible task arises from the lack of choice. It is a matter of fact that AI is a powerful tool that can accelerate output. You may feel that AI is an affront to the human spirit but simultaneously feel that ignoring it threatens your livelihood. As a web developer and a hobbiest digital artist/photographer, that's how *I* feel. It is a common (and likely true) sentiment that if a person does not learn to utilize AI, they will fall behind peers who do.

Perhaps if you are retired and sitting on a comfortable nest egg you will manage to dodge the problem entirely, but those who are active in academia or the workforce must face it.

---

## The ~~Solution~~ Response

AI is young, and although humanity created it, we don't truely understand what's happening when modern LLMs generate output. It is a black box into takes text in and spits text back out - the system that does so is so complex that it's very difficult to understand what's actually going on internally even in the simpilest models [5](https://www.youtube.com/watch?v=D8GOeCFFby4). While we don't have a firm understanding of the inner workings of AI, CD was first expressed over 100 years ago by the psychologist Leon Festinger [6](https://en.wikipedia.org/wiki/Leon_Festinger) and humanity has had more time to ponder the idea and how to live with or aleviate the associated sensations. While writing this, I found two relivant sources that are relivant to CD as it relates to AI.

[A conceptual exploration of generative AI-induced cognitive dissonance and its emergence in university-level academic writing [7]](https://www.frontiersin.org/journals/artificial-intelligence/articles/10.3389/frai.2025.1573368/full) offers a "call to action" in response to the CD which I believe can be extended to address most AI CD:

1. Establish AI policies and literacy programs to curb over-reliance
2. Integrate reflective pedagogy to mitigate ethical dilemmas and preserve confidence
3. Redesign hybrid writing to reclaim critical thinking and uphold academic integrity

These approaches can be generalized for individuals and generic AI CD:

1. Learning about AI (effective prompting, creative usage) and how to leverage it effectively (correct/incorrect scenarios) helps to alleviate the dissonance between effort and output.
2. Comparing and contrasting strict AI output with strict reveiwer output might lead to deeper understanding and a better grasp on the subject, giving the reviewer more confidence in their own abilty to create AI assisted output that is superior to generic AI output.
3. Experimenting with workflows which delegate menial or repetative work to the AI while reserving creative and fulfilling tasks for the individual.

[Cognitive Dissonance Artificial Intelligence (CD-AI): The Mind at War with Itself.
Harnessing Discomfort to Sharpen Critical Thinking [8]](https://arxiv.org/pdf/2507.08804) argues that CD should not be viewed as a negative effect and that it should be harnessed for personal growth stating:

> ... cognitive science research suggests that intellectual growth emerges not from immediate clarity but from grappling with contradiction and uncertainty [Festinger 1957; Mercier & Sperber 2017]. Cognitive Dissonance (CD) – the psychological discomfort caused by conflicting beliefs – acts as a powerful driver of reflection, adaptive learning, and epistemic resilience. Individuals who can tolerate ambiguity and endure intellectual discomfort tend to develop stronger reasoning skills, more flexible thinking, and greater decision-making capacity in uncertain environments [Kahan 2017 Stanovich 2018].

Note the citation from 1957. Like I stated, CD has been a topic for cognitive science for a long time. In _The Mind at War with Itself_, the author is focusing on user interactions with AI text generation which diverges from the CD that I'm focusing on. They state that:

1. AI is actually an inhibitor of CD in the sense that it oftan affirms the views of those interacting with it (it is trained to please).
2. AI is better used as a vehicle for challenging personal views and ideas.

We can utilize AI in both ways. AI can be useful for growth (initiating CD for broader subject matter) and simultaneously an _aleviation_ for fundemental AI CD that is associated with human values _because_ of AI's potential as a tool for growth.

## Summary


	`}
	></Marked>
</Prose>
