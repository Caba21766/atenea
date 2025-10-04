/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  corePlugins: { preflight: false },
  content: ["./dummy/**/*.html"],   // dummy para que no vacíe el CSS
  theme: {
    extend: {
      colors: {
        atenea: {
          bg1: '#fde7f3',
          bg2: '#fbd3ea',
          accent: '#ff3ad5',
          text: '#2f2f3d'
        }
      },
      boxShadow: {
        soft: '0 6px 20px rgba(0,0,0,.06)',
      },
      borderRadius: {
        'xl2': '1rem',
      }
    }
  },
  safelist: [
    // Clases que usamos abajo
    'tw-bg-white','tw-shadow-soft','tw-rounded-2xl','tw-rounded-xl','tw-border','tw-border-fuchsia-200',
    'tw-text-slate-800','tw-text-slate-900','tw-text-slate-600','tw-font-semibold',
    'tw-p-4','tw-p-5','tw-px-4','tw-py-3','tw-mb-2','tw-mb-3','tw-mb-4','tw-gap-3','tw-gap-4','tw-mt-3',
    'tw-w-1/3','tw-max-w-[1500px]','tw-overflow-hidden',
    // Gradiente del header/sección
    'tw-bg-gradient-to-b','tw-from-atenea-bg1','tw-to-atenea-bg2',
  ],
  plugins: [],
}
