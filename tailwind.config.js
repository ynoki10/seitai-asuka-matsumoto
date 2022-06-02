module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#FFFFF0',
        black: '#333333',
        green01: '#1C7C54',
        green02: '#449365',
        green03: '#629460',
        green04: '#7FB069',
        green05: '#6BAA75',
        pale01: '#BBD8C8',
        pale02: '#C7DFCD',
        pale03: '#D0DFCC',
        pale04: '#D9E7CF',
        pale05: '#D3E5D2',
        accent: '#E8AA14',
      },
      fontFamily: {
        sans: 'Noto Sans JP, sans-serif',
        maru: 'Zen Maru Gothic, sans-serif',
      },
    },
  },
  plugins: [],
};
