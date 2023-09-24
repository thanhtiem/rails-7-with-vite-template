// /** @type {import('tailwindcss').Config} */
// const colors = require('tailwindcss/colors');
// const defaultTheme = require('tailwindcss/defaultTheme');

// module.exports = {
//   content: [
//     './app/helpers/**/*.rb',
//     './app/assets/stylesheets/**/*.css',
//     './app/views/**/*.{html,html.erb,erb,slim}',
//     './app/javascript/**/*.js',
//     './node_modules/flowbite/**/*.js',
//   ],
//   theme: {
//     fontFamily: {
//       sans: [
//         'BlinkMacSystemFont',
//         'Avenir Next',
//         'Avenir',
//         'Nimbus Sans L',
//         'Roboto',
//         'Noto Sans',
//         'Segoe UI',
//         'Arial',
//         'Helvetica',
//         'Helvetica Neue',
//         'sans-serif',
//       ],
//       mono: [
//         'Consolas',
//         'Menlo',
//         'Monaco',
//         'Andale Mono',
//         'Ubuntu Mono',
//         'monospace',
//       ],
//     },
//     extend: {},
//   },
//   corePlugins: {
//     aspectRatio: false,
//   },
//   plugins: [
//     // require('@tailwindcss/typography'),
//     // require('@tailwindcss/forms'),
//     // require('@tailwindcss/aspect-ratio'),
//     require('flowbite/plugin'),
//   ],
//   autocomplete: {
//     classes: true,
//   },
//   separator: '_',
// };

module.exports = {
  content: [
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
