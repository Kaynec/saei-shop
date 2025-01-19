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

const colors = ["red", "grey", "orange"];

const safeColours = colors.flatMap((color) => {
  const list = [];

  for (let color of colors) {
    list.push(...getPossibleStates(color, 50));
  }

  for (let i = 1; i < 9; i++) {
    list.push(...getPossibleStates(color, i * 100));
  }
  return list;
});
// tailwind.config.js
module.exports = {
  safelist: [...safeColours],

  theme: {
    extend: {
      colors: tailwindColors,
    },
  },
  plugins: [require("tailwindcss-primeui"), require("@tailwindcss/typography")],
};

function getPossibleStates(color: string, variant: number) {
  return [
    // Base state
    `bg-${color}-${variant}`,
    `text-${color}-${variant}`,
    `border-${color}-${variant}`,

    // Hover states
    `hover:bg-${color}-${variant}`,
    `hover:text-${color}-${variant}`,
    `hover:border-${color}-${variant}`,

    // Focus states
    `focus:bg-${color}-${variant}`,
    `focus:text-${color}-${variant}`,
    `focus:border-${color}-${variant}`,

    // Active states
    `active:bg-${color}-${variant}`,
    `active:text-${color}-${variant}`,
    `active:border-${color}-${variant}`,

    // Disabled states
    `disabled:bg-${color}-${variant}`,
    `disabled:text-${color}-${variant}`,
    `disabled:border-${color}-${variant}`,

    // Group states
    `group-hover:bg-${color}-${variant}`,
    `group-hover:text-${color}-${variant}`,
    `group-hover:border-${color}-${variant}`,
    `group-focus:bg-${color}-${variant}`,
    `group-focus:text-${color}-${variant}`,
    `group-focus:border-${color}-${variant}`,

    // Responsive states
    `sm:bg-${color}-${variant}`,
    `sm:text-${color}-${variant}`,
    `sm:border-${color}-${variant}`,
    `sm:hover:bg-${color}-${variant}`,
    `sm:hover:text-${color}-${variant}`,
    `sm:hover:border-${color}-${variant}`,
    `sm:focus:bg-${color}-${variant}`,
    `sm:focus:text-${color}-${variant}`,
    `sm:focus:border-${color}-${variant}`,
    `sm:active:bg-${color}-${variant}`,
    `sm:active:text-${color}-${variant}`,
    `sm:active:border-${color}-${variant}`,

    `md:bg-${color}-${variant}`,
    `md:text-${color}-${variant}`,
    `md:border-${color}-${variant}`,
    `md:hover:bg-${color}-${variant}`,
    `md:hover:text-${color}-${variant}`,
    `md:hover:border-${color}-${variant}`,
    `md:focus:bg-${color}-${variant}`,
    `md:focus:text-${color}-${variant}`,
    `md:focus:border-${color}-${variant}`,
    `md:active:bg-${color}-${variant}`,
    `md:active:text-${color}-${variant}`,
    `md:active:border-${color}-${variant}`,

    `lg:bg-${color}-${variant}`,
    `lg:text-${color}-${variant}`,
    `lg:border-${color}-${variant}`,
    `lg:hover:bg-${color}-${variant}`,
    `lg:hover:text-${color}-${variant}`,
    `lg:hover:border-${color}-${variant}`,
    `lg:focus:bg-${color}-${variant}`,
    `lg:focus:text-${color}-${variant}`,
    `lg:focus:border-${color}-${variant}`,
    `lg:active:bg-${color}-${variant}`,
    `lg:active:text-${color}-${variant}`,
    `lg:active:border-${color}-${variant}`,

    `xl:bg-${color}-${variant}`,
    `xl:text-${color}-${variant}`,
    `xl:border-${color}-${variant}`,
    `xl:hover:bg-${color}-${variant}`,
    `xl:hover:text-${color}-${variant}`,
    `xl:hover:border-${color}-${variant}`,
    `xl:focus:bg-${color}-${variant}`,
    `xl:focus:text-${color}-${variant}`,
    `xl:focus:border-${color}-${variant}`,
    `xl:active:bg-${color}-${variant}`,
    `xl:active:text-${color}-${variant}`,
    `xl:active:border-${color}-${variant}`,

    `2xl:bg-${color}-${variant}`,
    `2xl:text-${color}-${variant}`,
    `2xl:border-${color}-${variant}`,
    `2xl:hover:bg-${color}-${variant}`,
    `2xl:hover:text-${color}-${variant}`,
    `2xl:hover:border-${color}-${variant}`,
    `2xl:focus:bg-${color}-${variant}`,
    `2xl:focus:text-${color}-${variant}`,
    `2xl:focus:border-${color}-${variant}`,
    `2xl:active:bg-${color}-${variant}`,
    `2xl:active:text-${color}-${variant}`,
    `2xl:active:border-${color}-${variant}`,
  ];
}
