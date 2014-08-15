var gulp = require('gulp');

gulp.task('markup', function() {
    return gulp.src(global.gulpConfig.src.html+'/**')
    .pipe(gulp.dest(global.gulpConfig.dest.html));
});