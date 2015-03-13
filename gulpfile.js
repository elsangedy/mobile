var gulp = require('gulp');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var cssMin = require('gulp-minify-css');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var files = [
  './src/*.js',
  './src/app/**/*.js',
  './src/app/**/**/*.js',
  './src/app/**/**/**/*.js'
];

var vendor_files = {
  js: [
    './bower_components/jquery/dist/jquery.min.js',
    './bower_components/angular/angular.min.js',
    './bower_components/angular-touch/angular-touch.min.js',
    './bower_components/angular-resource/angular-resource.min.js',
    './bower_components/angular-ui-router/release/angular-ui-router.min.js',
    './bower_components/moment/min/moment.min.js',
    './bower_components/velocity/velocity.min.js',
    './bower_components/lumx/dist/lumx.min.js',
    './bower_components/requirejs/require.js'
  ],
  css: [
    './bower_components/lumx/dist/lumx.css',
    './bower_components/mdi/css/materialdesignicons.min.css'
  ],
  fonts: [
    './bower_components/mdi/fonts/*',
    './bower_components/roboto/*.svg',
    './bower_components/roboto/*.woff',
    './bower_components/roboto/*.eot',
    './bower_components/roboto/*.ttf'
  ]
};

gulp.task('vendor', function () {
  gulp.src(vendor_files.js)
      .pipe(uglify())
      .pipe(gulp.dest('./dist/vendor'));

  gulp.src(vendor_files.css)
      .pipe(cssMin())
      .pipe(gulp.dest('./dist/vendor'));

  gulp.src(vendor_files.fonts)
      .pipe(gulp.dest('./dist/fonts'));
});

gulp.task('lint', function () {
  gulp.src(files)
      .pipe(jshint())
      .pipe(jshint.reporter('default'));
});

gulp.task('dist', function () {
  gulp.src('./src/**/*')
      .pipe(gulp.dest('./dist'));
});

gulp.task('dev', ['build'], function () {

  browserSync({
      server: './dist'
  });

  gulp.watch('./src/*', ['dist']);
  gulp.watch('./src/**/*', ['dist']);
  gulp.watch('./src/**/**/*', ['dist']);
  gulp.watch('./src/**/**/**/*', ['dist']);

  gulp.watch('./src/*').on('change', reload);
  gulp.watch('./src/**/*').on('change', reload);
  gulp.watch('./src/**/**/*').on('change', reload);
  gulp.watch('./src/**/**/**/*').on('change', reload);
})

gulp.task('build', ['lint', 'vendor', 'dist'], function () {

});

gulp.task('default', ['dev'], function () {

});
