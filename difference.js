/***
 *Find the diagonal difference.
 * @param input
 */
const difference = input => {
  const lines = input.split('\n');
  let matrix = [];
  for (let i = 0; i < lines.length; i++) {
    matrix.push(lines[i].split(' ').map(num => parseInt(num)));
  }
  let majorDiagonalSum = 0;
  let minorDiagonalSum = 0;
  for (let i = 0; i < matrix.length; i++) {
    majorDiagonalSum += matrix[i][i];
    minorDiagonalSum += matrix[i][matrix.length - (i + 1)]
  }
  console.log(Math.abs(majorDiagonalSum - minorDiagonalSum));
};


process.stdin.resume();
process.stdin.setEncoding('ascii');

let _input = "";
process.stdin.on('data', input => _input += input);
process.stdin.on('end', () => difference(_input));