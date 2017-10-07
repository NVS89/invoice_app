var gulp = require('gulp');
var debug = require('gulp-debug');

var dist = 'public/js/lib';

gulp.task('scripts', function () {
    gulp.src(['node_modules/angular/angular.js','node_modules/@uirouter/angularjs/release/angular-ui-router.js'])
        .pipe(debug({title:'scripts'}))
        .pipe(gulp.dest(dist))
});
