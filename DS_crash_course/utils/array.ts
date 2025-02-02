export function buildPrefixSum(nums: number[]) {
    // build prefix sum
    let prefixSum: number[] = []
    prefixSum[0] = nums[0]
    for (let i = 1; i < nums.length; i++) {
        const prevSum = prefixSum[prefixSum.length - 1]
        prefixSum.push(prevSum + nums[i])
    }
    return prefixSum;
}

// [-3,2,-3,4,2]
// [-3, -1, -4, 0, 2]
// startValue + (-4) >= 1 + 4