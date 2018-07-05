/**
 * Gulpfile.
 *
 * @author Maedah Batool (https://github.com/maedahbatool)
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

/**
 * Pug
 */
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

/**
 * Scss
 */
gulp.task('scss', function() {
	return gulp
		.src(config.scssSrc)
		.pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
		.pipe(gulp.dest(config.scssDst));
});

/**
 * Default
 */
gulp.task('default', ['pug', 'scss'], function() {
	gulp.watch(config.pugWatchFiles, ['pug']);
	gulp.watch(config.scssWatchFiles, ['scss']);
});
