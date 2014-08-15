var gulp = require('gulp');

gulp.task('watch',['setWatch', 'browserSync'], function() {
  gulp.watch(global.gulpConfig.src.sass+'/**', ['sass']);
  gulp.watch(global.gulpConfig.src.images+'/**',['images']);
  gulp.watch(global.gulpConfig.src.html+'/**', ['markup']);
});