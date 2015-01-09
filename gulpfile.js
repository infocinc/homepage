var gulp = require('gulp'),
	browserify = require('browserify'),
	gutil = require('gulp-util'),
	chalk = require('chalk'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	mochaPhantomJS = require('gulp-mocha-phantomjs'),
	source = require('vinyl-source-stream'),
	streamify = require('gulp-streamify'),
	transform = require('vinyl-transform'),
	watchify = require('watchify'),
	jshint = require('gulp-jshint');

var paths = {
	'testpages': ['./test/browser/pages/*.html'],
	'tests-browser': ['./test/browser/*.test.js'],
	'app': ['./public/js/app/*.js'],
	'src': ['./dsy.js', './routes/**/*.js','./backend/**/*.js'],
	'tests': ['./test/**/*.js']
};
var dests = {
	'app': './public/js/dist',
	'tests-browser': './test/browser/pages/js/browserified'
};


gulp.task('build', ['browserify']);
gulp.task('default', ['build','watch']);


// as suggested by Hafiz Ismail's article
// https://medium.com/@sogko/gulp-browserify-the-gulp-y-way-bb359b3f9623
function browserifyWatch(paths,dest) {
	var watchified = transform(function (filename) {
		console.log(filename);
		var b = browserify(filename);

		var w = watchify(b)
			.on('update', function (scriptIds) {
				scriptIds = scriptIds
					.filter(function (i) {
						return i.substr(0, 2) !== './';
					})
					.map(function (i) {
						return chalk.blue(i.replace(__dirname, ''));
					});
				if (scriptIds.length > 1) {
					gutil.log(scriptIds.length + ' Scripts updated:\n* ' + scriptIds.join('\n* ') + '\nrebuilding...');
				} else {
					gutil.log(scriptIds[0] + ' updated, rebuilding...');
				}
				rebundle();
			})
			.on('time', function (time) {
				gutil.log(chalk.green('Scripts built in ' + (Math.round(time / 10) / 100) + 's'));
			});

		function rebundle() {
			return w.bundle()
				.on('error', function (e) {
					gutil.log('Browserify Error', e);
				})
				.pipe(source(filename))
				.pipe(rename({
					'dirname': '/',
					'suffix':'.min'
				}))
				.pipe(streamify(uglify()))
				.pipe(gulp.dest(dest));
		}
		return w.bundle();
	});
	return gulp.src(paths)
		.pipe(watchified)
		.pipe(uglify())
		.pipe(rename({'suffix': '.min'}))
		.pipe(gulp.dest(dest));
	
}

gulp.task('browserify-watch', function() {
	browserifyWatch(paths['tests-browser'],dests['tests-browser']);
	browserifyWatch(paths.app,dests.app);
});

gulp.task('phantomjs-test', function() {
	gulp.src(paths.testpages)
		.pipe(mochaPhantomJS({reporter: 'spec'}));
});

gulp.task('watch', ['browserify-watch'], function() {
	
});
// lint source with jshint
gulp.task('lint', function(){
	return gulp.src(paths.src)
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});
