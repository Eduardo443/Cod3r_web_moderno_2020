const {series} = require('gulp')
const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsproject = ts.createProject(tsconfig.json)

function transformationTS() {
    return tsproject.src()
        .pipe(tsproject())
        .pipe(gulp.dest('build'))
}

module.exports.default = series(transformationTS) 