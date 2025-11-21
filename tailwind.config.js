// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  // Aquí le decimos a Tailwind que escanee todos tus archivos en la carpeta src
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}