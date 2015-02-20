module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		jasmine: {
			options: {
				specs:   'tests/spec/*.js'
			},
			pageSlider: {
				src: ['zepto.pageSlider.js']
			},
			pageSliderMin: {
				src: ['zepto.pageSlider.min.js']
			}
		},

		uglify: {
			options: {
				report: 'min'
			},
			main: {
				files: {
					'zepto.pageSlider.min.js': ['zepto.pageSlider.js']
				}
			}
		},

		jshint: {
			all: ['Gruntfile.js', 'zepto.pageSlider.js']
		}
		
		
	});

    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default',['uglify','jasmine','jshint']);
    grunt.registerTask('hint',['jshint']);
};

