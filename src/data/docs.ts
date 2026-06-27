export const docsParentCategories = [
  {
    slug: 'how-it-works',
    name: 'How It Works',
    description: 'Learn how MMDD works — the 5-step cycle, unit structure, and AI collaboration patterns.',
  },
  {
    slug: 'updates',
    name: 'Updates',
    description: 'News, changelog, and recent developments in the MMDD project.',
  },
  {
    slug: 'about',
    name: 'About',
    description: 'About the project, community, and how to get involved.',
  },
] as const;

export const docsCategories = [
  {
    name: 'How It Works',
    slug: 'how-it-works',
    parent: 'methodology',
    description: 'The MMDD workflow, step by step.',
  },
  {
    name: 'News',
    slug: 'news',
    parent: 'updates',
    description: 'Latest updates and announcements.',
  },
  {
    name: 'About',
    slug: 'about-mmdd',
    parent: 'about',
    description: 'What MMDD is and who it is for.',
  },
  {
    name: 'Community',
    slug: 'community',
    parent: 'about',
    description: 'Community resources and contributions.',
  },
] as const;

export type DocsParentSlug = (typeof docsParentCategories)[number]['slug'];
export type DocsCategorySlug = (typeof docsCategories)[number]['slug'];

export function getParentForCategory(categorySlug: string) {
  return docsCategories.find((c) => c.slug === categorySlug)?.parent;
}

export function getCategoriesForParent(parentSlug: string) {
  return docsCategories.filter((c) => c.parent === parentSlug);
}

export function getCategoryHref(categorySlug: string) {
  const parentSlug = getParentForCategory(categorySlug);
  return parentSlug ? `/${parentSlug}/${categorySlug}` : `/${categorySlug}`;
}

export type SidebarSection = {
  name: string;
  slug: string;
  href: string;
};

export function getSidebarSections(parentSlug: string): SidebarSection[] {
  return getCategoriesForParent(parentSlug).map((section) => ({
    name: section.name,
    slug: section.slug,
    href: getCategoryHref(section.slug),
  }));
}
