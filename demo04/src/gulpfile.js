const gulp = require("gulp")
const webserver = require("gulp-webserver")

gulp.task("webserver", function() {
  gulp.src("../")
    .pipe(webserver({
      open:"http://localhost/index.html",
      port:80
    }))
})

gulp.task("default", ["webserver"], function() {
  console.log("gulp is donging...")
})
