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
        'bw-green-100': '#50B2C0',
        'bw-green-200': '#255D6A',
        'bw-green-300': '#0A313C',

        'bw-purple-200': '#8381D9',
        'bw-purple-300': '#2A2879',

        'bw-gray-100': '#F8F9FC',
        'bw-gray-200': '#E6E8F2',
        'bw-gray-300': '#D1D6E4',
        'bw-gray-400': '#8D95AF',
        'bw-gray-500': '#303F73',
        'bw-gray-600': '#252D4A',
        'bw-gray-700': '#181C2A',
        'bw-gray-800': '#0E1116',
      },
      backgroundImage: {
        'bw-gradient-horizontal': 'linear-gradient(90deg, rgba(127,209,204,1) 0%, rgba(150,148,245,1) 100%)',
        'bw-gradient-vertical': 'linear-gradient(180deg, rgba(127,209,204,1) 0%, rgba(150,148,245,1) 100%)'
      }
    },
  },
  plugins: [],
}
export default config
