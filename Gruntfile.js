module.exports = function(grunt) {
    grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
            dist: {
				options: {                       // Target options 
					style: 'expanded'
				},
                files: {
                    'dist/css/stylesheet.css':'bower_components/bootstrap-sass/assets/stylesheets/_bootstrap.scss'
                }
            }
        },
        // configure the "grunt watch" task
        watch: {          
			sass: {
                files: ['bower_components/bootstrap-sass/assets/stylesheets/*.scss'],
                tasks: ['sass:dist']
            }
        },
        wiredep: {

            task: {

                // Point to the files that should be updated when
                // you run `grunt wiredep`
                src: [
                    'application/views/templates/header.html',   // .html support...
                ],

                options: {
                    // See wiredep's configuration documentation for the options
                    // you may pass:

                    // https://github.com/taptapship/wiredep#configuration
                },
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-wiredep');

    // "grunt buildcss" is the same as running "grunt sass:dist".
    // if I had other tasks, I could add them to this array.
    grunt.registerTask('default', ['watch']);
	
	
    grunt.registerTask('style', ['sass:dist']);

    grunt.registerTask('serve', ['default', 'connect', 'watch']);

    grunt.registerTask('pub', ['default', 'sftp-deploy']);
};