module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        fff: '#FFFFFF',
        white: '#FFFFF0',
        black: '#333333',
        green01: '#1C7C54',
        green02: '#449365',
        green03: '#629460',
        green04: '#7FB069',
        green05: '#6BAA75',
        pale: '#F1F5E5',
        pale01: '#BBD8C8',
        pale02: '#C7DFCD',
        pale03: '#D0DFCC',
        pale04: '#D9E7CF',
        pale05: '#D3E5D2',
        accent: '#E8AA14',
        accent_65: 'rgba(232,170,20,0.65)',
        gray100: '#4d4d4d',
        gray80: '#808080',
        gray60: '#b3b3b3',
        gray40: '#e6e6e6',
        gray20: '#F3F3F3',
        gray10: '#f9f9f9',
      },
      fontFamily: {
        sans: 'Noto Sans JP, sans-serif',
        maru: 'Zen Maru Gothic, sans-serif',
      },
      fontSize: {
        xxs: '.625rem',
      },
      lineHeight: {
        relaxed: '1.8',
      },
      maxWidth: {
        '3xl': '50rem',
      },
    },
  },
  plugins: [],
};
