<script lang="ts">
	import { RichText } from '$components';
	import { Marked } from '$components';
	import { Image } from '$blocks';
	import { mountains } from '$images';
</script>

<Image
	src={mountains}
	alt="this is an image!"
	class="mb-8 h-[25vh] w-full object-cover md:h-[50vh]"
/>

<RichText class="mx-auto max-w-3xl bg-neutral-950 md:-translate-y-[25vh] md:p-8">
	<Marked
		md={`
## "We're Back, Baby" 
## - or - 
## "A Series of Unfortunate Events" 
## - or - 
## "A Summary of the Last Five Years"

It has a been a hot second, if you cound five years as "a hot second". I first purchased isaacdruin.com in 2019, and published the site soon after. 

Rewind to 2020. I was having trouble finding employment. While there are options, South Dakota isn't exactly the bustling epicenter of Graphic Design opportunity. I distictly remember driving across the state for an interview only to be told there wasn't enough time for me to relocate. It was a bleak time - I felt as though my formal education was for nothing. So I decided to leverage another interest and try a new direction.

If I was going to try something new, I had a few criteria that the new skill would have to meet:

1. The skill needed to be self-taught - there wasn't a chance in hell I was going to risk returning to formal education just to get stuck in the same dilemma, again.
2. It needed to be something that could leverage my current skill set - I was proud of the skills I had developed while learning graphic design and pivoting too hard would be a waste.
3. It needed to be something I could learn quickly.

So I settled on web development. This was a great choice and also a horrible mistake. A great choice because I absolutely love it - there is a wonderful intersection of creativity and problem solving involved that just makes my brain happy. And a horrible mistake because I am probably on the spectrum for ADHD and have a tendency to pivot to new, shiny things. It turns out that front-end web development might as well be a honeypot for a person with my brain chemistry coupled with my previous interest in art (more on that in a second).

I decided to attempt to accelerate my trejectory by attending a coding bootcamp. So I drove down to Florida for eight weeks. I learned a lot and made some passable stuff. Coming up on the end ofthe bootcamp, I was feeling optimistic.

Two weeks before graduation, news started breaking about this new disease "COVID". And then a week later (the week before the "hiring" phase where we would get to talk to potential employers partnered with the program), they called the rest of the bootcamp off and told us to go home.

Shit.

I made the 22 hour drive home in one shot and found myself at square 1, but worse. No one was hiring. The world was on fire. Finances were looking _rough_. So, at the ripe old age of 30 years old, I moved back in with my parents (love you guys).

There were no options anymore, just the absolute necessity to find employment. Somehow, I found a position as a Production Scheduler at Truxedo - a truck bed cover manufacturer in Yankton, SD. Initially I was just grateful to have a job. But despite the inital feeling of being handed the sweetest lemon, I actually loved my time there (shoutout to Kristi, Brandon, Christina & team). I could write a post about how esseential great leadership is at a place of employment, but you'll get the idea - I was given the freedom to do things like automate my Excel workflows in VBA (still hate Excel) and even work on some middleware for how work orders were rendered for production. I was given the freedom to exercise my strengths.

In my free time, I continued to plug away at web development. This is where that honeypot concept comes back into play. When I began my web development journey, I thought to myself "I know graphic design, so I'll focus on front-end development", but at this point I had dipped my toes into proper full-stack development and it was/is addictive.

There's something about being able to do something very complex from beginning to end, and a modern business website is that. It requires:

- Building out a brand identity (logos, colors, fonts, spacing, messaging)
- Designing the site (Illustrator, Figma, image selection, graphics development)
- Choosing a "stack" (frontend frameworks, backend frameworks, databases, CDNs, CMS, email, forms, any any project-specific tooling)
- Actually implementing the aformentioned
- Deploying the project

That's the simple bullet-point list. And I feel comfortable at any stage. Hopfully that will come across if you take a peek at [projects](/projects).

After three years at Truxedo, I was unbelievably fortunate to find a job at [Paulsen](https://www.paulsen.agency/). And that's where I'm at today. Once again, I was blessed to find myself with great leadership and role models, along with the freedom and flexibility to dive down rabbit holes and find new and exciting ways to solve problems. I don't get to be abstract while descirbing Paulsen, the skills I use day-to-day are the same skills that I use while I dabble at home. It's a beautiful thing (to me) that the things I love to do in my free time directly intersect with the things I do at work.

So, hello world! Thanks for reading! Thanks for catching up and we'll see what comes next!
	`}
	/>
</RichText>
