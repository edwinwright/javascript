'use strict';

// https://medium.com/@scbarrus/how-to-get-test-coverage-on-react-with-karma-babel-and-webpack-c9273d805063#.uk45m1lol

var karmaConfig = {
  browsers: ['PhantomJS'],
  // browsers: ['Chrome'],

  frameworks: ['jasmine'],

  files: [
    { pattern: 'tests.webpack.js', watched: false }
  ],

  reporters: [
    'spec',       // generates console spec report
    'html',       // generates html spec report
    'coverage',   // generates html coverage report
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
    dir : 'reports/coverage',
    reporters: [
      {type: 'text-summary'},   // generates console coverage report
      {type: 'html'},           // generates html coverage report
      {type: 'clover', subdir: '.', file: 'clover.xml'},
    ],
  },

  preprocessors: {
    'tests.webpack.js': ['webpack', 'sourcemap']
  },

  // https://webpack.github.io/docs/loaders.html
  webpack: {
    devtool: 'inline-source-map',

    module: {

      preLoaders: [
        {
          test: /\.js$/,
          loader: 'eslint',
        }
      ],
      
      loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'  
      }],
      
      // Delays coverage until after tests are run, fixing transpiled source coverage error
      postLoaders: [{
        test: /^(.(?!\.spec))*\.js$/,
        include: /src/,
        loader: 'istanbul-instrumenter'
      }],

    },

    watch: true
  },

  webpackServer: {
    noInfo: true
  }
};



module.exports = function(config) {
    config.set(karmaConfig);
};








// NG KARMA.CONF
// 'use strict';

// var path = require('path');
// var conf = require('./gulp/conf');

// var _ = require('lodash');
// var wiredep = require('wiredep');

// var pathSrcHtml = [
//   path.join(conf.paths.src, '/**/*.html'),
// ];

// function listFiles() {
//   var wiredepOptions = _.extend({}, conf.wiredep, {
//     dependencies: true,
//     devDependencies: true,
//   });

//   return wiredep(wiredepOptions).js
//     .concat([
//       path.join(conf.paths.src, '/test.js'),
//     ])
//     .concat(pathSrcHtml);
// }

// module.exports = function(config) {

//   var configuration = {
//     basePath: './',
//     frameworks: ['jasmine'],
//     colors: true,
//     logLevel: 'INFO',
//     autoWatch: false,
//     browsers: ['PhantomJS'],
//     captureTimeout: 60000,
//     browserDisconnectTimeout : 10000,
//     browserDisconnectTolerance : 1,
//     browserNoActivityTimeout : 60000,
//     singleRun: true,
//     files: listFiles(),
//     reporters: [
//       'spec',
//       'html',
//       'coverage',
//     ],

//     plugins: [
//       'karma-babel-preprocessor',
//       'karma-phantomjs-launcher',
//       'karma-spec-reporter',
//       'karma-html-reporter',
//       'karma-coverage',
//       'karma-jasmine',
//       'karma-ng-html2js-preprocessor',
//       'karma-webpack',
//     ],

//     specReporter: {
//       maxLogLines: 2,
//       suppressErrorSummary: true,
//       suppressFailed: false,
//       suppressPassed: false,
//       suppressSkipped: true,
//     },

//     htmlReporter: {
//       outputDir: 'test-reports/unit-test-results',
//     },

//     coverageReporter: {
//       includeAllSources: true,
//       reporters: [
//         {type: 'text-summary'},
//         {type: 'clover', dir: 'test-reports', subdir: '.', file: 'clover.xml'},
//         {type: 'html', dir: 'test-reports/unit-test-coverage/'},
//       ],
//     },

//     ngHtml2JsPreprocessor: {
//       stripPrefix: conf.paths.src + '/',
//       moduleName: 'hsbcMobileX',
//     },

//     babelPreprocessor: {
//       options: {
//         sourceMap: 'inline',
//       },
//       filename: function filename(file) {
//         return file.originalPath.replace(/\.js$/, '.es5.js');
//       },
//       sourceFileName: function sourceFileName(file) {
//         return file.originalPath;
//       },
//     },

//     preprocessors: {
//       'src/**/*.html': ['ng-html2js'],
//       'src/**/*.spec.js': ['babel'],
//       'src/test.js': ['webpack'],
//     },

//     webpack: {
//       module: {
//         preLoaders: [
//           // transpile all files except testing sources with babel as usual
//           {
//             test: /\.js$/,
//             loader: 'babel',
//             query: {
//               presets: ['es2015'],
//             },
//           },
//           {
//             test: /^(.(?!\.spec))*\.js$/,
//             loader: 'isparta',
//           },
//         ],
//       },
//     },
//     webpackMiddleware: {
//       stats: {
//         chunks: false,
//       },
//     },
//   };
//   config.set(configuration);
// };



// SG KARMA.CONF
// var path = require('path');

// Karma configuration
// module.exports = function(config) {

//   config.set({
//     basePath: './',
//     frameworks: ['jasmine'],
//     port: 9876,
//     colors: true,
//     logLevel: config.LOG_ERROR,
//     autoWatch: false,
//     browsers: ['PhantomJS'],
//     singleRun: true,
//     concurrency: 1,
//     files: [
//       './node_modules/phantomjs-polyfill/bind-polyfill.js',
//       'docs/assets/js/vendor.js',
//       'tests/custom-matchers.js',
//       'tests.js',
//       'dist/hsbc-mobile-ui-toolkit-font-full.css',
//       'dist/hsbc-mobile-ui-toolkit-bg-images-base.css',
//       'dist/hsbc-mobile-ui-toolkit.css'
//     ],
//     reporters: [
//       'spec',
//       'html',
//       'coverage'
//     ],
//     specReporter: {
//       maxLogLines: 2,
//       suppressErrorSummary: true,
//       suppressFailed: false,
//       suppressPassed: false,
//       suppressSkipped: true
//     },
//     htmlReporter: {
//       outputDir: 'tests/unit_test_results',
//       templatePath: 'src/tpl/jasmine_template.html'
//     },
//     coverageReporter: {
//       includeAllSources: true,
//       reporters: [
//         {
//           type: 'html',
//           dir: 'tests/unit_test_coverage'
//         },
//         {
//           type: 'text-summary'
//         }
//       ]
//     },
//     preprocessors: {
//         'tests.js': ['webpack']
//     },
//     webpack: {
//       babel: {
//         presets: ['es2015-loose', 'stage-0'],
//         plugins: ['transform-object-assign']
//       },
//       isparta: {
//         embedSource: true,
//         noAutoWrap: true,
//         babel: {
//           presets: ['es2015-loose', 'stage-0'],
//           plugins: ['transform-object-assign']
//         }
//       },
//       module: {
//         preLoaders: [
//           {
//             test: /\.js$/,
//             loader: 'babel'
//           },
//           {
//             test: /^(.(?!\.spec))*\.js$/,
//             include: path.resolve('src/js/'),
//             loader: 'isparta'
//           }
//         ]
//       },
//       externals: [
//         {
//           TweenLite: 'TweenLite',
//           TweenMax: 'TweenMax',
//           TimelineLite: 'TimelineLite',
//           TimelineMax: 'TimelineMax',
//           Hammer: 'Hammer',
//           Throttle: true,
//           Debounce: true
//         }
//       ],
//       cache: true
//     }
//   });

// };


