import react from "@vitejs/plugin-react-swc";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
    extend: {},
  },
  plugins: [react()],
}

