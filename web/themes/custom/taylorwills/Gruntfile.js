module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      sass: {
        dist: {
            files: {
                'dist/css/global.css' : 'src/scss/global.scss'
            }
        }
        },
        watch: {
            css: {
                files: ['src/*.scss', 'src/scss/modules/*.scss'],
                tasks: ['sass']
            }
        }
    });
  
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
  
    // Default task(s).
    grunt.registerTask('default',['sass','watch']);
  
  };