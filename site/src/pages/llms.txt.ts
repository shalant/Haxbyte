import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { getPublishedPosts } from '../lib/posts';

export const GET: APIRoute = async ({ site }) => {
	const blogPosts = (await getPublishedPosts()).sort(
		(a, b) => b.data.date.getTime() - a.data.date.getTime(),
	);
	const workPieces = await getCollection('work');

	const blogLines = blogPosts.map(post => {
		const url = new URL(`/blog/${post.id}`, site).toString();
		return `- [${post.data.title}](${url})${post.data.description ? `: ${post.data.description}` : ''}`;
	});

	const workLines = workPieces.map(piece => {
		const url = new URL(`/work/${piece.id}`, site).toString();
		return `- [${piece.data.title}](${url}): ${piece.data.description}`;
	});

	const body = `# Haxbyte

> Doug Rosenberg's technical content brand — build logs, project write-ups, and technical notes from an engineer building enterprise systems by day and small, honest software in the open.

Doug Rosenberg is a full-stack engineer with 3+ years building enterprise systems — ERPs for global nonprofits, platforms for Fortune 10 companies — who also builds and writes about independent side projects, held to the same standard: clean code, sub-2-second performance, WCAG 2.1 AA accessibility as a baseline.

## About

- [About](${new URL('/about', site)}): Background, writing focus, and the Haxbyte approach to code quality, performance, and accessibility.
- [Contact](${new URL('/contact', site)}): Email, LinkedIn, and a direct contact form.

## Blog

${blogLines.join('\n')}

## Work

${workLines.join('\n')}
`;

	return new Response(body, {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' },
	});
};
