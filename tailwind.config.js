/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          100: '#202024',
          200: '#121214'
        },
        primary: {
          100: '#F5B8C6',
          200: '#DC4266'
        }
      }
    }
  },
  plugins: []
}
