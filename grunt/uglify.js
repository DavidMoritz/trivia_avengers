/**
 * concat and minify scripts
 */
module.exports = function(grunt) {
	grunt.config.set('uglify', {
		prod: {
			options: {
				banner: '<%= banner %>',
			},
			files: {
				'<%= distPath %>trivia.js': '<%= distPath %>trivia.js'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
};