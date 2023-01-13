const colors = require("tailwindcss/colors");
const { fontWeight, fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Urbanist", ...fontFamily.sans],
    },
    fontWeight: {
      semibold: fontWeight.semibold,
      normal: fontWeight.normal,
    },
    colors: {
      // Primary / Neutrals
      slate: colors.slate,
      // Supporting
      lime: colors.lime,
      white: colors.white,
      transparent: colors.transparent,
      inherit: colors.inherit,
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
