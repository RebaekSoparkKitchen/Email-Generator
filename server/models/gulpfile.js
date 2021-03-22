/*
 * @Description:
 * @Author: FlyingRedPig
 * @Date: 2021-03-15 15:20:16
 * @LastEditors: FlyingRedPig
 * @LastEditTime: 2021-03-22 15:39:07
 */
const gulp = require('gulp');
const juice = require('gulp-juice');
const pangu = require('gulp-pangu');
const cache = require('gulp-cached');

gulp.task('html', function () {
  return gulp
    .src('./origin_html/*.html')
    .pipe(cache())
    .pipe(pangu())
    .pipe(juice())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', function () {
  gulp.watch('./origin_html/*.html', gulp.series('html'));
});
