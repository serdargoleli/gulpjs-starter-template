const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

gulp.task("sass", () => {
  return gulp.src("./scss/main.scss").pipe(sass()).pipe(gulp.dest("./"));
});

gulp.task("watch", () => {
  gulp.watch("scss/*.scss", gulp.series("sass"));
});
