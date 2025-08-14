import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function rssPlugin() {
  return {
    name: 'rss-generator',
    buildStart() {
      // Generate RSS feed at the start of build (works for both dev and build)
      generateRSSFeed();
    },
    writeBundle() {
      // Also generate during build output
      generateRSSFeed();
    }
  };
}

function generateRSSFeed() {
  try {
    // Read the news markdown file
    const newsPath = path.resolve('src/content/news.md');
    const newsContent = fs.readFileSync(newsPath, 'utf-8');
    const { data: frontmatter, content } = matter(newsContent);

    // Parse the news content to extract articles
    const articles = parseNewsContent(content);
    
    // Generate RSS XML
    const rssXml = generateRSSXML(articles);
    
    // Write RSS file to both src (for dev) and dist (for build) directories
    const srcRssPath = path.resolve('src/rss.xml');
    const distRssPath = path.resolve('dist/rss.xml');
    
    // Write to src for development server
    fs.writeFileSync(srcRssPath, rssXml, 'utf-8');
    
    // Write to dist if directory exists (build mode)
    if (fs.existsSync('dist')) {
      fs.writeFileSync(distRssPath, rssXml, 'utf-8');
    }
    
    console.log('✅ RSS feed generated: /rss.xml');
  } catch (error) {
    console.error('❌ RSS generation failed:', error.message);
  }
}

function parseNewsContent(content) {
  const articles = [];
  
  // Split content by horizontal rules (---) to separate news items
  const newsItems = content.split(/\n---\n/).filter(item => item.trim());
  
  newsItems.forEach((item, index) => {
    const lines = item.trim().split('\n');
    if (lines.length === 0) return;
    
    let date = '';
    let title = '';
    let description = '';
    let link = '';
    let collectingDescription = false;
    
    // Parse each line to extract article data
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      // Skip empty lines
      if (!line) continue;
      
      // Skip RSS link, small tags, and # News header
      if (line.includes('[RSS]') || line.includes('<small>') || line === '# News') {
        continue;
      }
      
      // Look for date pattern *Date* (but not links with *)
      if (line.match(/^\*([^[]+)\*$/) && !line.includes('[')) {
        date = line.replace(/^\*([^[]+)\*$/, '$1').trim();
        collectingDescription = false; // Reset description collection
        continue;
      }
      
      // Look for title (##)
      if (line.startsWith('## ')) {
        title = line.replace(/^## /, '').trim();
        collectingDescription = true;
        description = ''; // Reset description for new article
        continue;
      }
      
      // Look for Read more link
      if (line.includes('**[Read more →]')) {
        const readMoreMatch = line.match(/\*\*\[Read more →\]\((.+?)\)\*\*/);
        if (readMoreMatch) {
          link = readMoreMatch[1];
        }
        collectingDescription = false; // Stop collecting description after link
        continue;
      }
      
      // Collect description content (after title is found, before link)
      if (collectingDescription && !line.startsWith('#') && !line.match(/^\*(.+)\*$/)) {
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
        link: link || 'https://mmdd.dev/#news',
        guid: `mmdd-${title.toLowerCase().replace(/[^a-z0-9]/g, '-').substring(0, 50)}`
      });
      
      console.log(`✅ Parsed article: "${title}" (${date}) -> ${link || 'default link'}`);
    } else {
      console.log(`⚠️ Skipped incomplete article: title="${title}", date="${date}", desc length=${description.length}`);
    }
  });
  
  // Sort articles by date (newest first)
  articles.sort((a, b) => b.date - a.date);
  
  console.log(`📰 Total articles parsed: ${articles.length}`);
  return articles;
}

function parseDateString(dateStr) {
  if (!dateStr) return new Date();
  
  // Handle "2025" format (assume January 1st)
  if (dateStr === '2025') {
    return new Date('2025-01-01T00:00:00Z');
  }
  
  // Handle "June 25, 2024" format
  const date = new Date(dateStr);
  if (!isNaN(date.getTime())) {
    return date;
  }
  
  // Fallback to current date if parsing fails
  console.warn(`⚠️ Could not parse date: "${dateStr}", using current date`);
  return new Date();
}

function generateRSSXML(articles) {
  const siteUrl = 'https://mmdd.dev';
  const siteTitle = 'MMDD Methodology News';
  const siteDescription = 'Latest news and updates from the Micromanaged Driven Development framework';
  
  const rssItems = articles.map(article => `
    <item>
      <title><![CDATA[${article.title}]]></title>
      <description><![CDATA[${article.description}]]></description>
      <link>${article.link}</link>
      <guid isPermaLink="false">${article.guid}</guid>
      <pubDate>${article.date.toUTCString()}</pubDate>
    </item>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${siteTitle}</title>
    <description>${siteDescription}</description>
    <link>${siteUrl}</link>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    <language>en-US</language>
    <managingEditor>team@mmdd.dev (MMDD Team)</managingEditor>
    <webMaster>team@mmdd.dev (MMDD Team)</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <generator>MMDD Vite RSS Plugin</generator>${rssItems}
  </channel>
</rss>`;
}