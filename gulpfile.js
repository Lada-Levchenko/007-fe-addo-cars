var gulp = require('gulp');
var del = require('del');
var uglify = require('gulp-uglify');
var usemin = require('gulp-usemin');
var minifyHtml = require('gulp-minify-html');
var rev = require('gulp-rev');


gulp.task('clean', function (cb) {
  return del(['src/build/**/*'], cb);
});

gulp.task('html:usemin', function () {
  return gulp.src('src/app/*.html')
  .pipe(usemin({
    html: [minifyHtml({
      empty: true,
      conditionals: true
    })]
  }))
  .pipe(gulp.dest('src/build'));
});
gulp.task('js:usemin', function () {
  return gulp.src('src/app/**/*.js')
  .pipe(usemin({
    js:['concat', rev()]
  }))
  .pipe(gulp.dest('src/build'));
});

gulp.task('build',['clean'], function () {
  gulp.run('js:usemin');
  gulp.run('html:usemin');
});

gulp.task('watcher', function () {
  gulp.watch(['src/app/**/*.js', 'src/app/*.html'], ['build']);
});
