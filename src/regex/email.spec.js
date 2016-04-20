import {email} from './email.js';

// TODO: Check these emails.
// TODO: Rewrite so that the error messages return the email address in the console.

/** @test {email} */
describe('email() regex', function() {

  // Test cases for success
  it('should return true when the value is not an email', function() {
    const validValues = [
      'email@example.com',
      'firstname.lastname@example.com',
      'email@subdomain.example.com',
      'firstname+lastname@example.com',
      'email@123.123.123.123',
      'email@[123.123.123.123]', // false
      '“email”@example.com', // false
      '1234567890@example.com',
      'email@example-one.com',
      '_______@example.com',
      'email@example.name',
      'email@example.museum',
      'email@example.co.jp',
      'firstname-lastname@example.com',
      'much.“more\ unusual”@example.com', // false
      'very.unusual.“@”.unusual.com@example.com', // false
      'very.“(),:;<>[]”.VERY.“very@\\ "very”.unusual@strange.example.com', // false
    ];
    validValues.forEach(value => {
      let regex = email();
      expect(regex.test(value)).toBe(true);
    });
  });

  // Test cases for failure
  it('should return false when the value is not an email', function() {
    const invalidValues = [
      'plainaddress',
      '#@%^%#$@#$@#.com',
      '@example.com',
      'Joe Smith <email@example.com>',
      'email.example.com',
      'email@example@example.com',
      '.email@example.com', // true
      'email.@example.com', // true
      'email..email@example.com', // true
      'あいうえお@example.com',
      'email@example.com (Joe Smith)',
      'email@example', // true
      'email@-example.com',
      'email@example.web', // true
      'email@111.222.333.44444', // true
      'email@example..com',
      'Abc..123@example.com', // true
      '“(),:;<>[\]@example.com',
      'just"not"right@example.com',
      'this\ is"really"not\allowed@example.com',
    ];
    invalidValues.forEach(value => {
      let regex = email();
      expect(email().test(value)).toBe(false);
    });
  });

});
