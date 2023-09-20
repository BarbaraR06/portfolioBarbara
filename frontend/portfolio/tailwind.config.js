module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', 
  'node_modules/preline/dist/*.js',
  './src/**/*.{html,js}'],
  plugins: [require('daisyui'), 
  require('preline/plugin'),
],

  
};
