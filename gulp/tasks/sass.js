var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-ruby-sass'),
    cssjoin = require('gulp-cssjoin'),
    csscomb = require('gulp-csscomb');

gulp.task('sass',['images'], function() {
    return gulp.src(global.gulpConfig.src.sass+'/*.{sass,scss}')
      .pipe(sass({
        compass: true,
        bundleExec: true,
        sourcemap: global.gulpConfig.isWatching,
        sourcemapPath: '../'+global.gulpConfig.srcmap.sass
      }))
      .on('error',gutil.log.bind(gutil, 'Sass Error'))
      .pipe(cssjoin({
        paths: ['./'+global.gulpConfig.src.sass]
      }))
      .pipe(csscomb())
      .pipe(gulp.dest(global.gulpConfig.dest.sass));
});