import { test, expect } from "vitest";

function maxProfit(prices: number[]): number {
  let low: number = prices[0];
  let maxProfit: number = 0;

  for (let i = 1; i < prices.length; i++) {
    if (low > prices[i]) {
      low = prices[i];
    } else {
      let currentProfit = prices[i] - low;
      maxProfit = maxProfit < currentProfit ? currentProfit : maxProfit;
    }
  }

  return maxProfit;
}

test.each([
  { prices: [7, 1, 5, 3, 6, 4], expected: 5 },
  { prices: [7, 6, 4, 3, 1], expected: 0 },
])("Checking ${{prices}} --> ${{expected}}", ({ prices, expected }) => {
  expect(maxProfit(prices)).toBe(expected);
});
