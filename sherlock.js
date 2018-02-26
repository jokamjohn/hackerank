/**
 * Sherlock Array solution.
 * Input should be the same as shown in the question.
 * @param input
 */
const sherlock = input => {
  const lines = input.split('\n');
  let testCases = parseInt(lines[0]);
  if ((lines.length - 1) / 2 === testCases) {
    for (let i = 1; i < lines.length - 1; i++) {
      const numOfElements = parseInt(lines[i]);
      const testCase = lines[i + 1].split(' ').map(num => parseInt(num));
      if (numOfElements === testCase.length) {
        const add = (a, b) => a + b;
        for (let y = 1; y < numOfElements - 1; y++) {
          if (testCase.slice(0, y).reduce(add) === testCase.slice(y + 1).reduce(add)) console.log("YES");
          else console.log('NO')
        }
      }
      i += 1;
    }
  }
};

process.stdin.resume();
process.stdin.setEncoding('ascii');

let _input = "";
process.stdin.on('data', input => _input += input);
process.stdin.on('end', () => sherlock(_input));