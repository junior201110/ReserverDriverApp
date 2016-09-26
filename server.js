var bs = require('browser-sync').create();
var historyApiFallback = require('connect-history-api-fallback');

bs.init({
    // server: "./static/index.html",
    files: ["./public/**/*.css","./public/**/*.html","./public/**/*.js"],
    server: {
        baseDir: "./public/",
        middleware: [ historyApiFallback() ]
    }
});