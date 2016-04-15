/**
 * Includes all files needed to run tests through karma and webpack.
 *
 * This method allows you to have one entry point in karma so that webpack only
 * runs once instead of once per spec file. It is much more performant.
 *
 * By including both test files and test source files, the coverage reporter will
 * add pages for components that have no tests yet. If your project is setup so that
 * tests are in a different directory to the source files (ie ./src and ./test) then
 * you'll need to have to have a context for each directory.
 */

// Require all the test files
var context = require.context('./src', true, /\.js$/);
context.keys().forEach(context);
