import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
			zinc: {
				50: "#fafafa",
				100: "#f6f6f6",
				200: "#e4e4e7",
				300: "#d4d4d8",
				400: "#a1a1aa",
				500: "#71717a",
				600: "#52525b",
				700: "#3f3f46",
				800: "#27272a",
				900: "#18181b",
				950: "#09090b",
			},

			accessgroup: {
				50: "#fafafa",
				100: "#f6f6f6",
				200: "#e4e4e7",
				300: "#d4d4d8",
				400: "#a1a1aa",
				500: "#71717a",
				600: "#52525b",
				700: "#3f3f46",
				800: "#27272a",
				900: "#18181b",
				950: "#09090b",
			},

			base: {
				black: "#000000",
				white: "#ffffff",
			},

  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: '#E72B2D',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'zinc.100',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		maxWidth: {
  			'none': 'none',
  			'xs': '20rem',      // 320px
  			'sm': '24rem',      // 384px
  			'md': '28rem',      // 448px
  			'lg': '32rem',      // 512px
  			'xl': '36rem',      // 576px
  			'2xl': '42rem',     // 672px
  			'3xl': '48rem',     // 768px
  			'4xl': '56rem',     // 896px
  			'5xl': '64rem',     // 1024px
  			'6xl': '72rem',     // 1152px
  			'7xl': '80rem',     // 1280px
  			'full': '100%',
  			'min': 'min-content',
  			'max': 'max-content',
  			'fit': 'fit-content',
  			'prose': '65ch',
  			'screen-sm': '640px',
  			'screen-md': '768px',
  			'screen-lg': '1024px',
  			'screen-xl': '1280px',
  			'screen-2xl': '1536px',
  			'container': '1440px',
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
