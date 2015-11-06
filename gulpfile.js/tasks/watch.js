'use strict';

var gulp = require('gulp');
var html = require('../config/html');
var js = require('../config/javascript');
var images = require('../config/images');
var sass = require('../config/sass');
var watch = require('gulp-watch');
var gulpSequence = require('gulp-sequence');

gulp.task('watch', ['browserSync'], function() {
  watch(images.src, function() { gulp.start('images') });
  watch(sass.src, function() { gulp.start('emailbuild') });
  watch(html.watch, function() { gulp.start('html') });
  watch(js.src, function() { gulp.start('js') });
});


gulp.task('emailbuild', function(cb){
  gulpSequence('sass', 'html', cb);
});
