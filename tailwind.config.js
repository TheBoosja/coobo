/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "shadow-inner-slide": (value) => ({
            "box-shadow": `inset 6.5em 0 0 0 ${value}`,
          }),
        },
        {
          values: flattenColorPalette(theme("colors")),
          type: ["color", "any"],
        }
      );
    }),
  ],
};
