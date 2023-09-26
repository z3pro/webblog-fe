const Alias = require("craco-alias");

module.exports = {
  experimental: {
    esmExternals: false
  },
  eslint: {
    enable: false
  },
  entry: "./src/index",
  plugins: [
    {
      plugin: Alias,
      options: {
        source: 'tsconfig',
        baseUrl: '.',
        tsConfigPath: './tsconfig.paths.json'
      }
    }
  ]
};