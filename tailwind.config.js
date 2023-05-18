/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
		borderWidth: {
			'10': '10px',
			'12': '12px',
			'16': '16px',
		},

		animation: {
			fadeIn: 'fadeIn 500ms var(--fade-delay)',
			spinny: 'spinny 500ms infinite ease-out'
		},

		keyframes: theme => ({
			fadeIn: {
				'0%': { transform: 'translate(0, 4px)', opacity: '0' },
				'100%': { transform: 'translate(0, 0)', opacity: '1' }
			},
			spinny: {
				'0%': { transform: 'rotate(0deg)' },
				'100%': { transform: 'rotate(360deg)' }
			}
		}),
	},
  },
  plugins: [],
  content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./public/index.html"],
};
