/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      

      'md': '868px',
     

      'lg': '1166px',
     

      'xl': '1450px',
     

      '2xl': '1536px',
      
    },

    colors : {
      primary : '#E41B23',
      primarydark : '#CA161D',
      primarylight : '#FCE8E9',
      primaryNF : '#EEF8FA',
      primaryHover : '#E05D00',
      accent : '#B9E2EB',
      white : '#FFFFFF',
      black : '#000000',
    },

    fontFamily : {
      'body' : ['Roboto'],
      'heading' : ['Roboto'], 
    },

    fontWeight : {
      'regular' : 400,
      'medium' : 500,
      'semi-bold' : 600,
      'bold' : 700,
    },

    fontSize : {
      large01 : 72,
      large02 : 56,
      large03 : 42,
      medium : 24,
      small01 : 18,
      small02 : 16,
      small03 : 14,
    },

    


    extend: {

      boxShadow: {
        nvshad: '0px 1px 4px 0px rgba(25, 33, 61, 0.16)',
        btnshad: '0px 1.25px 5px 0px rgba(25, 33, 61, 0.08)',
        fshadow01: '0px 8px 50px rgba(0, 0, 0, 0.25)',

        prodCard : '0px 4px 7px 0px rgba(0, 0, 0, 0.20)',

        inputfild : '0px 1px 4px 0px rgba(25, 33, 61, 0.08)',
        
      },

      fontFamily: {
        sans: ['Roboto', 'sans-serif'], 
      },

    },
    
  },
  plugins: [],
}

