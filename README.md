# MMDD Astro Website

The official website for **Micromanaged Driven Development (MMDD)** - an open-source methodology for AI-assisted software development. Built with Astro for modern performance and developer experience.

🌐 **Live Site:** [mmdd.dev](https://mmdd.dev)

## About MMDD

MMDD is a systematic methodology that enables developers to use AI for every line of code while maintaining full control through:

- **Small, reviewable steps** → fewer regressions, easier rollbacks
- **Documented AI interactions** → knowledge that lasts, not just ephemeral prompts  
- **Granular control** → every change is your decision; AI stays on-script

**The result:** Maintainable, understandable, and predictable AI-assisted development.

## Website Features

- 📱 **Mobile-First Design** - Responsive layout with theme-aware navigation
- 🔍 **SEO Optimized** - astro-seo integration, structured data, XML sitemap
- 📰 **RSS Feed** - Automated RSS generation from news content
- 📊 **Analytics** - Google Analytics 4 with comprehensive event tracking
- ⚡ **Astro Performance** - Static site generation with optimal loading
- 🎨 **DocKit Theme** - Modern design with light/dark mode support
- 🧩 **Component-Based** - Reusable Astro components and MDX content

## Tech Stack

- **Framework:** Astro v5.16.5
- **Theme:** DocKit (customized for MMDD)
- **Content:** Markdown/MDX with Starlight content collections
- **Styling:** Tailwind CSS with custom components
- **SEO:** astro-seo with structured data (JSON-LD)
- **RSS:** @astrojs/rss with automated content parsing
- **Analytics:** Google Analytics 4 with custom event tracking
- **Deployment:** GitHub Actions → GitHub Pages
- **Node.js:** v22.19.0

## Development

### Prerequisites
- Node.js v22.19.0+ (or v18.20.8+, v20.3.0+)
- npm (latest)

### Setup
```bash
# Clone the repository
git clone https://github.com/robertoallende/mmdd-astro-remake.git
cd mmdd-astro-remake

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Project Structure
```
src/
├── content/
│   └── docs/           # Markdown content (Starlight collections)
│       ├── index.mdx   # Home page (splash template)
│       ├── how-it-works.mdx
│       ├── news.md
│       ├── community.md
│       └── about.md
├── components/
│   ├── override-components/  # Starlight component overrides
│   ├── user-components/      # Custom components
│   ├── SEO.astro            # SEO and structured data
│   └── Analytics.astro      # GA4 event tracking
├── pages/
│   └── rss.xml.js      # RSS feed endpoint
├── styles/
│   └── global.css      # Global styles and customizations
└── config/             # Site configuration
```

## Built with MMDD

This Astro remake was built using the MMDD methodology! The complete development process is documented in 13 units within the `dev_log/` directory, demonstrating systematic AI-assisted development from initial setup to deployment.

**Development Log:** 13 completed units covering:
- Astro setup and theme integration
- Content migration from Vite-based site
- UI simplification and mobile optimization
- RSS feed and analytics implementation
- SEO optimization and deployment automation

## Key Improvements

**Over Previous Vite Version:**
- ⚡ **Better Performance** - Astro's static generation and optimizations
- 🧩 **Component Architecture** - Reusable Astro components and MDX
- 📱 **Enhanced Mobile** - Improved responsive design and navigation
- 🔍 **Advanced SEO** - Structured data, enhanced meta tags, automated sitemap
- 🤖 **Smart RSS** - Automated parsing of news content
- 📊 **Better Analytics** - Enhanced event tracking for user interactions

## Deployment

The site uses GitHub Actions for automated deployment:

```bash
# Manual deployment trigger via GitHub UI
# Workflow: .github/workflows/deploy.yml
# Target: GitHub Pages with custom domain (mmdd.dev)
```

**Deployment Features:**
- Automated Astro build process
- Comprehensive validation (HTML, CSS, JS, RSS, sitemap)
- MMDD guide integration from main repository
- Custom domain configuration

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
