module.exports = {
  content: [
    "./components/**/*.{html,js}",
    "./src/**/*.{html,js}",
    "./pages/**/*.{html,js}",
    "./public/**/*.{html,js}",
    "./index.html",
  ], //"./public/**/*.{html,js}",],
  theme: {
    extend: {
      colors:{
        primary:{
          signUpBg:'hsl(217, 28%, 15%)',
          mainBg:'hsl(218, 28%, 13%)',
          footerBg:'hsl(216, 53%, 9%)',
          testimonialsBg:'hsl(219, 30%, 18%)',
        },
        accent:{
          cyan:'hsl(176, 68%, 64%)',
          blue:'hsl(198, 60%, 50%)',
          error:'hsl(0, 100%, 63%)',
        },
        white:'hsl(0, 0%, 100%)',
      }
    },
  },
  plugins: [],
};
