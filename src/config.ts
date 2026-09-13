export interface GiscusConfig {
  enabled: boolean;
  repo: string;
  repoId: string;
  category: string;
  categoryId: string;
  mapping: 'pathname' | 'url' | 'title' | 'og:title' | 'slug';
  reactionsEnabled: boolean;
  emitMetadata: boolean;
  inputPosition: 'top' | 'bottom';
  theme: string;
  lang: string;
  loading: 'lazy' | 'eager';
}

export interface SiteConfig {
  title: string;
  siteName: string;
  author: string;
  description: string;
  tagline: string;
  avatarBio: string;
  navLinks: { label: string; href: string }[];
  socialLinks: { label: string; href: string }[];
  postsPerPage: number;
  giscus?: GiscusConfig;
}

export const siteConfig: SiteConfig = {
  title: "Thomas Miller — Writing on Quiet Technology",
  siteName: "many things one mind",
  author: "Thomas Miller",
  description: "Quiet technology, digital minimalism, and the lasting design principles of analog tools.",
  tagline: "Writing on quiet technology, digital minimalism, and the lasting design principles of analog tools in a loud world.",
  avatarBio: "Quiet technology, digital minimalism, and the lasting design principles of analog tools.",
  navLinks: [
    { label: "About", href: "/about" },
    { label: "Archive", href: "/archive" },
    { label: "Now", href: "/now" },
    { label: "Contact", href: "/contact" }
  ],
  socialLinks: [
    { label: "RSS", href: "/rss.xml" },
    { label: "Twitter", href: "https://twitter.com" },
    { label: "GitHub", href: "https://github.com" }
  ],
  postsPerPage: 10,
  giscus: {
    enabled: true,
    repo: "dextro-gear/blog-template",
    repoId: "R_kgDOUYRhog",
    category: "Announcements",
    categoryId: "DIC_kwDOUYRhos4DFd3y",
    mapping: "pathname",
    reactionsEnabled: true,
    emitMetadata: true,
    inputPosition: "top",
    theme: "noborder_light",
    lang: "en",
    loading: "lazy"
  }
};
