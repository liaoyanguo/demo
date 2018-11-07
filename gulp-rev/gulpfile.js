// cnpm install --save-dev gulp gulp-rev gulp-rev-collector

const gulp = require('gulp'),
      rev = require('gulp-rev'),
      revCollector = require('gulp-rev-collector');

gulp.task('css',function(){
    return gulp.src('src/css/*.*')
               .pipe(rev())
               .pipe(gulp.dest('dist/css'))
               .pipe(rev.manifest())
               .pipe(gulp.dest('rev/css'))
})

gulp.task('js',function(){
    return gulp.src("src/js/*.*")
               .pipe(rev())
               .pipe(gulp.dest("dist/js"))
               .pipe(rev.manifest())
               .pipe(gulp.dest('rev/js'))
})

gulp.task('rev',['css','js'],function(){
    return gulp.src(['rev/**/*.json','src/*.html'])
               .pipe(revCollector({
                   replaceReved: true
               })).pipe(gulp.dest('dist'))
})