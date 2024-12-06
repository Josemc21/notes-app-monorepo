const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:3001', // Cambia esta URL si es necesario
      changeOrigin: true,
    })
  )
}