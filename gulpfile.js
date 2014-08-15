var gulp = require('gulp');


global.gulpConfig = {
  src: {
    js: 'src/javascript',
    sass: 'src/sass',
    images: 'src/images',
    html: 'src/htdocs'
  },
  dest: {
    js: 'build',
    sass: 'build',
    images: 'build/images',
    html: 'build'
  },
  srcmap:{
    sass: 'sass'
  },
  bsync:{
    src: ['build/**'],
    opts: {
      server:{
        baseDir: ['build','src']
      }
    }
  },
  isWatching: false
};

require('./gulp');