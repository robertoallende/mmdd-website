# Unit 02: Project Foundation

## Objective
Initialize Vite project with package.json configuration, set up basic Vite config, and verify development server works with the existing src/ structure and assets.

## Implementation
Set up foundational Vite project structure:

### Node.js Version Management:
- Use nvm to set Node.js v20.19.3
- Verify npm version compatibility

### Package.json Initialization:
- Create package.json with project metadata
- Configure standard npm scripts: `dev`, `build`, `preview`
- Add Vite as development dependency
- Set up proper project name and description

### Vite Configuration:
- Create basic vite.config.js with default settings
- Configure for standard HTML/CSS/JS processing
- Set development server defaults (port 3000)
- Prepare for future markdown processing plugins

### Development Server Verification:
- Test `npm run dev` starts server successfully
- Verify src/index.html loads with styling
- Confirm CSS and JS assets are processed correctly
- Test tab navigation functionality works

### Project Structure After Unit 02:
```
mmdd-website/
├── package.json
├── vite.config.js
├── src/
│   ├── index.html
│   ├── content/ (markdown files)
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── main.js
├── dev_log/
└── ui/ (original reference)
```

## AI Interactions
Systematic foundation setup approach:
1. Set Node.js version using nvm
2. Initialize package.json with proper metadata
3. Install Vite as dev dependency
4. Create basic Vite configuration
5. Test development server and asset processing
6. Verify existing template and assets work correctly

## Files Modified
**Created:**
- package.json (project configuration and scripts)
- vite.config.js (basic Vite configuration)

**Commands to Run:**
- `nvm use 20.19.3`
- `npm init -y`
- `npm install --save-dev vite`
- `npm run dev` (to test)

## Status: Complete
Successfully set up Vite project foundation. Node.js v20.19.3 configured, package.json created with proper scripts, Vite v7.1.2 installed, and development server verified working on localhost:3000 with CSS and HTML template loading correctly.