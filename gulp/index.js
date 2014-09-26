var requireDir = require('require-dir'),
    argv = require('yargs').argv;
require('./config');
config.env = argv.release ? 'release' : 'build';
requireDir('./tasks', {recurse: true});