import { test, expect } from "vitest";

class NumArray {
  nums: number[];
  prefixSum: number[];

  constructor(nums: number[]) {
    // Create prefixSum arrays
    this.prefixSum = new Array<number>(nums.length + 1).fill(0);
    for (let i = 1; i < this.prefixSum.length; i++) {
      this.prefixSum[i] = this.prefixSum[i - 1] + nums[i - 1];
    }
  }

  sumRange(left: number, right: number): number {
    const sum = this.prefixSum[right + 1] - this.prefixSum[left];
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
