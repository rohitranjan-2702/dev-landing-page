/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {},
      scale: {
        115: "1.15",
      },
      colors: {
        skillbg: "#ACACAC",
        blackk: "#000814",
        bluee: "#012852",
        greyy: "#858585",
        gray: "#C6C6C6",
        twIcon1: "#0582CA",
        gtIcon1: "#212529",
        linkIcon1: "#0466C8",
        webIcon1: "#C9184A",
        beIcon1: "#072AC8",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
