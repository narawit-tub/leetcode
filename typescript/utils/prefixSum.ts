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

export default NumArray;
