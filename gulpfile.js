'use strict';

var gulp = require('gulp');
var pick = require('./');

gulp.task('default', function() {
  return gulp.src('fixtures/package.json')
    .pipe(pick())
    .pipe(gulp.dest('actual'));
});
