var gulp = require('gulp'),
    gutil = require('gulp-util');
    coffee = require('gulp-coffee');
    concat = require('gulp-concat');

/*gulp.task('log', function() {
	gutil.log('Airport application rocks!');
});*/

var coffeeSources = ['components/coffee/logo.coffee'];
var jsSources = ['components/scripts/template.js'];

gulp.task('coffee', function() {
	gulp.src(coffeeSources)
	.pipe(coffee({bare: true})
		.on('error', gutil.log))
	.pipe(gulp.dest('components/scripts'))
});


gulp.task('js', function() {
	gulp.src(jsSources)
	.pipe(concat('main.js'))
	.pipe(gulp.dest('builds/development/js'))
});