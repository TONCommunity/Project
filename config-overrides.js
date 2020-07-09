const {
  override,
  fixBabelImports,
  useBabelRc,
  disableEsLint,
} = require("customize-cra");

module.exports = override(
  fixBabelImports("antd", {
    libraryDirectory: "es",
    style: "css",
  }),
  disableEsLint(),
  useBabelRc()
);
