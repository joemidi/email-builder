'use strict';

var gulp = require('gulp');
var gulpSequence = require('gulp-sequence');

gulp.task('build:test', function(cb) {
  process.env.NODE_ENV = 'test';
  gulpSequence('clean', ['images'], ['sass'], ['html'], ['emailtest'], cb);
});



