var canPartition = function (nums) {
  // know target
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  // First check
  if (sum % 2 != 0) return false;
  let target = sum / 2;

  // Create truth table
  let subset_table = new Array(nums.length);
  for (let i = 0; i < subset_table.length; i++) {
    subset_table[i] = new Array(target);

    subset_table[i][0] = true;
    for (let j = 1; j <= target; j++) {
      if (i == 0) {
        if (j != nums[i]) subset_table[i][j] = false;
        else subset_table[i][j] = true;
      } else {
        if (j < nums[i]) {
          subset_table[i][j] = subset_table[i - 1][j];
        } else {
          subset_table[i][j] =
            subset_table[i - 1][j - nums[i]] || subset_table[i - 1][j];
        }
      }
    }
  }

  // Trackback answer
  let row_index = subset_table.length - 1;
  let column_index = target;
  let result_subset = [];
  while (row_index > 0 && column_index > 0) {
    if (subset_table[row_index - 1][column_index - nums[row_index]]) {
      result_subset.push(nums[row_index]);
      column_index = column_index - nums[row_index];
    }
    row_index = row_index - 1;
  }

  return result_subset.length > 0;
};

let nums = [23, 13, 11, 7, 6, 5, 5];
let answer = canPartition(nums);
answer;
