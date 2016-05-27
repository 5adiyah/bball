var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create();


/********************          ********************/
/******************** MY PATHS ********************/
/********************          ********************/


var paths = {
    jsFiles: './app/js/*.js',
    jsDirectory: './app/js/',
    cssFiles: './app/css/*.css',
    cssDirectory: './app/css/',
    distributionDirectory: './dist'
};


gulp.task('sassCompiler', function(){
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('app/css'))
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})
