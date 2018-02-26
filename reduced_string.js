/**
 * Reduced String solution.
 * Created an empty string at the start and then looped through the input.
 * if the final string length is greater than zero and the last character
 * in the final string is the same as the one being added, remove the
 * last character from the string.
 * @param input
 * @returns {string}
 */
const reduceString = input => {
  let finalString = "";
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if (finalString.length > 0 && finalString[finalString.length - 1] === char) {
      finalString = finalString.slice(0, finalString.length - 1)
    } else {
      finalString += char;
    }
  }
  return finalString.length === 0 ? "Empty String" : finalString;
};

console.log('Answer: ', reduceString('aaabccddd'));
