const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const rename = require("gulp-rename");
const clean = require("gulp-clean-css");
const sourcemaps = require("gulp-sourcemaps");
//const purgecss = require("gulp-purgecss");

function buildStyles() {
  return (
    src("masafa/**/*.scss")
      .pipe(sass())
      //.pipe(purgecss({ content: ["*.html"] }))
      .pipe(rename("masafa.css"))
      .pipe(dest("css"))
  );
}

function minifyCSS() {
  return src("css/masafa.css")
    .pipe(sourcemaps.init())
    .pipe(rename("masafa.min.css"))
    .pipe(clean())
    .pipe(sourcemaps.write("."))
    .pipe(dest("css"));
}

function watchTasks() {
  watch(["masafa/**/*.scss", "*.html"], buildStyles);
}

exports.default = series(buildStyles, minifyCSS, watchTasks);
