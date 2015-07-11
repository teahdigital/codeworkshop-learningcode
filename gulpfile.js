var gulp = require('gulp'); 
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('home', function() {
   return gulp.src(['scripts/libs/jquery-1.11.3.js', 'scripts/libs/material.min.js', 'scripts/libs/angular.min.js', 'scripts/libs/angular-route.js', 'scripts/app.js', 'scripts/controllers/controllers.js'])
       .pipe(concat('scripts.js'))
       .pipe(rename('scripts.js'))
       .pipe(uglify())
       .pipe(gulp.dest('js'));   
});

gulp.task('watch', function() {
   gulp.watch('scripts/*.js', ['home']);
});

gulp.task('default', ['home', 'watch']);	