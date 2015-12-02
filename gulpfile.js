// var gulp = require('gulp');
// var plugins = require('gulp-load-plugins')();
// var mainBowerFiles = require('main-bower-files');
// var browserSync = require('browser-sync').create();
//
// var paths = {
//   app: './app',
//   scripts: ['app/common/*.module.js', 'app/Search/*.module.js', 'app/Venues/*.module.js', '!app/vendor', '!app/vendor/**'],
//   index: 'app/index.html',
//   partials: ['app/**/*.html', '!app/index.html'],
//   build: './build'
// };
//
// gulp.task('index', function () {
//   gulp.src(paths.index)
//   .pipe(plugins.inject(gulp.src(['app.vendor.js', 'app.min.js'], {cwd: 'build', read: false}), {
//     relative: false
//   }))
//   .pipe(gulp.dest('build'))
// })
