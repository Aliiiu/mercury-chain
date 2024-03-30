import type { Config } from 'tailwindcss';

const config = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	prefix: '',
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				player: '#A2C89136',
				'iq-code': '#1A202C',
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				quotes: {
					DEFAULT: 'hsla(var(--quotes))',
				},
				footer: {
					DEFAULT: 'hsla(var(--footer))',
				},
				tablist: {
					DEFAULT: 'hsla(var(--tablist))',
				},
				'blog-pointer': {
					DEFAULT: 'hsla(var(--blog-pointer))',
				},
				'scroll-area': {
					DEFAULT: 'hsla(var(--scroll-area))',
				},
			},
			backgroundImage: {
				banner: 'url(/images/banner.webp)',
				hero: 'url(/images/hero.webp)',
				'latest-news': 'url(/images/latest-news.webp)',
				'gradient-button':
					'linear-gradient(265.77deg, #FFC75D -7.46%, #D63154 34.2%, #F84033 76.27%, #8F42AC 114.49%)',
				'gradient-border':
					'linear-gradient(95deg, #C6416C 7.35%, #F03C3A 35.6%, #D73152 68.31%, #F6A65B 87.82%)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
