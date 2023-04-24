import { test, expect } from "vitest";
import { arrayEqualIgnoreOrder } from "./utils/arrayEqualIgnoreOrder";

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

test.each([{ nums: [2, 7, 11, 15], target: 9, expected: [0, 1] }])(
  "Checking",
  ({ nums, target, expected }) => {
    const result = twoSum(nums, target);
    expect(arrayEqualIgnoreOrder(expected, result)).toBeTruthy();
  }
);
