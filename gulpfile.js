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
    //lib = require('bower-files'), //See the note at the bottom of this file if you will use bootstrap.
    compass = require('gulp-compass'),
    sourcemaps = require('gulp-sourcemaps'),
    deploy = require("gulp-gh-pages");

//We need to tell the bower-files package where to find the Bootstrap files that we are interested in. We do this by passing an object into our initial call to the bower-files package with some initialization settings in it. If you are going to use bootstrap you would have the following, other wise you do: lib = require('bower-files') above

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

gulp.task('build', ['jsReload', 'bower', "cssBuild"], function(){
});

//JsReload (Called in the watch task when ever there is a change to .js files)
gulp.task('jsReload', ['jsBrowserify', 'jshint'], function(){ //When I call jsReload, run jsBrowserify & jshint
  browserSync.reload(); //then reload the browser
});

//BowerReload (Called in the watch task when ever there is a change to the vendor files)
gulp.task('bowerReload', ['bower'], function(){ //When I call jsReload, run bower which will in turn run bowerJs and bowerCss which will create the two vendor.js and vendor.css files for external scripts and stylesheets like jquery and bootstrap
  browserSync.reload(); //then reload the browser
});

//HTMLReload (Called in the watch task when ever there is a change to .html files)
gulp.task('htmlReload', function(){ //When I call htmlReload
  browserSync.reload(); //reload the browser
});

//SassReload (Called in the watch task when ever there is a change to .scss files)
gulp.task('sassReload', ['cssBuild'], function(){ //When I call sassReload, run cssBuild which will take my scss files and convert them into css files that the browser can read
  browserSync.reload(); //then reload the browser
});

/******************** WATCH TASK ********************/

gulp.task('watch', function(){
  gulp.watch([paths.jsFiles], ['jsReload']); //when there are any changes to any jsFiles, run jsBuild which will reload the browser, and run jsBrowserify & jshint
  gulp.watch(['bower.json'], ['bowerReload']); //when there are any changes to bower.json, run bowerBuild which will bowerJs and bowerCss which will create the two vendor.js and vendor.css files and reload the browser
  gulp.watch([paths.scssFiles], ['sassReload']); //when there are any changes to scss files, run sassBuild which will reconvert the scss files into css files and reload the browser
  gulp.watch(['*.html'], ['htmlReload']); //when there are any changes to scss files, run htmlBuild which will reload the browser
});

/******************** DELETE/CLEAN TASK ********************/

gulp.task("clean", function(){
    return del(['dist', 'tmp']); //When i run this, delete the distribution and temp folders
  });

/******************** DEPLOY TASK ********************/

var options = {
    remoteUrl: "https://github.com/5adiyah/UpdatedTemplate.git", //link to your repo
    branch: "gh-pages"};  //set this to gh-pages otherwise it will over write your master branch
gulp.task('deploy', function () {
    gulp.src(["dist/**/*.*", "index.html", "images/", "gulpfile.js", "package.json", "bower.json"]) //in here add any files or folders you want to deploy
        .pipe(deploy(options));
});

/******************** BROWSERSYNC TASK ********************/

//BROWSERSYNC & SERVER & CLOSE OPEN SERVER TABS
gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: "./",
      index: "index.html"
    }
  });

  gulp.start('watch');

});


/******************** STYLES TASKS ********************/

gulp.task('cssBuild', function() {
  return gulp.src(paths.scssFiles) //grabs all scss files, compiles them to css
    .pipe(plumber()) //Keeps watch going even if you make a syntax error
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/css'));
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
  return gulp.src(paths.jsFiles) //Grabs all js files
    .pipe(jshint()) //run their contents through jshint
    .pipe(jshint.reporter('default')); //report any findings from jshint in terminal
});


/******************** BOWER TASKS ********************/

//CREATES FILE FOR VENDOR JS
gulp.task('bowerJS', function () {
  return gulp.src(lib.ext('js').files) //grabs all the vendor js files
    .pipe(concat('vendor.min.js')) //concats them
    .pipe(uglify()) //uglifies them
    .pipe(gulp.dest('./dist/js')); //moves them to the dist/js folder
});

//CREATES FILE FOR VENDOR CSS
gulp.task('bowerCSS', function () {
  return gulp.src(lib.ext('css').files) //grabs all the vendor css fiels
    .pipe(concat('vendor.css')) //concats them
    .pipe(gulp.dest('./dist/css')); //moves them to the dist/css folder
});

//Bowe Task
gulp.task('bower', ['bowerJS', 'bowerCSS']); //when you run bower, it runs both bowerJS and bowerCSS
