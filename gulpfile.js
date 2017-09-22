var gulp = require('gulp'),
    gutil = require('gulp-util');

/*gulp.task('log', function() {
	gutil.log('Airport application rocks!');
});*/

var coffeeSoures = ['components/coffee/logo.coffee'];

gulp.task('coffee', function() {
	gulp.src(coffeeSoures)
	.pipe(coffee({bare: true})
		.on('error', gutil.log))
	.pipe(gulp.dest('components/scripts'))
});