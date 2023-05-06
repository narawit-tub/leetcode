import { test, expect } from "vitest";

class NumArray {
  nums: number[];
  constructor(nums: number[]) {
    this.nums = nums;
  }

  sumRange(left: number, right: number): number {
    let sum = 0;
    for (let i = left; i <= right; i++) {
      sum += this.nums[i];
    }
    return sum;
  }
}
test.each([
  { nums: [-2, 0, 3, -5, 2, -1], sumRage: [0, 2], expected: 1 },
  { nums: [-2, 0, 3, -5, 2, -1], sumRage: [2, 5], expected: -1 },
  { nums: [-2, 0, 3, -5, 2, -1], sumRage: [0, 5], expected: -3 },
])("Expect $expected", ({ nums, sumRage, expected }) => {
  const numArray: NumArray = new NumArray(nums);
  const actualSum = numArray.sumRange(sumRage[0], sumRage[1]);
  expect(actualSum).toBe(expected);
});
