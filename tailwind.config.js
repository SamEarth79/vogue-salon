/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				Montserrat: ["Montserrat", "sans-serif"],
			},
			colors: {
				BG: "#f0ded6",
				DarkBlue: "#28315a",
				LightBlue: "#4062ef",
			},
		},
	},
	plugins: [],
};
