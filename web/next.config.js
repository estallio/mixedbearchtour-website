const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages({
  optimizeImagesInDev: true,
  responsive: {
    adapter: require('responsive-loader/sharp'),
  },
  async rewrites() {
    return [
      {
        source: '/pa/js/script.js',
        destination: 'https://plausible.io/js/plausible.js',
      },
      {
        source: '/pa/api/event',
        destination: 'https://plausible.io/api/event',
      },
    ];
  },
});
