import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
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
        sans: ['var(--font-montserrat)'],
      },
      spacing: {
        '4': '4px',
        '8': '8px',
        '12': '12px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '48': '48px',
        '64': '64px',
        '96': '96px',
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
}

export default config
