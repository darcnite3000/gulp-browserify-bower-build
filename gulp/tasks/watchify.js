(function () {
  'use strict';

  var gulp            = require('gulp'),
      source          = require('vinyl-source-stream'),
      browserify      = require('browserify'),
      watchify        = require('watchify'),
      browserifyShim  = require('browserify-shim'),
      coffeeify       = require('coffeeify');

  module.exports = gulp.task('watchify', function() {
    var bundler = watchify(browserify({
      entries:      [config.paths.src.modules],
      extensions:   ['.coffee'],
      cache:        {},
      packageCache: {},
      fullPaths:    true,
      debug:        true
    }))
    .transform(coffeeify)
    .transform(browserifyShim)
    .on('update', rebundle);

    function rebundle() {
      return bundler.bundle()
        .pipe(source(config.filenames.build.scripts))
        .pipe(gulp.dest(config.paths.dest[config.env].scripts));
    }
    return rebundle();
  });
})();