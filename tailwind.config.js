/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./node_modules/flowbite/**/*.js',
		'./node_modules/flowbite-react/**/*.js',
		'./pages/**/*.js',
		'./components/**/*.js',
		'./public/**/*.html',
	],
	theme: {
		extend: {},
	},
	plugins: [require('flowbite/plugin')],
};
