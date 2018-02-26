/**Work in progress
 *
 * @param input
 */
const sherlock = input => {
  const lines = input.split('\n');
  let testCases = parseInt(lines[0]);
  if ((lines.length - 1) / 2 === testCases) {

  }
};

process.stdin.resume();
process.stdin.setEncoding('ascii');

let _input = "";
process.stdin.on('data', input => _input += input);
process.stdin.on('end', () => sherlock(_input));