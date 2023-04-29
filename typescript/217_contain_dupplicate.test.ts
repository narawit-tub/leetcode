import { test, expect } from "vitest";

test.each([
  { nums: [1, 2, 3, 1], expected: true },
  { nums: [1, 2, 3, 4], expected: false },
  { nums: [1, 1, 1, 3, 3, 4, 3, 2, 4, 2], expected: true },
])("Checking ${{nums}} --> ${{expected}}", ({ nums, expected }) => {
  expect(haveDupplicatedElement(nums)).toBe(expected);
});
function haveDupplicatedElement(nums: number[]): any {
  let numsSet = new Set<number>();
  for (let index = 0; index < nums.length; index++) {
    numsSet.add(nums[index]);
  }

  return numsSet.size != nums.length;
}
