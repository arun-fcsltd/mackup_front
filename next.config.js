// next.config.js
module.exports = {
    images: {
      domains: [''], // Add your external domains here
    },
    webpack: (config, { dev }) => {
      if (!dev) {
        config.module.rules.forEach(rule => {
          if (rule.test && rule.test.toString().includes('.css')) {
            rule.use.forEach(loader => {
              if (loader.loader === 'css-loader' && loader.options) {
                delete loader.options.sourceMap;
              }
            });
          }
        });
      }
      return config;
    },
  };
  