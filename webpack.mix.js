let path = require('path');
let mix = require('laravel-mix');
let postcss = require('postcss-import');
let tailwindcss = require('tailwindcss');

mix.extend('nova', new require('laravel-nova-devtool'));

mix
  .setPublicPath('dist')
  .js('resources/js/entry.js', 'js')
  .vue({ version: 3 })
  .nova('outl1ne/nova-multiselect-filter')
  .postCss('resources/css/entry.css', 'dist/css/', [postcss(), tailwindcss('tailwind.config.js')])
  .alias({
    '@': 'vendor/laravel/nova/resources/js/',
  })
  .webpackConfig({
    resolve: {
      alias: {
        'laravel-nova': path.resolve(__dirname, './node_modules/laravel-nova/dist/index.js'),
      },
    },
  });
