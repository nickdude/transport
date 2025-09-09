/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./website/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    "bg-glowingGreen",
    "text-black",
    "text-white",
    "bg-darkblue",
    "bg-blue",
    "bg-orange",
    "bg-lightOrange",
    "bg-paleBlue",
  ],
  theme: {
    extend: {
      colors: {
        "darkblue": "#1E3A6D",
        "glowingGreen": "#2FF679",
        "blue": "#005EB8",
        "lightGrey": "#F2F2F2",
        "darkGrey": "#CCCCCC",
        "orange": "#FF6B35",
        "lightOrange": "#FF8A60",
        "paleBlue": "#E6EFF8",
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        saira: ['"Saira Semi Condensed"', 'sans-serif'],
      },
      boxShadow: {
        custom: "0px 10px 10px -3.75px #691F0821",
        fancy: "0px 10px 10px -3.75px #691F0821, 0px 2.29px 2.29px -2.5px #691F0852, 0px 0.6px 0.6px -1.25px #691F085C",
      },
    },
  },
  plugins: [],
};
