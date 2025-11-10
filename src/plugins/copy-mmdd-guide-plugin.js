import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export function copyMmddGuidePlugin() {
  return {
    name: 'copy-mmdd-guide',
    writeBundle() {
      const sourceFile = path.resolve(__dirname, '../../dev_log/00_mmdd.md')
      const destDir = path.resolve(__dirname, '../../dist')
      const destFile = path.join(destDir, '00_mmdd.md')

      try {
        // Ensure destination directory exists
        if (!fs.existsSync(destDir)) {
          fs.mkdirSync(destDir, { recursive: true })
        }

        // Copy the file
        if (fs.existsSync(sourceFile)) {
          fs.copyFileSync(sourceFile, destFile)
          console.log(`✅ Copied MMDD guide: 00_mmdd.md`)
        } else {
          console.warn(`⚠️ Warning: 00_mmdd.md not found at ${sourceFile}`)
        }
      } catch (error) {
        console.error(`❌ Error copying MMDD guide file:`, error)
      }
    }
  }
}
