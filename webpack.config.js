const path = require('path');

module.exports = {
  resolve: {
    fallback: {
      http: require.resolve('stream-http'),      // Polyfill para o módulo http
      https: require.resolve('https-browserify') // Polyfill para o módulo https, se necessário
    },
  },
};
