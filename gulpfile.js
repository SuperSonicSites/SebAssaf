const gulp = require("gulp")
const htmlmin = require("gulp-htmlmin");
var responsive = require('gulp-responsive')

gulp.task('minify', () => {
  return gulp.src('public/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('public'));
});