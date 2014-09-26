(function () {
  'use strict';
  var gulp      = require('gulp'),
      del       = require('del');
  module.exports = gulp.task('clean', function(cb) {
    if(config.env === 'release'){
      del([RELEASE_FOLDER],cb);
    }else{
      del([BUILD_FOLDER],cb);
    }
  });
})();