const withSass = require('@zeit/next-sass');

module.exports = withSass({
  target: 'serverless',
  exportTrailingSlash: false,
  cssModules: true,
  // distDir: 'build',
  exportPathMap: () => ({
    '/': { page: '/' },
    '/standorte.html': { page: '/standorte' },
    '/termine.html': { page: '/termine' },
    '/regeln.html': { page: '/regeln' },
    '/preise.html': { page: '/preise' },
    '/partner.html': { page: '/partner' },
    '/kontakt.html': { page: '/kontakt' },
    '/datenschutz.html': { page: '/datenschutz' },
    '/impressum.html': { page: '/impressum' },
    '/anmelden.html': { page: '/anmelden' }
  })
});
