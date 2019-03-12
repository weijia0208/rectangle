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
    },
    htmlmin: {
      options: {
        collapseWhitespace: true,
        preserveLineBreaks: false                                  
      },
      files: {
        src: './index.html',
        dest: 'dist/index.html'                      
      }     
    },
    cssmin:{
      'dist/rectangle.min.css':'./rectangle.css'
    },
    uglify:{
      'dist/rectangle.min.js':'./rectangle.js'
    },
    concat:{
      js:{
        src:['rectangle.js','calc.js'],
        dest:'dist/bundle.js'
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-htmlhint');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-mocha');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');

          
  grunt.registerTask('lint', ['htmlhint', 'csslint', 'eslint']);
  grunt.registerTask('default',['mocha']);
  grunt.registerTask('min',['htmlmin','cssmin','uglify','concat']);

};

