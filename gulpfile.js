var gulp = require('gulp');
var debug = require('gulp-debug');

var dist = 'public/js/lib';

gulp.task('scripts', function () {
    gulp.src(['node_modules/angular/angular.js','node_modules/@uirouter/angularjs/release/angular-ui-router.js','node_modules/angular-ui-mask/dist/mask.min.js'])
        .pipe(debug({title:'scripts'}))
        .pipe(gulp.dest(dist))
});
