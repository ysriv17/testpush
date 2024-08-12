
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/[object Object].js"
  ],
  theme: {
    extend: {
      screens: {
        xxs: "375px",
        xs: "400px",
        xl: "1200px",

      },
      colors: {
        "primary-blue-dkr": "#01162d",
        "primary-blue": "#001936",
        "primary-blue-dk": "#021C38",
        "primary-blue-lt": "#011E4D",
        "primary-blue-ltr": "#002D55",

        "secondary-blue": "#012C4D",
        "secondary-blue-dk": "#093253",
        "secondary-blue-lt": "#04315A",
        "secondary-blue-ltr": "#04254b",
        "secondary-blue-lt-ltr": "#2A76BA",

        "ternary-blue-dkr": "#407BFF",
        "ternary-blue": "#1E88E5",
        "ternary-blue-dk": "#252B42",
        "ternary-blue-lt": "#E0F1FF",
        "ternary-blue-ltr": "#4484FE",
        "ternary-blue-lt-ltr": "#57A8DF",



        "ternary-gray-dkr": "#B6B6B6",
        "ternary-gray": "#E0E0E0",
        "ternary-gray-dk": "#B8B8B8",
        "ternary-gray-lt": "#C4C4C4",
        "ternary-gray-ltr": "#EBEBEE",



        "primary-black": "#181818",
        "secondary-black": "#364152",

        "ternary-green": "#9AAA97",
      },
    },
  },
  plugins: [],
};
