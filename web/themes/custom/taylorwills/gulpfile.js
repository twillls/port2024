const gulp = require('gulp');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const cleanCss = require('gulp-clean-css');

// Concat and Minify
gulp.task('build-css', () => {
  return gulp.src('src/*.scss')
  .pipe(concat('app.css'))
  .pipe(cleanCss())
  .pipe(gulp.dest('css/'))
  .pipe(rename({ extname: 'min.js' }))
});

gulp.task('session-start', (cb) => {
  return gulp.series('build-css')(cb);
});

gulp.task('default', gulp.series('session-start'));