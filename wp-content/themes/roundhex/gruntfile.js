module.exports = function(grunt){
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.initConfig({
		uglify: {
			my_target: {
				files: {
					'./js/main.js': ['_/components/js/main.js'],
					'./js/gallery.js': ['_/components/js/gallery.js']
				} //files
			} //my_target
		}, //uglify
		compass: {
			dev: {
				options:{
					config: 'config.rb'
				} //options
			} //dev
		}, //compass
		watch: {
			options: { livereload: true},
			scripts: {
				files: ['_/components/js/*.js'],
				tasks: ['uglify']
			}, //scripts
			sass:{
				files: ['_/components/sass/*.scss'],
				tasks: ['compass:dev']
			}, //sass
			php: {
				files: ['*.php']
			}
		} //watch

	})//initConfig
	grunt.registerTask('default', 'watch');
} //exports