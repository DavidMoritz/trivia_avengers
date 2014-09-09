module.exports = function(grunt) {

	grunt.config('pleeease', {
		dev: {
			options: {
				optimizers: {
					minifier: false
				}
			},
			files: {
				'<%= distPath %>trivia.css': '<%= distPath %>trivia.css'
			}
		},
		prod: {
			options: {
				optimizers: {
					minifier: true
				}
			},
			files: {
				'<%= distPath %>trivia.css': '<%= distPath %>trivia.css'
			}
		}
	});

	grunt.loadNpmTasks('grunt-pleeease');
};
