var gulp = require('gulp'),
  plumber = require('gulp-plumber'),
  rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin'),
  cache = require('gulp-cache');
// var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var babelify = require('babelify');

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: "./"
    }
  });
});

gulp.task('bs-reload', function () {
  browserSync.reload();
});

gulp.task('images', function(){
  gulp.src('assets/images/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('dist/images/'));
});

//SASS currently broken
// gulp.task('styles', function(){
//   gulp.src(['assets/sass/**/*.scss'])
//     .pipe(plumber({
//       errorHandler: function (error) {
//         console.log(error.message);
//         this.emit('end');
//       }}))
//     .pipe(sass())
//     .pipe(autoprefixer('last 2 versions'))
//     .pipe(gulp.dest('dist/styles/'))
//     .pipe(browserSync.reload({stream:true}))
// });

// gulp.task('scripts', function(){
//   return gulp.src('assets/js/**/*.js')
//     .pipe(plumber({
//       errorHandler: function (error) {
//         console.log(error.message);
//         this.emit('end');
//       }}))
//     .pipe(jshint())
//     .pipe(jshint.reporter('default'))
//     .pipe(concat('app.js'))
//     .pipe(babel())
//     .pipe(gulp.dest('dist/js/'))
//     .pipe(rename({suffix: '.min'}))
//     .pipe(uglify())
//     .pipe(gulp.dest('dist/js/'))
//     .pipe(browserSync.reload({stream:true}))
// });

//JS HINT is in root directory called .jshintrc
gulp.task('scripts-browserify', function(){
    browserify({
      entries: './assets/js/app.js',
      debug: true
    })
    .transform(babelify, { presets: ['es2015'] })
    .bundle()
    .on('error', function(err) {
      console.log(err.toString());
      this.emit("end");
    })
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(gulp.dest('dist/js/'))
    .pipe(browserSync.reload({stream:true}))
});

gulp.task('default', ['scripts-browserify', 'browser-sync'], function(){
  // gulp.watch("assets/sass/**/*.scss", ['styles']);
  gulp.watch("assets/js/**/*.js", ['scripts-browserify']);
  gulp.watch("*.html", ['bs-reload']);
});