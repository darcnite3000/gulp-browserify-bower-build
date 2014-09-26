(function () {
  'use strict';
  var gulp          = require('gulp'),
      autoprefixer  = require('gulp-autoprefixer'),
      sass          = require('gulp-ruby-sass');
  function handleError(err) {
    console.log(err.toString());
    this.emit('end');
  }

  module.exports = gulp.task('styles', function() {
    return gulp.src(config.paths.src.styles)
      .pipe(sass({compass:true,sourcemapPath: '.'}).on('error',handleError))
      .pipe(autoprefixer('last 1 version'))
      .pipe(gulp.dest(config.paths.dest[config.env].styles));
  });
})();