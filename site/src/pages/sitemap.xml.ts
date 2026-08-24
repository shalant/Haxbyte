import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { getPublishedPosts } from '../lib/posts';

const staticPaths = ['/', '/about', '/contact', '/blog', '/work'];

export const GET: APIRoute = async ({ site }) => {
	const blogPosts = await getPublishedPosts();
	const workPieces = await getCollection('work');

	const urls = [
		...staticPaths,
		...blogPosts.map(post => `/blog/${post.id}`),
		...workPieces.map(piece => `/work/${piece.id}`),
	];

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(path => `	<url>\n\t\t<loc>${new URL(path, site)}</loc>\n\t</url>`).join('\n')}
</urlset>
`;

	return new Response(body, {
		headers: { 'Content-Type': 'application/xml' },
	});
};
