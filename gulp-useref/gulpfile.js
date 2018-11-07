// cnpm install --save-dev gulp gulp-useref

var gulp = require('gulp'),
        useref = require('gulp-useref');

    gulp.task('default', function () {
        return gulp.src('src/*.html')
            .pipe(useref()) //useref()里面可以添加参数useref({searchPath: '.tmp' })
            .pipe(gulp.dest('dist'));
    });
