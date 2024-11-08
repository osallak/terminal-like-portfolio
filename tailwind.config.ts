import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        tronBlue: '#00FFF6',
        tronBackground: '#0A0A0A',
        tronAccent: '#1B8CD8',
        tronText: '#00FFF6',
        tronGray: '#3E4C59',
        background: '#ffffff', // default light background
        foreground: '#171717', // default light foreground
      },
      fontFamily: {
        body: ['Inconsolata', 'monospace'], 
        display: ['Inconsolata', 'monospace'],
      },
    },
  },
  plugins: [],
} satisfies Config;
