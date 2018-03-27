module.exports = function(grunt) {

    grunt.initConfig({
        watch: {
            content: {
                files: ['*.adoc'],
                tasks: ['reveal']
            },
            options: {
                livereload: true
            }
        }
    });

    grunt.loadTasks('node_modules/reveal.js');

    grunt.registerTask('default', ['reveal', 'connect', 'watch']);


    grunt.registerTask('reveal', 'Conversion reveal', function() {
        grunt.log.writeln('reveal');

        var asciidoctor = require('asciidoctor.js')();
        require('asciidoctor-reveal.js');
        var attributes = {'revealjsdir': 'node_modules/reveal.js@'};
        var options = {safe: 'safe', backend: 'revealjs', attributes: attributes};
        asciidoctor.convertFile('presentation.adoc', options);


    });

};
/*module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        watch: {
            content: {
                files: ['*.adoc'],
                tasks: ['reveal']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['reveal', 'watch']);

    grunt.registerTask('reveal', 'Conversion reveal', function() {
        grunt.log.writeln('reveal');

        var asciidoctor = require('asciidoctor.js')();
        require('asciidoctor-reveal.js');
        var attributes = {'revealjsdir': 'node_modules/reveal.js@'};
        var options = {safe: 'safe', backend: 'revealjs', attributes: attributes};
        asciidoctor.convertFile('presentation.adoc', options);


    });

};

*/