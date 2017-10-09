var gulp = require("gulp"),
    concat = require("gulp-concat"),
    uglify = require("gulp-uglify"),
    rename = require("gulp-rename"),
    minifyCSS = require("gulp-minify-css");
//压缩js
gulp.task("uglifyJS",function(){
    gulp.src(['js/*.js'])
        .pipe(concat("main.js"))
        .pipe(rename("main.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("./js"))
})
//压缩css
gulp.task("minifyCSS",function(){
    gulp.src(['css/*.css'])
        .pipe(concat("main.css"))
        .pipe(rename("main.min.css"))
        .pipe(minifyCSS())
        .pipe(gulp.dest("./css"))
})