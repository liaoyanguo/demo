// cnpm install --save-dev gulp gulp-asset-rev

const gulp = require('gulp'),
      assetRev = require('gulp-asset-rev');

gulp.task('css',function(){
    return gulp.src('src/css/style.css')
            .pipe(assetRev())
            .pipe(gulp.dest('dist/css'))
})

gulp.task('rev',['css'],function(){
    gulp.src('src/*.html')
        .pipe(assetRev())
        .pipe(gulp.dest('dist'));
})