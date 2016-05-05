module.exports = function GruntConfig(grunt) {
	grunt.registerTask('foo', 'My "foo" task.', function(a, b) {
		grunt.log.writeln(this.name, a, b);
	});
};