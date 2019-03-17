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
        src: 'dist/index.min.html',
        dest: 'dist/index.html'                      
      }     
    },
    cssmin:{
      'dist/rectangle.css':'./rectangle.css'
    },
    uglify:{
      release:{
        files:{
          'dist/bundle.min.js':'dist/bundle.js'
        }
      } 
    },
    concat:{
      js:{
        src:['./rectangle.js','./calc.js'],
        dest:'dist/bundle.js'
      }
    },
    copy:{
      html:{
        src:'./index.html',
        dest:'./dist/index.min.html'
      }
    },
    useminPrepare: {
      html: 'index.html',
      options: {
        dest: 'dist'                
      }        
    },
    usemin:{
      html:['dist/index.min.html']
    },
    clean:['dist/bundle.js', '.tmp','dist/index.min.html']
  });

  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-htmlhint');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-mocha');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');

          
  grunt.registerTask('lint', ['htmlhint', 'csslint', 'eslint']);
  grunt.registerTask('default',['mocha']);
  grunt.registerTask('min',['copy','cssmin','concat','uglify','useminPrepare','usemin','htmlmin','clean']);
};

