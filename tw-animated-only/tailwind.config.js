/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dummy/**/*.html"],   // dummy para que no vacíe el CSS
  theme: { extend: {} },
  corePlugins: { preflight: false }, // ⬅️ no pisa Bootstrap
  safelist: [
    { pattern: /^animate-/ },
    { pattern: /^animate-(once|infinite)$/ },
    { pattern: /^animate-delay-\d+$/ },
    { pattern: /^animate-duration-\d+$/ },
  ],
  plugins: [ require('tailwindcss-animated') ],
}
