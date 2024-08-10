/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        // for Paragraphs
        primary: ['Lato', 'Helvetica', 'Arial', 'sans-serif'],
        // for Links
        secondary: ['Raleway', 'Georgia', 'serif'],
        // for Headings
        headings: ['Ubuntu', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
