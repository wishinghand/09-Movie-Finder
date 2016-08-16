var gulp = require('gulp'),
    inject = require('gulp-inject'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    runSequence = require('run-sequence'),
    clean = require('gulp-clean');

var jsSources = ['src/**/*.js'],
    cssSources = ['src/css/**/*.scss'],
    htmlSources = ['**/*.html'];

gulp.task('clean', function(){
    return gulp.src('./build/*.*', {read: false})
    .pipe(clean());
});

/**JS gulp tasks*****************************************************************/
gulp.task('concatJs', function(){
    return gulp.src(['node_modules/angular/angular.min.js', 'node_modules/angular-ui-router/release/angular-ui-router.min.js', 'node_modules/angular-toastr/dist/angular-toastr.tpls.js', './src/**/*.js'])
    .pipe(concat('build.js'))
    .pipe(gulp.dest('./build/'))
});

/**CSS gulp tasks*****************************************************************/
gulp.task('compileSass', function(){
    return gulp.src(['node_modules/angular-toastr/dist/angular-toastr.css', 'src/css/vital.css', './src/css/*.scss'])
    .pipe(sass())
    //and concatenates them
    .pipe(concat('build.css'))
    .pipe(gulp.dest('./build/'))
});

gulp.task('inject', function(){
    var sources = gulp.src(['./build/*.css', './build/*.js'], {read: false})
    return gulp.src('index.html')
        .pipe(inject(sources, {relative: true}))
        .pipe(gulp.dest('./'));
});

gulp.task('connect', function(){
    return connect.server({
        root: './',
        livereload: true,
        port: 8889
    })
});

//checks js/html/css on change...
gulp.task('watch', function() {
    gulp.watch(jsSources, ['js', 'concatJs']);
    gulp.watch(cssSources, ['css', 'compileSass']);
    gulp.watch(htmlSources, ['html']);
});

//...and reloads
gulp.task('js', function() {
    gulp.src(jsSources)
        .pipe(connect.reload())
});

gulp.task('html', function() {
    gulp.src(htmlSources)
        .pipe(connect.reload())
});

gulp.task('css', function() {
    gulp.src(cssSources)
        .pipe(connect.reload())
});

gulp.task('serve', function(done) {
    runSequence('clean', 'concatJs', 'compileSass', 'inject', 'connect', 'watch', function() {
        done();
    });
});