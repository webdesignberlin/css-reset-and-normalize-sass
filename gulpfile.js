'use strict';

var path = require('path');

var autoprefixer = require('autoprefixer'),
    csswring = require('csswring'),
    extReplace = require('gulp-ext-replace'),
    del = require('del'),
    gulp = require('gulp'),
    perfectionist = require('perfectionist'),
    postcss = require('gulp-postcss'),
    plumber = require('gulp-plumber'),
    runSequence = require('run-sequence'),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass');

var paths = {
      cwd: __dirname,
      sass: path.join(__dirname, 'scss'),
      css: path.join(__dirname, 'css')
    },
    options = {
      autoprefixer: {
        browsers: [
          '> 0.01%',
          'last 3 versions'
        ],
        remove: false
      },
      csswring: {
        preserveHacks: true
      },
      perfectionist: {
        cascade: true,
        format: 'expanded',
        indentSize: 2,
        sourcemap: true
      },
      sourcemaps: {
        includeContent: true,
        sourceRoot: '.'
      },
      sass: {
        compress: false
      }
    };

gulp.task('build:css', ['clean:css'], function() {
  return gulp
    .src(path.join(paths.sass, '*.scss'))
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass(options.sass))
    .pipe(postcss([
      autoprefixer(options.autoprefixer),
      perfectionist(options.perfectionist)
    ]))
    .pipe(gulp.dest(paths.css))
    .pipe(postcss([
      csswring(options.csswring)
    ]))
    .pipe(extReplace('.min.css'))
    .pipe(sourcemaps.write('.', options.sourcemaps))
    .pipe(gulp.dest(paths.css));
});

gulp.task('clean:css', function(done) {
  del([paths.css]).then(function() {
    done();
  });
});

gulp.task('watch', function() {
  gulp.watch(path.join(paths.sass, '**/*.scss'), ['build:css']);
});

gulp.task('build', function(done) {
  runSequence('build:css', done);
});

gulp.task('default', function(done) {
  runSequence('build', done);
});
