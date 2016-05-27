var gulp = require('gulp'),
    sass = require('gulp-sass');


gulp.task('sassCompiler', function(){
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('app/css'))
});
