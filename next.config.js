const withSass = require('@zeit/next-sass');

module.exports = withSass({
  cssModules: true,
  exportTrailingSlash: false,
  exportPathMap: function() {
    return {
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
    };
  }
});
