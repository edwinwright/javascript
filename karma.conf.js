'use strict';

// Karma config object
var karmaConfig = {



  // basePath: './',
  // colors: true,
  // logLevel: 'INFO',
  // captureTimeout: 60000,
  // browserDisconnectTimeout : 10000,
  // browserDisconnectTolerance : 1,
  // browserNoActivityTimeout : 60000,
  // singleRun: true,



  // autoWatch: false,



  browsers: ['PhantomJS'],
  frameworks: ['jasmine'],


  // Register files to load
  files: 'tests.webpack.js',

  // Register reporters
  reporters: [
    'spec',
    'html',
    'coverage',
  ],

  // Configure console spec reporter
  specReporter: {
    maxLogLines: 2,
    suppressErrorSummary: true,
    suppressFailed: false,
    suppressPassed: true,
    suppressSkipped: false,
    showSpecTiming: true
  },

  // Configure html spec reporter
  htmlReporter: {
    outputDir: 'reports/unit-tests',
  },

  // Configure html coverage reporter
  coverageReporter: {
    includeAllSources: true,
    dir: 'reports/coverage',
    reporters: [
      {type: 'text-summary'},
      {type: 'html'},
      {type: 'clover', subdir: '.', file: 'clover.xml'},
    ],
  },

  // Preprocess files
  preprocessors: {
    'tests.webpack.js': ['webpack', 'sourcemap'],
  },

  // Webpack configuration
  webpack: {
    devtool: 'inline-source-map',

    module: {
      preLoaders: [
        // transpile all files except testing sources with babel as usual
        {
          test: /\.js$/,
          include: /src/,
          loader: 'babel',
          query: {
            presets: ['es2015'],
          },
        },
        {
          test: /^(.(?!\.spec))*\.js$/,
          include: /src/,
          loader: 'isparta',
        },
      ],
    },
  },

  // TODO: Do I need this??
  webpackMiddleware: {
    stats: {
      chunks: false,
    },
  },

};

// Export the module
module.exports = function(config) {
    config.set(karmaConfig);
};

