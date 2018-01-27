const gulp = require('gulp');
const babel = require('gulp-babel');
const stylus = require('gulp-stylus');
var htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');

gulp.task('img', function () {
  return gulp.src('./src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('docs/img'))
});

gulp.task('html', function () {
  return gulp.src('src/**/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('docs'));
});

gulp.task('js', function () {
  return gulp.src('src/**/*.js')
    .pipe(babel({
      comments: false,
      minified: true
    }))
    .pipe(gulp.dest('docs'));
});

gulp.task('css', function () {
  return gulp.src('src/styl/style.styl')
    .pipe(stylus({
      compress: true,
    }))
    .pipe(gulp.dest('docs/css'));
});

gulp.task('watch', function () {
  gulp.watch('src/styl/*.styl', ['css'])
  gulp.watch('src/**/*.html', ['html'])
  gulp.watch('src/js/*.js', ['js'])
});
