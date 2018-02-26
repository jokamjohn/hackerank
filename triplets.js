/**
 * Split the two lines with a newline delimiter
 * Then split the two arrays using spaces and try converting the elements
 * into integers.
 * Compare the elements to find the score.
 * @param input
 */
const triplets = input => {
  const lines = input.split('\n');
  const aliceRatings = lines[0].split(' ').map(num => parseInt(num));
  const bobRatings = lines[1].split(' ').map(num => parseInt(num));

  let aliceScore = 0;
  let bobScore = 0;
  for (let i = 0; i < aliceRatings.length; i++) {
    if (aliceRatings[i] > bobRatings[i]) {
      aliceScore += 1;
    }
    if (aliceRatings[i] < bobRatings[i]) {
      bobScore += 1
    }
  }
  console.log(`${aliceScore} ${bobScore}`);
};

process.stdin.resume();
process.stdin.setEncoding('ascii');

let _input = "";
process.stdin.on('data', input => _input += input);
process.stdin.on('end', () => triplets(_input));