import { test, expect } from "vitest";

function solutionOne(nums: number[]): number {
  let accumulatedMax = 1;
  let accumulatedMin = 1;
  let max = Math.max(...nums);

  for (const num of nums) {
    if (num === 0) {
      // like we skip 0, and change starting point to next number in list
      accumulatedMax = 1;
      accumulatedMin = 1;
    }
    const tempMax = num * accumulatedMax;
    const tempMin = num * accumulatedMin;
    accumulatedMax = Math.max(num, tempMax, tempMin);
    // we store 'accumulatedMin' because there could be a chance this
    // minimun number could be maximum number when it's negative value and find
    // next negative value
    accumulatedMin = Math.min(num, tempMax, tempMin);

    max = Math.max(accumulatedMax, max);
  }

  return max;
}

function subarrayThatHasMostProduct(nums: number[]): number {
  return solutionOne(nums);
}

test.each([
  { nums: [2, 3, -2, 4], expected: 6 },
  { nums: [-2, 0, -1], expected: 0 },
  { nums: [-1, -2, -3, 0], expected: 6 },
  { nums: [-2, 3, -4], expected: 24 },
  { nums: [-2, 3, -4, 5, -6, 7], expected: 2520 },
  { nums: [1, 0, -1, 2, 3, -5, -2], expected: 60 },
])("Expect $expected", ({ nums, expected }) => {
  expect(subarrayThatHasMostProduct(nums)).toBe(expected);
});
