import fs from 'fs';
import path from 'path';

export function copyImagesPlugin() {
  return {
    name: 'copy-images',
    writeBundle() {
      copyImages();
    }
  };
}

function copyImages() {
  try {
    const srcImagesDir = path.resolve('src/images');
    const distImagesDir = path.resolve('dist/images');
    
    // Check if source images directory exists
    if (!fs.existsSync(srcImagesDir)) {
      console.log('⚠️ No images directory found in src/');
      return;
    }
    
    // Create dist/images directory if it doesn't exist
    if (!fs.existsSync(distImagesDir)) {
      fs.mkdirSync(distImagesDir, { recursive: true });
    }
    
    // Copy all files from src/images to dist/images
    const files = fs.readdirSync(srcImagesDir);
    
    files.forEach(file => {
      const srcFile = path.join(srcImagesDir, file);
      const distFile = path.join(distImagesDir, file);
      
      if (fs.statSync(srcFile).isFile()) {
        fs.copyFileSync(srcFile, distFile);
        console.log(`✅ Copied image: ${file}`);
      }
    });
    
    console.log(`📸 Images copied to dist/images/`);
  } catch (error) {
    console.error('❌ Image copying failed:', error.message);
  }
}
