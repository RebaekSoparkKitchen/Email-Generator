/*
 * @Description:
 * @Author: FlyingRedPig
 * @Date: 2021-03-15 15:20:16
 * @LastEditors: FlyingRedPig
 * @LastEditTime: 2021-03-16 12:58:53
 */
const gulp = require('gulp');
const jeditor = require('gulp-json-editor');
const template = require('gulp-art-tpl');
const rename = require('gulp-rename');
const pangu = require('gulp-pangu');
const EmailFactory = require('./EmailFactory');

gulp.task('data', function () {
  gulp
    .src('./origin_data/*.json')
    .pipe(
      jeditor(function (json) {
        const e = new EmailFactory(json, 'service');
        const result = JSON.stringify(e.create());
        return JSON.parse(result);
      })
    )
    .pipe(gulp.dest('./data'));
});

gulp.task('html', function () {
  return gulp
    .src('./origin_html/*.html')
    .pipe(pangu())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', function () {
  gulp.watch('./origin_html/**', gulp.series('html'));
});
