/**
 * Gulpfile.
 *
 * @author Maedah Batool (https://github.com/maedahbatool)
 * @version 1.0.0
 */

// Configure.
const config = {
	pugSrc: './views/**/*.pug',
	pugDst: './',
	scssSrc: './scss/style.scss',
	scssDst: './',
	pugWatchFiles: './views/**/*.pug',
	scssWatchFiles: './scss/**/*.scss'
};

const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');

gulp.task('pug', function() {
	return gulp
		.src(config.pugSrc)
		.pipe(
			pug({
				pretty: true
			})
		)
		.pipe(gulp.dest(config.pugDst));
});

gulp.task('scss', function() {
	return gulp
		.src('config.scssSrc')
		.pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
		.pipe(gulp.dest('config.scssDst'));
});

gulp.task('default', ['pug', 'scss'], function() {
	gulp.watch(config.pugWatchFiles, ['pug']);
	gulp.watch(config.scssWatchFiles, ['scss']);
});

// gulp.task('default', ['pug', 'scss'], function () {
// 	gulp.watch(pugFiles, 'pug');
// 	gulp.watch(scssFiles, 'scss');
// });

// gulp.task('hi', function() {
// 	console.log('Hi Meow');
// });
