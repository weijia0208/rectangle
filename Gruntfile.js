module.exports = function (grunt) {
  grunt.initConfig({
    eslint: {
      options: {
        configFile: '.eslintrc.js'
          
      },
      target: ['./js/*.js']                      
    },
    csslint: {
      options: {
        csslintrc: '.csslintrc'          
      },
      src: 'css/*.css'
              
    },
    htmlhint: {
      options: {
        htmlhintrc: '.htmlhintrc'          
      },
      src: '*.html'        
    },
    mocha:{
      options:{
        run:true,
        reporter:'Dot'
      },
      test:{
        src:['test/index.html'],
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-htmlhint');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-mocha');

          
  grunt.registerTask('default', ['htmlhint', 'csslint', 'eslint']);
  grunt.registerTask('default',['mocha']);

};

