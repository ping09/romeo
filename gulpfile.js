var gulp = require('gulp'),
    liveReload =  require('gulp-livereload'),
    jade = require('gulp-jade');


    var src = ["./*.html", "./css/*.css", "./js/*.js"];

gulp.task('watch', function () {
  liveReload.listen();
  gulp.watch(src,function () {
    gulp.src(src)
        .pipe(liveReload());
  });
});

gulp.task('default', ['watch']);
