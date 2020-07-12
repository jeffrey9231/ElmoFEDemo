module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
  transformIgnorePatterns: [
    "node_modules/(^generic-)/i",
    "node_modules/react-infinite-scroller",
  ],
};
