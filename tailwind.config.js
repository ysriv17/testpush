const { nextui } = require('@nextui-org/theme');
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
        "2xl": "1300px",
        "2.5xl": "1400px",
        "3xl": "1500px",
        "4xl": "1600px",
        "5xl": "1900px",
        "6xl": "2560px",
        "ml": "767px"
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

        "primary-purple": "#9197B3",

        "primary-gray": "#AEACAC",
        "primary-gray-dk": "#DBDBDB",
        "primary-gray-lt": "#C8C8C8",
        "primary-gray-ltr": "#D9D9D9",
        "primary-gray-lt-ltr": "#676767",

        "secondary-gray-dkr": "#858C94",
        "secondary-gray": "#9D9D9D",
        "secondary-gray-dk": "#949494",
        "secondary-gray-lt": "#6C6C72",
        "secondary-gray-ltr": "#5A5A5A",

        "ternary-gray-dkr": "#B6B6B6",
        "ternary-gray": "#E0E0E0",
        "ternary-gray-dk": "#B8B8B8",
        "ternary-gray-lt": "#C4C4C4",
        "ternary-gray-ltr": "#EBEBEE",

        "primary-white": "#EEEEEE",
        "primary-white-lt": "#E4E5E7",
        "primary-white-ltr": "#74767E",

        "secondary-white": "#F5F9FF",
        "secondary-white-lt": "#EBEBEB",
        "secondary-white-dk": "#F8F8F8",

        "ternary-white": "#F0F0F0",
        "ternary-white-dk": "#FAFAFA",

        "primary-red": "#FF4B26",
        "secondary-red": "#FF0000",
        "ternary-red": "#F30505",

        "primary-black": "#181818",
        "secondary-black": "#364152",

        "ternary-green": "#9AAA97",
      },
    },
    keyframes: {
      overlayShow: {
        from: { opacity: 0 },
        to: { opacity: 1 },

      },
      contentShow: {
        from: { opacity: 0, transform: "translate(-50%, -48%) scale(0.96)" },
        to: { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
      },
      slideDownAndFade: {
        from: { opacity: '0', transform: 'translateY(-2px)' },
        to: { opacity: '1', transform: 'translateY(0)' },
      },
      slideLeftAndFade: {
        from: { opacity: '0', transform: 'translateX(2px)' },
        to: { opacity: '1', transform: 'translateX(1px) rotate(90deg)', },
      },
      slideUpAndFade: {
        from: { opacity: '0', transform: 'translateY(2px)' },
        to: { opacity: '1', transform: 'translateY(0)' },
      },
      slideRightAndFade: {
        from: { opacity: '0', transform: 'translateX(-2px)' },
        to: { opacity: '1', transform: 'translateX(0)' },
      },

    },
    animation: {
      overlayShow: "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
      contentShow: "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
      slideDownAndFade: 'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      slideLeftAndFade: 'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      slideRightAndFade: 'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',

    },
  },
  plugins: [nextui()],
};
