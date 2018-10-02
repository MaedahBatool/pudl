/**
 * Gulpfile.
 *
 * @author Maedah Batool (https://github.com/maedahbatool)
 */

/**
 * Load Config.
 *
 * Customize your project in the config.js file
 */
const config = require('./config.js');

/**
 * Load Plugins.
 *
 * Load all the required plugins.
 */
const gulp = require('gulp'); // Gulp of-course.
const pug = require('gulp-pug'); // Compiles Pug templates.
const sass = require('gulp-sass'); // Complies Sass.
const browserSync = require('browser-sync').create(); // Reloads browser and injects CSS.
const reload = browserSync.reload;
var notify = require('gulp-notify'); // Sends message notification to you.
var plumber = require('gulp-plumber'); // Prevent pipe breaking caused by errors.

/**
 * Task: `view`.
 *
 * Compliles the pug files.
 */
gulp.task('view', function() {
	return gulp
		.src(config.viewSrc)
		.pipe(
			plumber({
				errorHandler: function(err) {
					notify.onError('Error: <%= error.message %>')(err);
					this.emit('end'); // End stream if error is found.
				}
			})
		)
		.pipe(
			pug({
				pretty: true
			})
		)
		.pipe(gulp.dest(config.viewDst))
		.pipe(notify({ message: '\n\n✅   ===> VIEWS completed!\n\n', onLast: true }));
});

/**
 * Task: `style`.
 *
 * Compiles Sass to CSS, injects CSS or reload the browser.
 */
gulp.task('style', function() {
	return gulp
		.src(config.styleSrc)
		.pipe(
			plumber({
				errorHandler: function(err) {
					notify.onError('Error: <%= error.message %>')(err);
					this.emit('end'); // End stream if error is found.
				}
			})
		)
		.pipe(sass({ outputStyle: config.outputStyle }).on('error', sass.logError))
		.pipe(gulp.dest(config.styleDst))
		.pipe(browserSync.stream({ match: '**/*.css' }))
		.pipe(notify({ message: '\n\n✅  ===> STYLES completed!\n\n', onLast: true }));
});

/**
 * Task: `bSync`.
 *
 * Live Reloads, CSS injections, Localhost tunneling.
 *
 * This task does the following:
 *    1. Sets the project URL
 *    2. Sets inject CSS
 *    3. You may define a custom port
 *    4. You may want to stop the browser from openning automatically
 */
gulp.task('bSync', function() {
	browserSync.init({
		// `true` Automatically open the browser with BrowserSync live server.
		// `false` Stop the browser from automatically opening.
		open: config.browserAutoOpen,

		// Inject CSS changes.
		// Comment it to reload browser for every CSS change.
		injectChanges: config.injectChanges,

		// Serve files from the current directory.
		server: true
	});
});

/**
 * Default Task.
 *
 * Watch for file changes and run specific tasks.
 */
gulp.task('default', ['view', 'style', 'bSync'], function() {
	gulp.watch(config.viewWatchFiles, ['view', reload]);
	gulp.watch(config.styleWatchFiles, ['style']);
});
