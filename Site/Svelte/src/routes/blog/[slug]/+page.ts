import type { EntryGenerator, RouteParams, PageLoad } from './$types';
const posts = import.meta.glob('/src/lib/posts/*.svx', { eager: true });

export const entries: EntryGenerator = () => {
	return Object.keys(posts).map((path) => {
		const slug = path.split('/').pop()?.replace('.svx', '');
    console.log(slug);
		if (slug) {
			return {
				slug: path.split('/').pop()?.replace('.svx', '')
			};
		}
	}) as RouteParams[];
};

export const load: PageLoad = async ({ params }) => {
  // vite doesn't know about .svx files - the vite ignore just drops the warning
  const post = await import(/* @vite-ignore */ `/src/lib/posts/${params.slug}.svx`)
	return {
    post: post.default
  };
};
