var gulp = require('gulp'),
    browserSync = require('browser-sync');

gulp.task('browserSync',['build'], function() {
    browserSync.init(global.gulpConfig.bsync.src,global.gulpConfig.bsync.opts);
});