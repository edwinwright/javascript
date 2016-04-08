#!/bin/sh
# Sets up a project to run tests in Jasmine and Karma
# ES6 support is also added via Webpack

# Install dependencies
npm install --save-dev \
	babel-core \
	babel-loader \
	babel-preset-es2015 \
	jasmine \
	jasmine-core \
	karma \
	karma-jasmine \
	karma-phantomjs-launcher \
	karma-webpack \
	phantomjs-prebuilt \
	webpack \

# Create the karma config file
cat << EOF > karma.conf.js
module.exports = function(config) {
    config.set({
        browsers: ['PhantomJS'],
        files: [
            { pattern: 'test-context.js', watched: false }
        ],
        frameworks: ['jasmine'],
        preprocessors: {
            'test-context.js': ['webpack']
        },
        webpack: {
            module: {
                loaders: [
                    { test: /\.js/, exclude: /node_modules/, loader: 'babel-loader' }
                ]
            },
            watch: true
        },
        webpackServer: {
            noInfo: true
        }
    });
};
EOF

cat << EOF > .babelrc
{
  "presets": ["es2015"]
}
EOF

# Create the context file
cat << EOF > test-context.js
var context = require.context('./src', true, /\.spec\.js$/);
context.keys().forEach(context);
EOF

# TODO: Add a scripts command to package.json

