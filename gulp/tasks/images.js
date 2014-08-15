var gulp = require('gulp'),
    changed = require('gulp-changed'),
    imagemin = require('gulp-imagemin');

gulp.task('images', function() {
    var dest = './'+global.gulpConfig.dest.images;
    return gulp.src('./'+global.gulpConfig.src.images+'/**')
      .pipe(changed(dest))
      .pipe(imagemin())
      .pipe(gulp.dest(dest));
});