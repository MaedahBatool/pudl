/**
 * Configuration.
 *
 * Project Configuration for gulp tasks.
 *
 * In paths you can add <<glob or array of globs>>. Edit the variables as per your project requirements.
 */

// Project options.
module.exports = {
	viewSrc: './dist/views/**/*.pug',
	viewDst: './public/',
	styleSrc: './dist/sass/style.scss',
	styleDst: './public/assets/css/',
	outputStyle: 'compressed',
	viewWatchFiles: './dist/views/**/*.pug',
	styleWatchFiles: './dist/sass/**/*.scss',
	browserAutoOpen: false,
	injectChanges: true
};
