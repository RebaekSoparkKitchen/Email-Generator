/*
 * @Description:
 * @Author: FlyingRedPig
 * @Date: 2021-03-15 15:20:16
 * @LastEditors: FlyingRedPig
 * @LastEditTime: 2021-03-20 16:31:05
 */
const gulp = require('gulp');
const juice = require('gulp-juice');
const pangu = require('gulp-pangu');

gulp.task('html', function () {
  return gulp
    .src('./origin_html/*.html')
    .pipe(pangu())
    .pipe(juice())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', function () {
  gulp.watch('./origin_html/**', gulp.series('html'));
});
