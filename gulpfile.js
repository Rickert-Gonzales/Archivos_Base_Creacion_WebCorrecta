//llamamos a gulp
const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync");

//creamos una tarea de gulp
//una tarea es: acciones que realizara gulp
//combierte los archivos de sass a css
gulp.task(
  "sass",
  gulp.series(() => {
    return gulp
      .src([
        "node_modules/bootstrap/scss/bootstrap.scss",
        //*.scss -> tomame todos los archivos que terminen en scss
        "src/scss/*.scss"
      ])

      .pipe(sass({ outputStyle: "compressed" }))
      .pipe(gulp.dest("src/css"))
      .pipe(browserSync.stream());
  })
);

//guardamos y generamos los archivos Js en nuestra carpeta de desarrollo
gulp.task(
  "js",
  gulp.series(() => {
    return gulp
      .src([
        "node_modules/bootstrap/dist/js/bootstrap.js",
        "node_modules/jquery/dist/jquery.min.js",
        "node_modules/popper.js/dist/umd/popper.min.js"
      ])

      .pipe(gulp.dest("src/js"))
      .pipe(browserSync.stream());
  })
);

//creamos la tarea para copiar a font-awesome
gulp.task(
  "font-awesome",
  gulp.series(() => {
    //le decimos que copie los atributos de fontAwesome dentro del src para usarlos
    return gulp
      .src("node_modules/font-awesome/css/font-awesome.min.css")
      .pipe(gulp.dest("src/css"));
  })
);

//tipografia de font-awesome
gulp.task(
  "fonts",
  gulp.series(() => {
    return gulp
      .src("node_modules/font-awesome/fonts/*")
      .pipe(gulp.dest("src/fonts"));
  })
);

//creamos el seridor de desarrollo
gulp.task(
  "serve",
  gulp.series(["sass"], () => {
    browserSync.init({
      server: {
        baseDir: "./src"
      }
    });
  })
);

gulp.watch(
  ["node_modules/bootstrap/scss/bootstrap.scss", "src/scss/*.scss"],
  gulp.parallel(["sass"])
);

gulp.watch(["src/*.html"]).on("change", browserSync.reload);

//ejecutamos las tareas
gulp.task("default", gulp.series(["font-awesome", "fonts", "js", "serve"]));
