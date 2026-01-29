<script lang="ts">
	import HighlightCode from '$client/components/HighlightCode.svelte';
	import Note from '$client/components/Note.svelte';
	import { Prose } from '$components';
	import { Marked } from '$components';
</script>

<Prose
	class="-mt[12.5vh] dark:bg-brandGreen-800 relative z-10 mx-auto max-w-3xl bg-neutral-50 p-4 md:-mt-[25vh] md:p-8"
>
	<Marked
		md={`
## A Quick Primer

Learning new skills is a journey. There is no correct path. 

If you decide to learn how to draw, you might start with lines. Draw straight lines, draw sequential parallel lines, draw perpendicular lines. And then, when you feel like your line drawing skill has reached sufficient level, you can move on. You build up the skill piece by piece till you are content with your progress.

Even if you follow a course that’s brimming with the knowledge of the instructor and their experience, you will likely find flaws in retrospect. When I say flaws, I mean flaws in the learning process - things that you would have done differently or shortcuts that you wish that you hadn’t taken or subskills that you would have learned in a different order.

When it comes to web development, type safety is probably the biggest, most glaring example of this… I’m going to call it learners’ remorse. For someone going to school for computer science with the intention of becoming a web developer, it’s something that, in the early 2010s, might not have felt particularly relevant to web development. For those who were learning on their own in the 2010s, it was rarely if ever mentioned in online tutorials for beginners.

This is not a post about typed languages, or a post about TypeScript, the language that I’m using. If you want to learn about the subject [this](https://drmarkclewis.medium.com/the-struggle-of-dynamically-typed-languages-ef91a87164a1) is a good resource. This post is about solving a problem that I wish I had started thinking about a long time ago.  

## The Problem

Building a static website with no outside APIs or database dependencies is… well, it’s not *easy*, but it’s comparatively simple in contrast to the chaos that comes with pulling data from sources that you might not control and of which your codebase has no awareness of. Let’s say I want to display the weather on my site, so I call a weather API with the longitude/latitude of the user. Chances are I get a JSON object back from the API – the shape of which may or may not match the documentation for the API. A contrived example:
`}
	/>
	<HighlightCode
		class="max-w-3xl"
		code={`
{
  "city": "Sioux Falls",
  "temp_f": 28,
  "condition": "Cloudy"
}
	`}
	></HighlightCode>
	<Marked
		md={`
Utilizing this response with plain JavaScript would look something like this:
`}
	/>
	<HighlightCode
		class="max-w-3xl"
		code={`
const weather = await fetch('/api/weather').then(r => r.json());
console.log(\`\${weather.city}: \${weather.temp_f}\\u00B0F, \${weather.condition}\`);
	`}
	></HighlightCode>
	<Marked
		md={`
There are a few problems with this approach:

1. The developer needs to remember the shape of the data while they work. If they move on to another task and then come back, they will have to examine it again.
2. The IDE can’t help. The IDE doesn’t know what the data looks like even if the developer does, so it just must assume the developer knows what they’re doing (a terrible assumption).

This is where TypeScript comes to the rescue. We can define a type for the response that future us, future others, and the IDE an understanding of the response:
`}
	></Marked>
	<HighlightCode
		class="max-w-3xl"
		code={`
type Weather {
  city: string;
  temp_f: number;
  condition: string;
}

const weather: Weather = await fetch('/api/weather').then(r => r.json());
console.log(\`\${weather.city}: \${weather.temp_f}\\u00B0F, \${weather.condition}\`);
	`}
	></HighlightCode>
	<Marked
		md={`
Now, if we accidentally try to access a key or property that isn’t there, or if we misspell something, the IDE can save our bacon because it understands the data. If we come back later or another developer steps into the code base, understanding the data is as easy as looking at the type definitions.

When working with a CMS or a database, this superpower can become a bit cumbersome and time consuming. The data points are complex, the shape of the data might change, the number of data points can balloon far past a point of reason when it comes to typing the data by hand.

It turns out, web developers work with databases and CMSs a _lot_. I wanted to solve the problem from both sides. I wanted to have type safety in my codebase that reflects the state of the CMS, and I didn’t want to spend time writing schema types to achieve that type safety. This is the problem, and I’m excited to share my solution.

Apologies for the long explanation to the problem. I imagine anyone who knows about modern web development is probably bored or has already stopped reading and the person who knows nothing about web development is deeply confused or has already stopped reading. If you’re still reading and are not bored or confused, well…

## The Solution

`}
	/>
</Prose>
