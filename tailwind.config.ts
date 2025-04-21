module.exports = {
    theme: {
      extend: {
        animation: {
          fadeInLeft: 'fadeInLeft 1s ease-out',
          fadeInRight: 'fadeInRight 1s ease-out',
        },
        keyframes: {
          fadeInLeft: {
            '0%': { opacity: 0, transform: 'translateX(-20px)' },
            '100%': { opacity: 1, transform: 'translateX(0)' },
          },
          fadeInRight: {
            '0%': { opacity: 0, transform: 'translateX(20px)' },
            '100%': { opacity: 1, transform: 'translateX(0)' },
          },
        },
      },
    },
  }