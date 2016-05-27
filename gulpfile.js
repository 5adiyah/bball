var gulp = require('gulp'),
    del = require('del'),
    plumber = require('gulp-plumber'), //Keeps watch going even if you make a syntax error
    browserSync = require('browser-sync').create(),
    source = require('vinyl-source-stream'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    browserify = require('browserify'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    compass = require('gulp-compass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoClose = require('browser-sync-close-hook');

var lib = require('bower-files')({
  "overrides":{
    "bootstrap" : {
      "main": [
        "less/bootstrap.less",
        "dist/css/bootstrap.css",
        "dist/js/bootstrap.js"
      ]
    }
  }
});

var buildProduction = utilities.env.production;

/******************** MY PATHS ********************/

var paths = {
    jsFiles: './app/js/*.js',
    jsDirectory: './app/js/',
    scssFiles: './app/scss/*.scss',
    scssDirectory: './app/scss/',
    cssFiles: './app/css/*.css',
    cssDirectory: './app/css/',
    distributionDirectory: './dist'
};

/******************** DEFAULT GULP TASKS ********************/

gulp.task('default', ['build'], function(){
  gulp.start('serve');
});

/******************** BUILD TASKS ********************/

gulp.task('build', ['jsBuild', 'bowerBuild', "cssBuild"], function(){
});

gulp.task('jsBuild', ['jsBrowserify', 'jshint'], function(){
  browserSync.reload();
});

gulp.task('bowerBuild', ['bower'], function(){
  browserSync.reload();
});

gulp.task('htmlBuild', function(){
  browserSync.reload();
});

gulp.task('sassBuild', ['cssBuild'], function(){
  browserSync.reload();
});

/******************** WATCH TASK ********************/

gulp.task('watch', function(){
  gulp.watch([paths.jsFiles], ['jsBuild']);
  gulp.watch(['bower.json'], ['bowerBuild']);
  gulp.watch([paths.scssFiles], ['sassBuild']);
  gulp.watch(["*.html"], ['htmlBuild']);
});

/******************** DELETE/CLEAN TASK ********************/

gulp.task("clean", function(){
    return del(['build', 'tmp']);
  });

/******************** BROWSERSYNC TASK ********************/

//BROWSERSYNC & SERVER & CLOSE OPEN SERVER TABS
gulp.task('serve', function() {
  browserSync.use({
    plugin() {},
    hooks: {
      'client:js': autoClose, // <-- important part to close open server tabs
    },
  });
  browserSync.init({
    server: {
      baseDir: "./app",
      index: "./app/index.html"
    }
  });
  gulp.start('watch');
});


/******************** STYLES TASKS ********************/

//COMPILE SASS
gulp.task('cssBuild', function() {
  return gulp.src(paths.scssFiles)
    .pipe(plumber()) //Keeps watch going even if you make a syntax error
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.cssDirectory));
});
s
//SASS BROWSERSYNC
gulp.task('sassBuild', ['cssBuild'], function(){
  browserSync.reload();
});

/******************** SCRIPTS TASKS ********************/

//CONCAT
gulp.task('concatInterface', function() {
  return gulp.src('./app/js/**/*-interface.js') //Grabs all js interface files, concats & pipes to destination
    .pipe(concat('allConcat.js'))
    .pipe(gulp.dest('./tmp'));
});

//BROWSERIFY
gulp.task('jsBrowserify', ['concatInterface'], function() {
  return browserify({ entries: ['./tmp/allConcat.js'] }) //Grabs all concatted files, broweserfies them, and pipes to destination
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./dist/js'));
});

//UGLIFY
gulp.task('uglify', function(){
  gulp.src(paths.jsFiles) //Grabs all js files, uglifies it, and pipes to destination
  .pipe(uglify())
  .pipe(gulp.dest('./dist/js'));
});

//JSHINT
gulp.task('jshint', function(){
  return gulp.src(paths.jsFiles) //Grabs all js files, uses jshints to check for errors
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});


/******************** BOWER TASKS ********************/

//CREATES FILE FOR VENDOR JS
gulp.task('bowerJS', function () {
  return gulp.src(lib.ext('js').files)
    .pipe(concat('vendor.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
});

//CREATES FILE FOR VENDOR CSS
gulp.task('bowerCSS', function () {
  return gulp.src(lib.ext('css').files)
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('bower', ['bowerJS', 'bowerCSS']);
