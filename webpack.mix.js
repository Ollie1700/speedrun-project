const mx = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mx
  // Copy Stencil build into resources
  .copyDirectory('stencil/www/build', 'public/js/stencil')

  // Build all JS and CSS
  .js('resources/js/app.js', 'public/js')
  .sass('resources/sass/app.scss', 'public/css')
