const gulp = require("gulp")
const htmlmin = require("gulp-htmlmin");
var responsive = require('gulp-responsive')

gulp.task('minify', () => {
  return gulp.src('public/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('public'));
});

gulp.task('responsive', function () {
  return gulp
    .src('static/raw/*.{png,jpg}')
    .pipe(
      responsive({
        'box-*.jpg':  [{
          width: 840,
          rename: {suffix: "_840"},
        }, {
          width: 478,
          rename: {suffix: "_478"},
        },{
          width: 320,
          rename: {suffix: "_320"},
        },],
        'service-*.jpg':  [{
          width: 840,
          rename: {suffix: "_840"},
        }, {
          width: 478,
          rename: {suffix: "_478"},
        },{
          width: 320,
          rename: {suffix: "_320"},
        },],
        'home_big.jpg':  [{
          width: 1400,
          rename: {suffix: "_1400"},
        }, {
          width: 478,
          rename: {suffix: "_768"},
        },{
          width: 320,
          rename: {suffix: "_320"},
        },],
        'about-*.jpg':  [{
          width: 840,
          height: 840,
          rename: {suffix: "_840"},
        }, {
          width: 478,
          height: 478,
          rename: {suffix: "_478"},
        },{
          width: 320,
          hieght: 320,
          rename: {suffix: "_320"},
        },],
        'logo.png': [
          {
            width: 200,
          },
          {
            width: 200 * 2,
            rename: 'logo@2x.png'
          }
        ],
        'testimonial-*.jpg': [
          {
            width: 278,
            height: 278
          },
          {
            width: 300 * 2,
            height: 300 * 2,
            rename: {suffix: "@2x"}
          }
        ]
      })
    )
    .pipe(gulp.dest('static/img'))
})

