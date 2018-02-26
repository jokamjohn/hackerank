/**
 * Test if a password is strong
 * Check for special characters, digits, lowercase and uppercase characters within the supplied input.
 * Also consider the length of the password.
 * @param input
 */
const strongPassword = input => {
  const specialCharacters = /[!@#$%^&*()-+]/;
  const digitsReg = /\d/;
  const lowerCase = /[a-z]/;
  const upperCase = /[A-Z]/;

  let characterCount = 0;
  if (!specialCharacters.test(input)) {
    characterCount += 1
  }
  if (!digitsReg.test(input)) {
    characterCount += 1;
  }
  if (!lowerCase.test(input)) {
    characterCount += 1;
  }
  if (!upperCase.test(input)) {
    characterCount += 1;
  }
  if (input.length < 6) {
    characterCount += 6 - input.length;
  }
  console.log(characterCount);
};


process.stdin.resume();
process.stdin.setEncoding('ascii');

let _input = "";
process.stdin.on('data', input => _input += input);
process.stdin.on('end', () => strongPassword(_input));