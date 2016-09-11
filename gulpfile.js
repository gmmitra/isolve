var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();


// write gulp task

gulp.task('sass', function(){
  return gulp.src('app/assets/sass/**/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('app/assets/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});


gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch('app/assets/sass/**/*.scss', ['sass']); 
  // Other watchers
  gulp.watch('app/*.html', browserSync.reload); 
  gulp.watch('app/js/**/*.js', browserSync.reload);
})

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})