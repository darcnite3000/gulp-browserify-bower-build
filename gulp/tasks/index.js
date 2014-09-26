(function () {
  'use strict';
  var gulp = require('gulp');
  module.exports = gulp.task('index', function() {
    return gulp.src(config.paths.src.index)
      .pipe(gulp.dest(config.paths.dest[config.env].index));
  });
})();