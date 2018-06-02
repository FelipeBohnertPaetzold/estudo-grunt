module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'public/css/main.css': 'src/styles/sass/*.scss'
        }
      }
    },
    copy: {
      main: {
        files: [
          {
            expand: false,
            src: ['node_modules/bootstrap/dist/js/bootstrap.min.js'],
            dest: 'public/js/bootstrap.min.js',
            filter: 'isFile'
          },
          {
            expand: false,
            src: ['node_modules/bootstrap/dist/css/bootstrap.min.css'],
            dest: 'public/css/bootstrap.min.css',
            filter: 'isFile'
          }
        ]
      }
    },
    uglify: {
      my_target: {
        files: {
          'public/js/all.min.js': ['public/js/bootstrap.min.js', 'src/js/*.js']
        }
      }
    },
    cssmin: {
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'public/css/all.min.css': [
            'public/css/bootstrap.min.css',
            'public/css/main.css'
          ]
        }
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-contrib-sass')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-cssmin')

  grunt.registerTask('default', ['sass', 'copy', 'uglify', 'cssmin'])
  grunt.registerTask('generate-css', ['sass', 'cssmin'])
  grunt.registerTask('generate-js', ['uglify'])
}
