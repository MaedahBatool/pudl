/**
 * Gulpfile.
 *
 * @author Maedah Batool (https://github.com/maedahbatool)
 * @version 1.0.0
 */

var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');

gulp.task('pug', function() {
	return gulp
		.src('./views/**/*.pug')
		.pipe(
			pug({
				pretty: true
			})
		)
		.pipe(gulp.dest('./'));
});

gulp.task('scss', function() {
	return gulp
		.src('./sass/style.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./'));
});

// gulp.task('hi', function() {
// 	console.log('Hi Meow');
// });

// gulp.task('default', ['pug', 'scss'], function() {
// 	gulp.watch(pugFiles, 'pug');
// 	gulp.watch(scssFiles, 'scss');
// });
