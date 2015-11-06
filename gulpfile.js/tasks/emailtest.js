'use strict';

var config = require('../config/emailtest');
var gulp = require('gulp');
var fs = require('fs');
var EmailBuilder = require('email-builder-core');
var emailBuilder = new EmailBuilder();
emailBuilder.options = config.options;

gulp.task('emailtest', function() {
  return emailBuilder.sendEmailTest(fs.readFileSync(config.src));
});