module.exports = function(grunt) {
	grunt.initConfig({
		// Конкатенация
		concat: {
			js: {
				src: [
					'src/js/**/*.js'
				],
				dest: 'dist/js/scripts.js'
			},
			css: {
				src: [
					'src/css/**/*.css'
				],
				dest: 'dist/css/scripts.css'
			}
		},
		// Сжатие	
		cssmin: {
			css:{ src: '<%= concat.css.dest %>', dest: 'dist/css/all.min.css' }
		},
		uglify: {
			my_target: {
					files: {
						'dist/js/scripts.min.js': ['src/js/jquery-2.1.4.min.js', 'src/js/bootstrap.min.js', 'src/js/script.js']
				}
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	
	grunt.registerTask('default', ['concat','cssmin','uglify']);
};