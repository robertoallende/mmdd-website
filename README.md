# MMDD Website

The official website for **Micromanaged Driven Development (MMDD)** - an open-source methodology for AI-assisted software development.

🌐 **Live Site:** [mmdd.dev](https://mmdd.dev)

## About MMDD

MMDD is a systematic methodology that enables developers to use AI for every line of code while maintaining full control through:

- **Small, reviewable steps** → fewer regressions, easier rollbacks
- **Documented AI interactions** → knowledge that lasts, not just ephemeral prompts  
- **Granular control** → every change is your decision; AI stays on-script

**The result:** Maintainable, understandable, and predictable AI-assisted development.

## Website Features

- 📱 **Responsive Design** - Mobile-first with hamburger navigation and tab-folder visual metaphor
- 🔍 **SEO Optimized** - Comprehensive meta tags, structured data, XML sitemap
- 📰 **RSS Feed** - Stay updated with MMDD methodology developments
- 📊 **Analytics** - Google Analytics 4 integration for usage insights
- ⚡ **Fast Loading** - Vite-powered static site generation
- 🎨 **Custom Design** - Dark theme with golden accents and paper-like interactions

## Tech Stack

- **Build Tool:** Vite
- **Content:** Markdown with frontmatter
- **Processing:** marked (Markdown parser), gray-matter (frontmatter)
- **Styling:** Custom CSS with mobile-first responsive design
- **JavaScript:** Vanilla JS with tab navigation and mobile menu
- **Deployment:** GitHub Pages with custom domain
- **Analytics:** Google Analytics 4

## Development

### Prerequisites
- Node.js v20.19.3 (managed with nvm)
- npm v10.8.2

### Setup
```bash
# Clone the repository
git clone https://github.com/robertoallende/mmdd-website.git
cd mmdd-website

# Use correct Node.js version
nvm use 20.19.3

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Project Structure
```
src/
├── index.html          # Main HTML template
├── content/            # Markdown content files
│   ├── home.md
│   ├── how-it-works.md
│   ├── news.md
│   ├── community.md
│   └── about.md
├── css/
│   └── styles.css      # Main stylesheet
├── js/
│   └── main.js         # Tab navigation and interactions
├── images/             # Images and favicon
├── plugins/            # Custom Vite plugins
└── sitemap.xml         # SEO sitemap
```

## Built with MMDD

This website was built using the MMDD methodology itself! Every development decision, AI interaction, and implementation step is documented in the `dev_log/` directory, demonstrating MMDD in practice.

**Development Log:** 15 completed units covering everything from initial setup to comprehensive SEO implementation.

## Contributing

Interested in contributing to MMDD methodology or the website? 

- 💬 **Discussions:** [GitHub Discussions](https://github.com/robertoallende/micromanaged-driven-development/discussions)
- 🐛 **Issues:** Report bugs or suggest features via GitHub Issues
- 📖 **Documentation:** Help improve the methodology documentation

## License

This project is open source and available under the [MIT License](LICENSE).

## Connect

- **Creator:** Roberto Allende
- **LinkedIn:** [robertoallende](https://www.linkedin.com/in/robertoallende/)
- **Twitter:** [@robertoallende](https://x.com/robertoallende)
- **GitHub:** [robertoallende](https://github.com/robertoallende)

---

**Build all your code with AI — and keep full control.** 🚀
