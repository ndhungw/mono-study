module.exports = {
  ...require("./../../../.prettierrc.js"),
  plugins: [require("prettier-plugin-tailwindcss")],
  tailwindConfig: "./tailwind.config.js",
};
