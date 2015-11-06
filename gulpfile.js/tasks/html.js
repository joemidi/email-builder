'use strict';

var browserSync = require('browser-sync');
var config = require('../config/html');
var gulp = require('gulp');
var gulpif = require('gulp-if');
var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');
var usemin = require('gulp-usemin');
var emailBuilder = require('gulp-email-builder');

gulp.task('html', function() {
  return gulp.src(config.src)
    .pipe(emailBuilder())
    .pipe(gulpif(process.env.NODE_ENV == 'production' || 'test', htmlmin(config.htmlmin)))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream: true}));
});
