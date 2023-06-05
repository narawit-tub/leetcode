import { test, expect } from "vitest";
import NumArray from "./utils/prefixSum";

function solutionOne(nums: number[], k: number): number {
  let currentWindowSize = 1;
  let numberOfSubarrayCount = 0;

  const numArray = new NumArray(nums);

  while (currentWindowSize < numArray.prefixSum.length) {
    for (let i = currentWindowSize; i < numArray.prefixSum.length; i++) {
      if (
        numArray.prefixSum[i] - numArray.prefixSum[i - currentWindowSize] ===
        k
      ) {
        numberOfSubarrayCount++;
      }
    }
    currentWindowSize++;
  }
  return numberOfSubarrayCount;
}

// if the result of accumulatedSum - k found in sumOfSubArraySoFarFromStart, it's mean we are able to use that subArray to subtract the accumulatedSum
// and got new subArray which is equal to 'k'
// accumulatedSum - k = sumOfSubArraySoFarFromStart[i] so...
// accumulatedSum - sumOfSubArraySoFarFromStart[i] = k <----- HERE IT IS !!! -->
function solutionTwo(nums: number[], k: number): number {
  let accumulatedSum = 0;
  let count = 0;
  let sumOfSubArraySoFarFromStart = {
    0: 1,
  };

  for (let index = 0; index < nums.length; index++) {
    accumulatedSum += nums[index];
    if (sumOfSubArraySoFarFromStart[accumulatedSum - k]) {
      count = count + sumOfSubArraySoFarFromStart[accumulatedSum - k];
    }

    if (sumOfSubArraySoFarFromStart[accumulatedSum]) {
      sumOfSubArraySoFarFromStart[accumulatedSum]++;
    } else sumOfSubArraySoFarFromStart[accumulatedSum] = 1;
  }
  return count;
}

function subArraySumEqualK(nums: number[], k: number): number {
  return solutionTwo(nums, k);
}

test.each([
  { nums: [1, 1, 1], k: 2, expected: 2 },
  { nums: [1, 2, 3], k: 3, expected: 2 },
  { nums: [1, 2, 3, 4], k: 3, expected: 2 },
  { nums: [3, 4, 7, 2, -3, 1, 4, 2], k: 7, expected: 4 },
  { nums: [0, 0, 0, 0, 0, 0, 0, 0], k: 0, expected: 36 },
  { nums: [2, 3, 3, -1, 0, 7, -2, 5], k: 5, expected: 6 },
  { nums: [-1, -1, 1], k: 0, expected: 1 },
])("Expect $expected", ({ nums, k, expected }) => {
  expect(subArraySumEqualK(nums, k)).toBe(expected);
});
