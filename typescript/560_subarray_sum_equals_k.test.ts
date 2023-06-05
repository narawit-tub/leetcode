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

function subArraySumEqualK(nums: number[], k: number): number {
  return solutionOne(nums, k);
}

test.each([
  { nums: [1, 1, 1], k: 2, expected: 2 },
  { nums: [1, 2, 3], k: 3, expected: 2 },
  { nums: [1, 2, 3, 4], k: 3, expected: 2 },
  { nums: [3, 4, 7, 2, -3, 1, 4, 2], k: 7, expected: 4 },
  { nums: [0, 0, 0, 0, 0, 0, 0, 0], k: 0, expected: 36 },
  { nums: [-1, -1, 1], k: 0, expected: 1 },
])("Expect $expected", ({ nums, k, expected }) => {
  expect(subArraySumEqualK(nums, k)).toBe(expected);
});
