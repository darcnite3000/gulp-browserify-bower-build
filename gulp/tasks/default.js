(function () {
  'use strict';
  var gulp          = require('gulp'),
      runSequence   = require('run-sequence');

  module.exports = gulp.task('default',function() {
    if(config.env === 'release'){
      runSequence(
        'clean',
        ['index','styles','assets'],
        'browserify',
        'serve'
      );
    }else{
      config.watch = true;
      runSequence(
        'clean',
        ['index','styles','assets'],
        ['watchify','watch','serve']
      );
    }
  });
})();