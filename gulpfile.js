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
	scssWatchFiles: './scss/**/*.scss',
	browserSyncWatchFiles: './'
};

const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

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
gulp.task('default', ['pug', 'scss', 'browser-sync'], function() {
	gulp.watch(config.pugWatchFiles, ['pug']);
	gulp.watch(config.scssWatchFiles, ['scss']);
	gulp.watch(config.browserSyncWatchFiles, ['browser-sync']);
});

/**
 * BrowserSync Init
 *
 */
gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: './'
		}
	});
});

/**
 * BrowserSync Watch SCSS Files
 *
 */
gulp.task('serve', ['sass'], function() {
	browserSync.init({
		server: './scss'
	});

	gulp.watch('/scss/*.scss', ['sass']);
	gulp.watch('scss/*.html').on('change', browserSync.reload);
});
