const gulp = require('gulp');
// const sass = require('gulp-sass')(require('sass'));
const minify = require('gulp-minify');
// const rename = require('gulp-rename');
const concat = require('gulp-concat');
// const cleanCss = require('gulp-clean-css');

// Concat and Minify
// gulp.task('build-css', () => {
//   return gulp.src([
//     'src/scss/*.scss',
//     'src/scss/modules/*.scss'
//   ])
//   .pipe(sass())
//   .pipe(concat('app.css'))
//   .pipe(cleanCss())
//   .pipe(gulp.dest('dist/css/'))
//   .pipe(minify({
//     ext: '.css',
//     mangle: false,
//     noSource: true
//   }))
// });

gulp.task('build-js', function () {
  return gulp.src('src/js/*.js')
  .pipe(concat('app.js'))
  .pipe(minify({
    ext:{
      min:'.js'
    },
    noSource: true
  }))
  .pipe(gulp.dest('dist/js/'));
});

// gulp.task('default', gulp.series(['build-css', 'build-js']));
gulp.task('default', gulp.series('build-js'));

gulp.task('watch', function() {
  // gulp.watch('src/scss/*.scss', gulp.series('build-css'));
  // gulp.watch('src/scss/modules/*.scss', gulp.series('build-css'));
  gulp.watch('src/js/*.js', gulp.series('build-js'));
});