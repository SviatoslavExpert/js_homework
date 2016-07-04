module.exports = function(grunt) {
	grunt.initConfig({
		 sass: {
  dist: {
    options: {
      sourcemap: 'none'
    },
    files: [{
      expand: true,
      cwd: 'sass',
      src: ['**/*.scss'],
      dest: 'css',
      ext: '.css'
  }]
  }
}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.registerTask('default', ['sass']);
};