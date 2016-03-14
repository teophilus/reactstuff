var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
//var react       = require('gulp-react');
var concat      = require('gulp-concat');
var gutil		= require('gulp-util');
var source      = require('vinyl-source-stream');
var browserify  = require('browserify');
var watchify    = require('watchify');
var reactify    = require('reactify');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./app"
    });

    gulp.watch("app/styles/*.scss", ['sass']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
    gulp.watch("app/scripts/*.js").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("app/styles/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("app/styles"))
        .pipe(browserSync.stream());
});

gulp.task('react', function() {
	return gulp.src(['app/scripts/*.jsx'])
	.pipe(react())
	.pipe(concat('app.js'))
	.pipe(gulp.dest('app/scripts'));
});

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
			.pipe(source('app/scripts/app.js'))
			.pipe(gulp.dest('./'));
	};
	build()
	bundler.on('update', build)
});

gulp.task('default', ['serve']);