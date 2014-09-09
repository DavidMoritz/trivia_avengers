/**
 * concatenate scripts together for dev
 */
module.exports = function(grunt) {
	grunt.config.set('concat', {
		dev: {
			options: {
				stripBanners: true,
				banner: '<%= banner %>',
			},
			files: {
				'<%= distPath %>lib.js': [
					'lib/jquery/dist/jquery.js',
					'lib/bootstrap/dist/js/bootstrap.js',
					'lib/lodash/dist/lodash.js'
				],
				'<%= distPath %>trivia.js': [
					'src/trivia.js',
					'src/*.js'
				]
			}
		},
		prod: {
			options: {
				stripBanners: true,
				banner: '<%= banner %>'
			},
			files: {
				'<%= distPath %>trivia.js': [
					'lib/jquery/dist/jquery.js',
					'lib/bootstrap/dist/js/bootstrap.js',
					'lib/lodash/dist/lodash.js',
					'!src/tests/*',
					'src/trivia.js',
					'src/**/*.js'
				],
				'<%= distPath %>trivia.css': '<%= distPath %>trivia.css'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
};