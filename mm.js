/**
 * Finding the max and min sums in from elements in an array
 * @param numbers
 */
const min_max = numbers => {
  let min_sum = 0;
  let max_sum = 0;
  for (let num = 0; num < numbers.length - 1; num++) {
    min_sum += numbers[num];
    max_sum += numbers[num + 1]
  }
  console.log(`Min value: ${min_sum} Max value: ${max_sum}`)
};

min_max([1, 2, 3, 4, 5]);
