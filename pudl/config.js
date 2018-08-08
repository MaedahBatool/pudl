/**
 * Configuration.
 *
 * Project Configuration for gulp tasks.
 *
 * In paths you can add <<glob or array of globs>>. Edit the variables as per your project requirements.
 */

// Project options.
module.exports = {
	viewSrc: './views/**/*.pug',
	viewDst: './',
	styleSrc: './css/style.scss',
	styleDst: './',
	outputStyle: 'compressed',
	viewWatchFiles: './views/**/*.pug',
	styleWatchFiles: './css/**/*.scss',
	browserAutoOpen: false,
	injectChanges: true
};
