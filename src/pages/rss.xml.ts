import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import site from '../../site.config.mjs';

export async function GET(context) {
  const docs = await getCollection('docs');
  const news = docs.filter(d => d.data.category === 'news' && d.data.status === 'published');

  return rss({
    title: site.title,
    description: site.description,
    site: site.siteUrl,
    items: news.map(post => ({
      title: post.data.title,
      description: post.data.description,
      link: `/updates/${post.id}`,
    })),
  });
}
