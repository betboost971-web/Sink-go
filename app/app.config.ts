export default defineAppConfig({
  title: 'Sink',
  email: 'contact@cdn-tr1.com',
  github: '#',
  twitter: '#',
  telegram: '#',
  mastodon: '#',
  blog: '#',
  description: 'A Simple / Speedy / Secure Link Shortener with Analytics',
  image: '#',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
