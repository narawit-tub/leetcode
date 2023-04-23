import { test, expect } from "vitest";

function twoSum(nums: number[], target: number): number[] {
  const difference_note = {};

  for (let index = 0; index < nums.length; index++) {
    const currentNumber = nums[index];
    if (difference_note[currentNumber] != null) {
      return [index, difference_note[currentNumber]];
    }

    const diff = target - currentNumber;
    difference_note[diff] = index;
  }

  return [];
}

function arrayEqualIgnoreOrder(
  arr1: Array<number>,
  arr2: Array<number>
): boolean {
  return (
    arr1.length === arr2.length &&
    arr1.every((item) => arr2.includes(item)) &&
    arr2.every((item) => arr1.includes(item))
  );
}

test.each([{ nums: [2, 7, 11, 15], target: 9, expected: [0, 1] }])(
  "Checking",
  ({ nums, target, expected }) => {
    const result = twoSum(nums, target);
    expect(arrayEqualIgnoreOrder(expected, result)).toBeTruthy();
  }
);
