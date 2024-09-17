/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
			colors: {
				primary: '#28539c',
				secondary: '#1D4ED8',
				accent: '#10B981'
			},
		},
  },
  darkMode: 'selector',
  plugins: [],
}

