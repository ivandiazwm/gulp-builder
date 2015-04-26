module.exports = {
    _: require('lodash'),
    browserify: require('browserify'),
    browserSync: require('browser-sync'),
    buffer: require('vinyl-buffer'),
    concat: require('gulp-concat'),
    cssmin: require('gulp-minify-css'),
    del: require('del'),
    gulpif: require('gulp-if'),
    handlebars: require('gulp-compile-handlebars'),
    jshint: require('gulp-jshint'),
    mergeStream: require('merge-stream'),
    reactify: require('reactify'),
    reload: require('browser-sync').reload,
    rename: require('gulp-rename'),
    sass: require('gulp-sass'),
    source: require('vinyl-source-stream'),
    uglify: require('gulp-uglify')
};