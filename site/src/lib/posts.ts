import { getCollection, type CollectionEntry } from 'astro:content';

/**
 * Hard gate, independent of the `draft` frontmatter field. Posts listed here never
 * build or publish, in any environment, until removed from this list by hand.
 * Use for posts pending a separate content review, not routine draft management —
 * that's what `draft: true` in frontmatter is for.
 */
const BLOCKED_SLUGS = new Set<string>([]);

export async function getPublishedPosts(): Promise<CollectionEntry<'blog'>[]> {
	return getCollection('blog', ({ id, data }) => {
		if (BLOCKED_SLUGS.has(id)) return false;
		return import.meta.env.DEV || !data.draft;
	});
}
