module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  mode: "jit",
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        mf: "990px",
      },
      keyframes: {
        "slide-in-left": {
          "0%": {
            "-webkit-transform": "translateX(120%)",
            transform: "translateX(120%)",
          },
          "100%": {
            "-webkit-transform": "translateX(0%)",
            transform: "translateX(0%)",
          },
        },
        "slide-in-right": {
          "0%": {
            "-webkit-transform": "translateX(0%)",
            transform: "translateX(0%)",
          },
          "100%": {
            "-webkit-transform": "translateX(120%)",
            transform: "translateX(120%)",
          },
        },
        "news-line":{
          "0%":{
            transform: "translateX(100%)",
          },
          "100%":{
            transform: "translateX(-100%)",
          },
        }
      },
      animation: {
        "slide-in-left": "slide-in-left 0.5s ease-out",
        "slide-in-right": "slide-in-right 2s ease-out",
        "news-line": "news-line 120.181s linear 0s infinite both ",
      },
      container:{
        center:true,
        padding:{
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        }
      },
      colors:{
        primary:'#525E75',
        secondary:'#c2aeb9',
        third:'#78938A',
        forth:'#92BA92',
      }
    },
  },
  variants: {
    extend: {},
  }
};

