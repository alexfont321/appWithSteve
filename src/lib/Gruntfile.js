module.exports = function (grunt) {
    grunt.initConfig({
        browserify: {
            js: {
                src: ["../js/main.js"],
                dest: "../dist/app.js"
            },
            options: {
                browserifyOptions: {
                    paths: [
                        "./node_modules"
                    ]
                }
            }
        },
        
        watch: {
            js: {
                files: ["../js/**/*.js"],
                tasks: ["browserify"]
            },
            browserify: {
                files: ["../js/*.js"],
                tasks: ["browserify"]
            }
        }
    });

    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
    grunt.registerTask("default", ["browserify", "watch"]);
};