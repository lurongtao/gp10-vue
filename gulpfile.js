const del = require('del')
const { src, dest, series, parallel, watch } = require('gulp')

function copydist() {
  return src('./maoyan/dist/*.html')
    .pipe(dest('./www'))
}

function clear(target) {
  return function() {
    return del(target)
  }
}

function watcher() {
  watch('./maoyan/dist/*.html', series(clear('./www'), copydist))
}

exports.default = series(copydist, watcher)