var gulp = require('gulp');
var less = require('gulp-less');
var livereload = require('gulp-livereload');
var connect = require('gulp-connect');
var autoprefix = require('gulp-autoprefixer');

var paths = {
    base: 'QlikIntro',
    input: '../QlikIntro/**/*',
    output: '../QlikIntro/',
    styles: {
        input: 'styles.less',
        output: '../QlikIntro/'
    },
    static: '../QlikIntro/**/*'
};

function reload() {
    console.log('Reloading')
    livereload.reload();
};

gulp.task('build:styles', function() {
    return gulp.src(paths.styles.input)
        .pipe(less())
        .pipe(autoprefix({
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest(paths.styles.output));
});

// Spin up livereload server and listen for file changes
gulp.task('listen', function() {

    connect.server({
        root: '../QlikIntro/',
        port: 4000
    });

    livereload.listen();

    gulp.watch(['styles.less'], ['build:styles']).on('change', reload);
    gulp.watch([paths.static, '../QlikIntro/index.html']).on('change', reload);
    gulp.watch(['draft.md']).on('change', reload);

});

/**
 * Task Runners
 */

// Compile files
gulp.task('compile', [
    'build:styles'
]);

// Compile files, generate docs, and run unit tests (default)
gulp.task('default', ['compile']);

// Compile files, generate docs, and run unit tests when something changes
gulp.task('watch', [
    'listen',
    'default'
]);