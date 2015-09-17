var gulp = require('gulp');

var livereload = require('gulp-livereload');

gulp.task('html',function(){ //this works in sync with livereload. This is to tell livereload, if you see any change in any of the files mentioned in gulp.src(), then reload the browsers.

	return gulp.src([
		'./*.html'
	])
	.pipe(livereload());

});

gulp.task('yo',function(){ //Run only this task - gulp yo

	livereload.listen(); //start the livereoad

	gulp.watch('./*.html',['html']); //watch the html files in current directory & run 'html' task if any changes in html files 
});

gulp.task('default',['yo']); //When you run gulp using command "gulp", it runs all the tasks that are declared here in array here. If you want to run individual task, for example to run task 'yo', fire 'gulp yo'. This will run only 'yo' task