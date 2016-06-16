var gulp = require('gulp');
var Server = require('karma').Server;
var jshint = require('gulp-jshint');

gulp.task('lint',function(){
    return gulp.src('./source/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});
gulp.task('unit-test',['lint'],function(done){
    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    },done).start();
});