const mix = require("laravel-mix");

mix
  .js("src/app.js", "dist")
  .extract(["alpinejs"])
  .postCss("src/style.css", "dist", [require("tailwindcss")])
  .copy("src/img", "dist/img")
  .setPublicPath("dist")
  .browserSync({
    open: false,
    ui: false,
    proxy: "cv.test",
    port: 3000,
    files: ["index.html", "src/**"],
  });
