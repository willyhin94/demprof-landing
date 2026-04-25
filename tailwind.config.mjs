/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1947E5',
        accent: '#FFBD12',
        danger: '#F95A2C',
        success: '#00C6AE',
        dark: '#18191F',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      borderRadius: {
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '44px',
      },
      boxShadow: {
        sm: '2px 2px 0 0 #18191F',
        md: '4px 4px 0 0 #18191F',
        lg: '0 6px 0 0 #18191F',
      },
    },
  },
  plugins: [],
};
