var gulp = require('gulp'),
    gutil = require('gulp-util'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    bundleLogger = require('../util/bundleLogger'),
    source = require('vinyl-source-stream'),
    coffeeify = require('coffeeify'),
    browserifyShim = require('browserify-shim');

gulp.task('browserify', function() {
  var src = './'+global.gulpConfig.src.js+'/app.js',
      dest = './'+global.gulpConfig.dest.js+'/',
      isWatching = global.gulpConfig.isWatching;
  var bundler;
  if(isWatching){
    var opts = watchify.args
    opts.debug = true;
    bundler = watchify(browserify(src,opts));
  }else{
    bundler = browserify(src);
  }

  var bundle = function() {
    bundleLogger.start();
    return bundler
      .transform(browserifyShim)
      .transform(coffeeify)
      .bundle()
      .on('error',gutil.log.bind(gutil, 'Browserify Error'))
      .pipe(source('app.js'))
      .pipe(gulp.dest(dest))
      .on('end', bundleLogger.end)
  };
  if(isWatching){
    bundler.on('update',bundle);
  }

  return bundle();
});
