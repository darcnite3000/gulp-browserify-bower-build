(function () {
  'use strict';
  var gulp          = require('gulp'),
      connect       = require('connect'),
      serveStatic   = require('serve-static'),
      staticServer  = connect();
  module.exports = gulp.task('serve', function(next) {
    var staticServerPath = BUILD_FOLDER;
    if(config.env === 'release') staticServerPath = RELASE_FOLDER;
    staticServer
      .use(serveStatic(staticServerPath))
      .listen(process.env.PORT || config.ports.staticServer, next);
  });
})();