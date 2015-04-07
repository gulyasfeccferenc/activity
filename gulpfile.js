'use strict';
var srcPath              = './front_src';
var destPath             = './web';
var js_dest_dir          = 'js';
var css_dest_dir         = 'css';
var images_dest_dir      = 'images';
var gulp_bower_dest_dir  = 'bower';

var gulp       = require('gulp');
var $          = require('gulp-load-plugins')();
var glob       = require('glob');
var path       = require('path');
var browserify = require('browserify');
var source     = require('vinyl-source-stream');
var buffer     = require('vinyl-buffer');
var bower      = require('main-bower-files');
var sprite     = require('css-sprite').stream;
var _          = require('lodash');
var argv       = require('yargs').argv;

var env = argv.env || 'dev';
function src(path) { return srcPath + '/' + path; }
function dest(path) { return destPath + '/' + path; }

gulp.task('bower', function() {
    return gulp
        .src(bower(), {base: src('bower_components')})
        .pipe(gulp.dest(dest(gulp_bower_dest_dir)));
});

gulp.task('scripts', function() {
    var arrayBundle = function(srcArray) {
        _.each(srcArray, function(sourcePath) {
            browserify({
                entries: sourcePath,
                debug: env == 'dev',
                paths: [src('bower_components')]
            })
            .bundle()
            .on('error', handleErrors)
            .pipe(source(path.basename(sourcePath)))
            .pipe(buffer())
            // Uglify is not working well with browserify, so I disabled it
            // temporarily
            // .pipe(env == 'prod' ? $.uglify() : $.util.noop())
            .pipe(gulp.dest(dest(js_dest_dir)));
        });
    };

    glob(src('scripts/*.js'), {}, function(er, files) {
        arrayBundle(files);
    });
});

gulp.task('styles', function () {
    return gulp
        .src(src('styles/*.scss'))
        .pipe(env == 'dev' ? $.sourcemaps.init() : $.util.noop())
        .pipe($.sass({
            includePaths: [src('bower_components')],
            imagePath: '../' + images_dest_dir
        }))
        .on('error', handleErrors)
        .pipe($.autoprefixer({browsers: ['> 1%']}))
        .pipe(env == 'dev' ? $.sourcemaps.write() : $.util.noop())
        .pipe(env == 'prod' ? $.csso() : $.util.noop())
        .pipe(gulp.dest(dest(css_dest_dir)));
});

gulp.task('sprites', function () {
    return gulp
        .src(src('sprites/a-icon/*.png'))
        .pipe(sprite({
            name: 'a-icon',
            style: 'a-icon.scss',
            cssPath: '../' + images_dest_dir + '/sprites',
            processor: 'css',
            prefix: 'a-icon',
            template: src('sprites/css.mustache')
        }))
        .pipe($.if(
            '*.png',
            gulp.dest(src(images_dest_dir + '/sprites')),
            gulp.dest(src('styles/sprites/'))
        ))
});

gulp.task('images', function () {
    return gulp
        .src(src('images/**/*'))
        .pipe($.cache($.imagemin({
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest(dest(images_dest_dir)));
});

gulp.task('watch', function() {
    $.watch(src('styles/**/*.scss'), function () {
        gulp.start('styles');
    });
    $.watch(src('scripts/**/*.js'), function () {
        gulp.start('scripts');
    });
    $.watch(src('atlases/a-icon/*.png'), function () {
        gulp.start('atlases');
    });
});

gulp.task('build', ['bower', 'scripts', 'styles', 'images']);
gulp.task('default', ['build']);

function handleErrors() {
    var args = Array.prototype.slice.call(arguments);

    // Send error to notification center with gulp-notify
    $.notify.onError({
        title: 'Compile Error',
        message: '<%= error.message %>'
    }).apply(this, args);

    // Keep gulp from hanging on this task
    this.emit('end');
};
