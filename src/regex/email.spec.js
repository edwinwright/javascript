import {email} from './email.js';

// TODO: Check these emails.

/** @test {email} */
describe('email() regex', function() {

  beforeAll(function() {

    jasmine.addMatchers({
      toPassRegex: function() {
        return {
          compare: function(actual, regex) {
            var result = {};
            result.pass = regex.test(actual);

            if (result.pass) {
              result.message = 'Expected ' + actual + ' not to pass regex test.';
            } else {
              result.message = 'Expected ' + actual + ' to pass regex test.';
            }
            return result;
          }
        };
      }
    });

  });

  // Test cases for success
  xit('should return true when the value is not an email', function() {

    const validValues = [
      'email@example.com',
      'firstname.lastname@example.com',
      'email@subdomain.example.com',
      'firstname+lastname@example.com',
      'email@123.123.123.123',
      'email@[123.123.123.123]',
      '“email”@example.com',
      '1234567890@example.com',
      'email@example-one.com',
      '_______@example.com',
      'email@example.name',
      'email@example.museum',
      'email@example.co.jp',
      'firstname-lastname@example.com',
      'much.“more\ unusual”@example.com',
      'very.unusual.“@”.unusual.com@example.com',
      'very.“(),:;<>[]”.VERY.“very@\\ "very”.unusual@strange.example.com',
    ];

    validValues.forEach(value => {
      let regex = email();
      expect(value).toPassRegex(regex);
    });

  });

  // Test cases for failure
  xit('should return false when the value is not an email', function() {

    const invalidValues = [
      'plainaddress',
      '#@%^%#$@#$@#.com',
      '@example.com',
      'Joe Smith <email@example.com>',
      'email.example.com',
      'email@example@example.com',
      '.email@example.com',
      'email.@example.com',
      'email..email@example.com',
      'あいうえお@example.com',
      'email@example.com (Joe Smith)',
      'email@example',
      'email@-example.com',
      'email@example.web',
      'email@111.222.333.44444',
      'email@example..com',
      'Abc..123@example.com',
      '“(),:;<>[\]@example.com',
      'just"not"right@example.com',
      'this\ is"really"not\allowed@example.com',
    ];

    invalidValues.forEach(value => {
      let regex = email();
      expect(value).not.toPassRegex(regex);
    });

  });

});
