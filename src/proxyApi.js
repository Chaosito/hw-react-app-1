const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://run.mocky.io/v3/f93c2435-cf15-4439-9231-8cdafdcd46a8',
      changeOrigin: true,
      "secure": false
    })
  );
};
