import type { APIRoute } from 'astro';
import { getPublishedPosts } from '../lib/posts';

function escapeXml(value: string): string {
	return value
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
}

export const GET: APIRoute = async ({ site }) => {
	const blogPosts = await getPublishedPosts();
	const sortedPosts = blogPosts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

	const items = sortedPosts.map(post => {
		const url = new URL(`/blog/${post.id}`, site).toString();
		return `	<item>
		<title>${escapeXml(post.data.title)}</title>
		<link>${url}</link>
		<guid>${url}</guid>
		<pubDate>${post.data.date.toUTCString()}</pubDate>
		${post.data.description ? `<description>${escapeXml(post.data.description)}</description>` : ''}
	</item>`;
	});

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
	<title>Haxbyte</title>
	<link>${site}</link>
	<description>Doug Rosenberg — building software and writing about how.</description>
${items.join('\n')}
</channel>
</rss>
`;

	return new Response(body, {
		headers: { 'Content-Type': 'application/xml' },
	});
};
