const tailwindColors = {
  red: {
    50: "rgb(244 234 239 / <alpha-value>)",
    100: "rgb(220 189 206 / <alpha-value>)",
    200: "rgb(203 157 182 / <alpha-value>)",
    300: "rgb(179 113 149 / <alpha-value>)",
    400: "rgb(165 85 129 / <alpha-value>)",
    500: "rgb(142 43 97 / <alpha-value>)",
    600: "rgb(129 39 88 / <alpha-value>)",
    700: "rgb(101 31 69 / <alpha-value>)",
    800: "rgb(78 24 53 / <alpha-value>)",
    900: "rgb(60 18 41 / <alpha-value>)",
  },
  yellow: {
    50: "rgb(255 247 237 / <alpha-value>)",
    100: "rgb(254 230 199 / <alpha-value>)",
    200: "rgb(254 218 172 / <alpha-value>)",
    300: "rgb(254 201 134 / <alpha-value>)",
    400: "rgb(253 191 111 / <alpha-value>)",
    500: "rgb(253 175 75 / <alpha-value>)",
    600: "rgb(230 159 68 / <alpha-value>)",
    700: "rgb(180 124 53 / <alpha-value>)",
    800: "rgb(139 96 41 / <alpha-value>)",
    900: "rgb(106 74 32 / <alpha-value>)",
  },
  grey: {
    50: "rgb(234 234 234 / <alpha-value>)",
    100: "rgb(190 190 190 / <alpha-value>)",
    200: "rgb(159 159 159 / <alpha-value>)",
    300: "rgb(115 115 115 / <alpha-value>)",
    400: "rgb(88 88 88 / <alpha-value>)",
    500: "rgb(46 46 46 / <alpha-value>)",
    600: "rgb(42 42 42 / <alpha-value>)",
    700: "rgb(33 33 33 / <alpha-value>)",
    800: "rgb(25 25 25 / <alpha-value>)",
    900: "rgb(19 19 19 / <alpha-value>)",
  },
};

// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: tailwindColors,
    },
  },
  plugins: [require("tailwindcss-primeui")],
};
