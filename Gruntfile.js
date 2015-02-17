module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		jasmine: {
			options: {
				specs:   'tests/spec/*.js'
			},
			fullPageScroll: {
				src: ['zepto.fullPageScroll.js']
			},
			fullPageScrollMin: {
				src: ['zepto.fullPageScroll.min.js']
			}
		},

		uglify: {
			options: {
				report: 'min'
			},
			main: {
				files: {
					'zepto.fullPageScroll.min.js': ['zepto.fullPageScroll.js']
				}
			}
		},

		jshint: {
			all: ['Gruntfile.js', 'zepto.fullPageScroll.js']
		}
		
		
	});

    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default',['uglify','jasmine','jshint']);
    grunt.registerTask('hint',['jshint']);
};

