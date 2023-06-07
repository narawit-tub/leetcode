import { test, expect } from "vitest";
import NumArray from "./utils/prefixSum";

function solutionOne(nums: number[], k: number): number {
  let accumulatedSum = 0;
  let minimumSizeOfSubArray: number = Infinity;
  let prefixSum = {};
  const target = k;

  for (let i = 0; i < nums.length; i++) {
    // prepare normal data
    accumulatedSum += nums[i];

    // find subArray, accumulatedSum - k = an element inside hashmap, that's one
    // subArray we can use to subtract accumulateSum to get k
    const sumOfSubtractingSubArray = accumulatedSum - target;
    if (prefixSum[sumOfSubtractingSubArray] != null) {
      // checking the minumum
      minimumSizeOfSubArray =
        minimumSizeOfSubArray > i - prefixSum[sumOfSubtractingSubArray]
          ? i - prefixSum[sumOfSubtractingSubArray]
          : minimumSizeOfSubArray;
    }

    // store value for next round
    prefixSum[accumulatedSum] = i;
  }

  return minimumSizeOfSubArray === Infinity ? 0 : minimumSizeOfSubArray;
}

function minimumSizeOfSubArrayEqualToK(nums: number[], k: number): number {
  return solutionOne(nums, k);
}

test.each([
  // { nums: [2, 3, 1, 2, 4, 3], k: 7, expected: 2 },
  // { nums: [1, 4, 4], k: 4, expected: 1 },
  // { nums: [1, 1, 1, 1, 1, 1, 1, 1], k: 11, expected: 0 },
  { nums: [1, 2, 3, 4, 5], k: 11, expected: 3 },
])("Expect $expected", ({ nums, k, expected }) => {
  expect(minimumSizeOfSubArrayEqualToK(nums, k)).toBe(expected);
});
