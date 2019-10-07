const { override, fixBabelImports, addLessLoader } = require("customize-cra")

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      "@font-family": "Open Sans",
      "@primary-color": "#189EE9",
      "@item-active-bg": "rgba(0, 194, 255, 0.15)",
      "@item-hover-bg": "rgba(0, 194, 255, 0.15)",
      "@text-color": "#272F5A",
      "@text-color-secondary": "rgba(39, 47, 90, 0.65)",
      "@black": "#272F5A",
      "@heading-color": "#272F5A",
      "@layout-body-background": "#F3F5F6"
    }
  })
)
