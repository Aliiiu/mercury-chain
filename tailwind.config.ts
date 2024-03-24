import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				'primary-light': '#C6FFD7',
				'primary-dark': '#415953',
				primary: '#518A79',
				'grey-100': '#F3F5F6',
				'grey-200': '#E1E6ED',
				'grey-300': '#C8D2DF',
				'grey-800': '#313C49',
				'grey-900': '#1F2126',
				'blog-pointer': '#00A6ED',
				brand: '#150E28',
				footer: '#121212',
				header: '#313C49',
			},
			backgroundImage: {
				banner: "url('/images/banner.png')",
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'gradient-button':
					'linear-gradient(265.77deg, #FFC75D -7.46%, #D63154 34.2%, #F84033 76.27%, #8F42AC 114.49%)',
			},
		},
	},
	plugins: [],
};
export default config;
