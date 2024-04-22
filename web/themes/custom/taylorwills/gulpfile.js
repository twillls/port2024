const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const minify = require('gulp-minify');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const cleanCss = require('gulp-clean-css');

// Concat and Minify
gulp.task('build-css', () => {
  return gulp.src('src/*.scss')
  .pipe(sass())
  .pipe(concat('app.css'))
  .pipe(cleanCss())
  .pipe(gulp.dest('css/'))
  .pipe(minify({
    ext: '.css',
    mangle: false,
    noSource: true
  }))
  .pipe(rename({ extname: 'min.js' }))
});

gulp.task('session-start', (cb) => {
  return gulp.series('build-css')(cb);
});

gulp.task('default', gulp.series('session-start'));

gulp.task('watch', function() {
  gulp.watch('src/*.scss', gulp.series('build-css'));
});