/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "backgroundColor" :{
        "orange" : "#F83007"
      },
      "height" : {
        "45" : "45px",
        "767" : "752px",
        "442" : "350px",
        "718" : "718"
      },
      "width" : {
        "567" : "567px",
        "429" : "300px",
        "236" : "180px"
      },
      "colors" : {
        "text-black" : "#212529",
        "text-orange" : "#F83007"
      },
      "spacing" : {
        "221" : "180px"
      }
    },
  },
  plugins: [],
}