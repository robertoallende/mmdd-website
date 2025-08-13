import fs from 'fs'
import path from 'path'
import { marked } from 'marked'
import matter from 'gray-matter'

export function markdownPlugin() {
  return {
    name: 'markdown-plugin',
    transformIndexHtml(html) {
      // Read all markdown files from content directory
      const contentDir = path.resolve('src/content')
      const markdownFiles = fs.readdirSync(contentDir).filter(file => file.endsWith('.md'))
      
      // Process each markdown file
      const contentSections = {}
      
      for (const file of markdownFiles) {
        const filePath = path.join(contentDir, file)
        const fileContent = fs.readFileSync(filePath, 'utf-8')
        
        // Parse frontmatter and markdown content
        const { data: frontmatter, content } = matter(fileContent)
        
        // Convert markdown to HTML
        const htmlContent = marked(content)
        
        // Store processed content by section ID
        contentSections[frontmatter.section] = {
          ...frontmatter,
          htmlContent
        }
      }
      
      // Replace content section placeholders with processed HTML
      let transformedHtml = html
      
      for (const [sectionId, sectionData] of Object.entries(contentSections)) {
        // Create regex pattern to match the placeholder div with any content inside
        const placeholderPattern = new RegExp(
          `<div id="${sectionId}" class="content-section${sectionId === 'home' ? ' active' : ''}">[\\s\\S]*?</div>`,
          'g'
        )
        
        const replacement = `<div id="${sectionId}" class="content-section${sectionId === 'home' ? ' active' : ''}">\n                    ${sectionData.htmlContent}\n                </div>`
        
        transformedHtml = transformedHtml.replace(placeholderPattern, replacement)
      }
      
      return transformedHtml
    }
  }
}