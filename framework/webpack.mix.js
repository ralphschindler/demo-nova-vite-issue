let mix = require('laravel-mix')

mix
  .js('main.js', 'dist')
  .vue({ version: 3 })
  .sourceMaps()
