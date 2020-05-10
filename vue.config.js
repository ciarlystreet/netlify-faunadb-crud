module.exports = {
  devServer: {
    proxy: {
      "^/.netlify/functions": {
        target: "http://localhost:9000",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/\\.netlify/functions": "",
        },
      },
    },
  },
};
