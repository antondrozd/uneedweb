var gulp = require('gulp');
var imagemin = require('gulp-tinypng');

gulp.task('tinypng', function (cb) {

	gulp.src('**/on-game/bg-1.{png,jpg}')
		.pipe(imagemin('ZiZYm9giK0yP_007ofWJgQT5YaUXDy2Y'))
		.pipe(gulp.dest('tiny'));

});