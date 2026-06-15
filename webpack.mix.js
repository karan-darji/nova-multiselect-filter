let mix = require('laravel-mix')
const path = require('path')
require('./nova.mix')

mix
  .setPublicPath('dist')
  .js('resources/js/entry.js', 'js')
  .vue({ version: 3 })
  .css('resources/css/entry.css', 'css')
  .nova('outl1ne/nova-multiselect-filter');
