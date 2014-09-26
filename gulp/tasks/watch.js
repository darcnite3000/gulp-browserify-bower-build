(function () {
  'use strict';
  var gulp              = require('gulp'),
      livereload        = require('gulp-livereload'),
      livereloadServer  = livereload(config.ports.livereloadServer);
  module.exports = gulp.task('watch', function() {
    config.watch = true;
    gulp.watch(config.paths.src.livereload).on('change', function(file) {
      livereloadServer.changed(file.path);
    });

    gulp.watch([config.paths.src.index], ['index']);
    gulp.watch([config.paths.src.stylesGlob], ['styles']);
  });
})();