import { test, expect } from "vitest";

function solutionOne(nums: number[], target: number): number {
  if (target <= 1) {
    return 0;
  }
  let accumulatedProd = 1;
  let rightIndex = 0;
  let leftIndex = 0;
  let subArrayCount = 0;

  while (rightIndex < nums.length) {
    accumulatedProd *= nums[rightIndex];

    while (accumulatedProd >= target) {
      accumulatedProd /= nums[leftIndex];
      leftIndex++;
    }

    subArrayCount += rightIndex - leftIndex + 1;
    rightIndex++;
  }

  return subArrayCount;
}

function subarrayProductLessThenK(nums: number[], k: number): number {
  return solutionOne(nums, k);
}

test.each([
  { nums: [10, 5, 2, 6], k: 100, expected: 8 },
  { nums: [1, 1, 1], k: 1, expected: 0 },
  { nums: [1, 2, 3], k: 0, expected: 0 },
  //   { nums: [1, 2, 3, 4, 5], k: 11, expected: 3 },
])("Expect $expected", ({ nums, k, expected }) => {
  expect(subarrayProductLessThenK(nums, k)).toBe(expected);
});
