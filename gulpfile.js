var run = require('gulp-run');
var gulp = require('gulp');
var rename = require("gulp-rename");

// use gulp-run to start a pipeline 
gulp.task('publish', function () {
  return run('npm run bundle').exec()
    .pipe(gulp.dest('output'));
});

gulp.task('cp-readme', function () {
  return gulp.src('README.md')
    .pipe(gulp.dest('./dist/'));
});

gulp.task('mv-package', function () {
  return gulp.src("bundle-package.json")
    .pipe(rename("package.json"))
    .pipe(gulp.dest("./dist"));
})

gulp.task('bundle', ['publish', 'cp-readme', 'mv-package']);
