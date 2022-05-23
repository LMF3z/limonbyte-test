module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        red_base: '#f40100',
        green_base: '#06a107',
        gray_input: '#ebe9e6',
        gray_text: '#757574',
        bg_black: 'rgba(0,0,0,0.5)',
      },
      spacing: {
        '20vh': '20vh',
        '30vh': '30vh',
        '35vh': '35vh',
        '40vh': '40vh',
        '50vh': '50vh',
        '60vh': '60vh',
        '70vh': '70vh',
        '80vh': '80vh',
        '95vh': '95vh',
        '90vh': '90vh',
        '95%': '95%',
        '90%': '90%',
      },
      backgroundImage: {
        header_bg: 'url(/src/assets/images/header_bg_image.jpg)',
        register_bg: 'url(/src/assets/images/bg-register.png)',
      },
      gridTemplateRows: {
        // Simple 8 row grid
        9: 'repeat(9, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
};
