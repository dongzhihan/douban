module.exports = {
  proxyList: {
    '/v2': {
      target: 'https://api.douban.com',
      pathRewrite: {
        '^/v2': '/v2'
      },
      changeOrigin: true
    }
  }
};
