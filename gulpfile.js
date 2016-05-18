var gulp = require('gulp'),
    jade = require ('jade'),
    liveReload =  require('gulp-livereload'),
    plumber  = require('gulp-plumber'),
    uglify = require('gulp-uglify');

    var src = ["./*.html", "./css/*.css", "./js/*.js"];

gulp.task('watch', function () {
  liveReload.listen();
  gulp.watch(src, function () {
    gulp.src(src)
        .pipe(plumber())
        .pipe(liveReload());
  });
});

gulp.task('default', ['watch']);
