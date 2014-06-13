module.exports = (grunt) ->

  # Load all grunt tasks
  require('load-grunt-tasks')(grunt)

  # Show elapsed time at the end
  require('time-grunt')(grunt)

  # Project configuration.
  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')
    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed MIT */\n'
    # Task configuration
    sass:
      dist:
        options:
          style: 'expanded'
          sourcemap: true
          unixNewlines: true
          debugInfo: false
        files: [
          'css/styles.css' : 'sass/styles.scss'
        ]
    autoprefixer:
      options:
        browsers: [
          'last 2 version'
          'ie 8'
          'ie 9'
        ]
        map: true
      css:
        expand: true
        flatten: true
        src: 'css/*.css'
        dest: 'css/'
    jshint:
      options:
        jshintrc: '.jshintrc'
      all: [
        'js/*.js'
      ]
    imagemin:
      dynamic:
        options:
          optimizationLevel: 3
          progressive: true
        files: [
          expand: true
          cwd: 'images/dist'
          src: ['**/*.{png,jpg,gif}']
          dest: 'images/'
        ]
    watch:
      gruntfile:
        files: ['Gruntfile.coffee']
      js:
        files: [
          'js/{,*/}*.js'
        ]
        tasks: ['jshint']
        options:
          livereload: true
      sass:
        files: [
          'sass/**/{,*/}*.{scss,sass}'
        ]
        tasks: [
          'sass'
          'autoprefixer'
        ]
        options:
          livereload: true
  grunt.registerTask('dev',
    [
      'sass'
      'autoprefixer'
      'watch'
    ])

  grunt.registerTask('compress', [
    'imagemin'
    ])
  return
