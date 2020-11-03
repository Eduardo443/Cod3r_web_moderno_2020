const gulp = require('gulp')
const {series} = require ('gulp')
const babel = require ('gulp-babel')
const concat = require('gulp-concat')
const GulpUglify = require('gulp-uglify')
const uglify = require('gulp-uglify')

const padrao = cb =>{
    return gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false,
            presets: ["env"]
        }))
        .pipe(uglify())
        .on('error', err => console.log(err))
        .pipe(concat('codigo.min.js'))
        .pipe(gulp.dest('build'))
}

module.exports.default = series(padrao)