module.exports = {
  content: [
    './components/**/*.{html,js}',
    './src/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './public/**/*.{html,js}',
    './index.html',
  ], //"./public/**/*.{html,js}",],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '1440px',
      },
      colors: {
        primary: {
          signUpBg: 'hsl(217, 28%, 15%)',
          mainBg: 'hsl(218, 28%, 13%)',
          footerBg: 'hsl(216, 53%, 9%)',
          testimonialsBg: 'hsl(219, 30%, 18%)',
        },
        accent: {
          cyan: 'hsl(176, 68%, 64%)',
          blue: 'hsl(198, 60%, 50%)',
          error: 'hsl(0, 100%, 63%)',
        },
        white: 'hsl(0, 0%, 100%)',
      },
      backgroundImage: {
        'curvy-desktop': "url('../images/bg-curvy-desktop.svg')",
        'curvy-mobile': "url('../images/bg-curvy-mobile.svg')",
        quotes: "url('../images/bg-quotes.png')",
      },
      fontFamily: {
        Open: "'Open Sans', sans-serif",
        Raleway: "'Raleway', sans-serif",
      },
      width: {
        85: '22rem',
      },
      borderRadius: {
        smd: '3px',
      },
      boxShadow: {
        custom: '11px 9px 7px 2px hsl(217, 28%, 15%)',
        earlyacess: '11px 9px 7px 2px hsla(217, 28%, 15%,0.5)',
      },
      fontSize: {
        'tiny': '11px',
        'ultratiny': '9px',
      },
    },
  },
  plugins: [],
}
