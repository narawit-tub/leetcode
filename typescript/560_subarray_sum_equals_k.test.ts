import { test, expect } from "vitest";

function subArraySumEqualK(nums: number[], k: number): number {
  let currentWindowSize = 1;
  let numberOfSubarrayCount = 0;
  while (currentWindowSize <= nums.length) {
    for (let i = 0; i < nums.length; i++) {
      const subArray = new Array(currentWindowSize);
      let localSum = nums[i];
      subArray.push(nums[i]);
      for (let j = i + 1; j < i + currentWindowSize; j++) {
        localSum += nums[j];
        subArray.push(nums[j]);
      }
      if (localSum === k) {
        numberOfSubarrayCount += 1;
      }
    }
    currentWindowSize++;
  }
  return numberOfSubarrayCount;
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
