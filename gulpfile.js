var gulp = require('gulp');

var paths = {
	'src': ['./dsy.js', './routes/**/*.js','./backend/**/*.js'],
	'tests': ['./test/**/*.js']
};

gulp.task('default', function() {

});

// lint source with jshint
gulp.task('lint', function(){
	return gulp.src(paths.src)
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});
