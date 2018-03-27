const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('reveal', () => {
    var asciidoctor = require('asciidoctor.js')();
    require('asciidoctor-reveal.js');
    var attributes = {
        'revealjsdir': 'node_modules/reveal.js@',
        'revealjs_history': true};
    var options = {safe: 'safe', backend: 'revealjs', attributes: attributes};
    asciidoctor.convertFile('presentation.adoc', options);
});

/**
 * Serve public folder and watch all changes
 */
gulp.task('serve', ['reveal'], () => {
    browserSync.init({
    port: 8000,
    server: {
    },
    browser: ['chrome'],
    index: 'presentation.html'
    });

    gulp.watch(
        ['*.adoc', '*.js'], ['reveal', browserSync.reload]);
});

gulp.task('default', ['serve']);