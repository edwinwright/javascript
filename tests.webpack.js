// Require all the test files
var testsContext = require.context('./src', true, /\.spec\.js$/);
testsContext.keys().forEach(testsContext);

// Require all the test source files
// Including these allows the coverage reporter to generate a page for components that have no tests.
var componentsContext = require.context('./src', true, /^(.(?!\.spec))*\.js$/);
componentsContext.keys().forEach(componentsContext);
