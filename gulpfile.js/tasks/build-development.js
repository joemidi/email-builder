'use strict';

var gulp = require('gulp');
var gulpSequence = require('gulp-sequence');

gulp.task('build:development', function(cb) {
  gulpSequence('clean', ['images'], ['sass'], ['html'], cb);
});
