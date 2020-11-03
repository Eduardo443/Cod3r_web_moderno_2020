const gulp = require('gulp')
const {series, parallel} = require('gulp')

const copy = cb =>{
    gulp.src('pastaA/**/*.txt')
        .pipe(gulp.dest('pastaB'))
    return cb
}

module.exports.default = series(copy)