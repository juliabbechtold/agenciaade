const withCSS = require("@zeit/next-css");
const withPlugins = require("next-compose-plugins");
const path = require("path");

const nextConfig = {
  env: {
    spaceID: process.env.spaceID,
    accessTokenDelivery: process.env.accessTokenDelivery,
  },
  distDir: ".next",
};

const plugins = [
  withCSS({
    webpack: (config) => {
      // Alias
      config.resolve.alias["~"] = path.resolve(__dirname + "/src");
      return config;
    },
  }),
];

module.exports = withPlugins(plugins, nextConfig);

module.exports = {
  images: {
    deviceSizes: [320, 450, 600],
  },
};
