var gulp = require('gulp');
var pug = require('gulp-pug');
var stylus = require('gulp-stylus')
var livereload = require('gulp-livereload')


gulp.task('html', function(){
	return gulp.src('Source/index.pug')
		.pipe(pug({
			pretty: false
		}))
		.pipe(gulp.dest('Build'))
		.pipe(livereload());
});

gulp.task('css', function () {
	return gulp.src('Source/style.styl')
		.pipe(stylus({
			compress: true
		}))
	// .pipe(prefix('last 2 versions', '>1%', 'ie 9'))
	.pipe(gulp.dest('Build'))
	.pipe(livereload());
});

gulp.task('js', function(){
	return gulp.src('Source/*.js')
		.pipe(gulp.dest('Build'))
		.pipe(livereload());
});

gulp.task('watch', () => {
	livereload.listen()
	gulp.watch('Source/*.pug', gulp.series('html'));
	gulp.watch('Source/*.styl', gulp.series('css', 'html'));
	gulp.watch('Source/*.js', gulp.series('js', 'html'));
});

gulp.task('default', gulp.parallel('watch', gulp.series(gulp.parallel('css', 'js'), 'html')));
