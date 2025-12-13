import rss from '@astrojs/rss';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function GET(context) {
  // Read the news markdown file directly
  const newsPath = path.resolve('src/content/docs/news.md');
  const newsContent = fs.readFileSync(newsPath, 'utf-8');
  const { content } = matter(newsContent);

  // Parse the news content to extract articles
  const articles = parseNewsContent(content);

  return rss({
    title: 'MMDD Methodology News',
    description: 'Latest news and updates from the Micromanaged Driven Development framework',
    site: context.site || 'https://mmdd.dev',
    items: articles.map(article => ({
      title: article.title,
      description: article.description,
      link: article.link,
      guid: article.guid,
      pubDate: article.date,
    })),
    customData: `
    <language>en-US</language>
    <managingEditor>team@mmdd.dev (MMDD Team)</managingEditor>
    <webMaster>team@mmdd.dev (MMDD Team)</webMaster>
    <generator>Astro RSS</generator>
    `,
  });
}

function parseNewsContent(content) {
  const articles = [];
  
  // Split content by ## headers to get individual articles
  const sections = content.split(/\n## /);
  
  // Skip the first section (before first ##)
  for (let i = 1; i < sections.length; i++) {
    const section = sections[i];
    const lines = section.split('\n');
    
    if (lines.length === 0) continue;
    
    const title = lines[0].trim();
    let date = '';
    let description = '';
    let link = '';
    let collectingDescription = false;
    
    // Parse each line to extract article data
    for (let j = 1; j < lines.length; j++) {
      const line = lines[j].trim();
      
      if (!line) continue;
      
      // Look for date (first non-empty line after title)
      if (!date && line && !line.startsWith('**') && !line.includes('[')) {
        date = line;
        collectingDescription = true;
        continue;
      }
      
      // Look for Read more link
      if (line.includes('**[Read more →]')) {
        const readMoreMatch = line.match(/\*\*\[Read more →\]\((.+?)\)\*\*/);
        if (readMoreMatch) {
          link = readMoreMatch[1];
        }
        collectingDescription = false;
        break;
      }
      
      // Collect description content
      if (collectingDescription && !line.startsWith('**[')) {
        description += line + ' ';
      }
    }
    
    // Clean up description
    description = description
      .replace(/\*\*/g, '') // Remove bold markdown
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Convert links to text
      .replace(/\s+/g, ' ') // Normalize whitespace
      .trim();
    
    // Only add articles with required fields
    if (title && description && date) {
      articles.push({
        title,
        date: parseDateString(date),
        description,
        link: link || 'https://mmdd.dev/news',
        guid: `mmdd-${title.toLowerCase().replace(/[^a-z0-9]/g, '-').substring(0, 50)}`
      });
    }
  }
  
  // Sort articles by date (newest first)
  articles.sort((a, b) => b.date - a.date);
  
  return articles;
}

function parseDateString(dateStr) {
  if (!dateStr) return new Date();
  
  // Handle "2025" format (assume January 1st)
  if (dateStr === '2025') {
    return new Date('2025-01-01T00:00:00Z');
  }
  
  // Handle "Month Day, Year" format
  const date = new Date(dateStr);
  if (!isNaN(date.getTime())) {
    return date;
  }
  
  // Fallback to current date if parsing fails
  return new Date();
}
