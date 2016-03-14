var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var concat      = require('gulp-concat');
var gutil		= require('gulp-util');
var source      = require('vinyl-source-stream');
var browserify  = require('browserify');
var watchify    = require('watchify');
var reactify    = require('reactify');
var del         = require('del');
var usemin      = require('gulp-usemin');
var sourcemaps  = require('gulp-sourcemaps');
var minifyCss   = require('gulp-minify-css');
var rev         = require('gulp-rev');
var minify      = require('gulp-minify');
var uglify      = require('gulp-uglify');
var htmlmin     = require('gulp-htmlmin');
var streamify   = require('gulp-streamify');

// Paths 
var config = require('./gulp-config.json');

// Static Server + watching scss/html files
gulp.task('serve', ['sass', 'ify'], function() {

    browserSync.init({
        server: "./app"
    });

    gulp.watch(config.paths.sassFiles, ['sass']);
    gulp.watch(config.paths.indexFiles).on('change', browserSync.reload);
    gulp.watch(config.paths.jsFiles).on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src(config.paths.sassFiles)
    	.pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(config.paths.stylesOutput))
        .pipe(browserSync.stream());
});

// watchify, reactify, browserify magic
gulp.task('ify', function() {
	var bundler = watchify(browserify({
		entries: ['./app/scripts/app.jsx'], //main entry point
		transform: ['reactify'],
		extensions: ['.jsx'],
		debug: true,
		cache: {},
		fullPaths: true
	}));

	function build(file) {
		if (file) gutil.log('Recompiling ' + file);
		return bundler
			.bundle()
			.on('error', gutil.log.bind(gutil, 'Browserify Error'))
			.pipe(source(config.paths.mainAppJs))
			.pipe(gulp.dest('./'));
	}
	build();
	bundler.on('update', build);
});


// 'clean' clean dist directory before a new build
gulp.task('clean', require('del').bind(null, config.paths.distFolder));

// 'minify Main App,js' move necessary files to dist
gulp.task('minAppJs', function() {
	gulp.src(config.paths.mainAppJs)
	.pipe(streamify(uglify()))
	.pipe(gulp.dest(config.paths.distFolder + config.paths.jsDir));
});

// 'usemin' looks at 'html' files for the doc blocks to concatenate css & js, uglify js, minifies html, adds hashes to js & css to bypass caches  
gulp.task('usemin', function() {
	gulp.src(config.paths.indexFiles)
		.pipe(usemin({
			css: [
				sourcemaps.init(),
				minifyCss(),
				'concat',
				rev(),
				sourcemaps.write(config.paths.distSourcemaps)
			],
			js: [
				sourcemaps.init(),
				minify(),
				rev(),
				sourcemaps.write(config.paths.distSourcemaps)
			],
			bowerJs: [

			]
		}))
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest(config.paths.distFolder));
});

gulp.task('default', ['serve']);
gulp.task('deploy', ['clean', 'minAppJs', 'usemin']);