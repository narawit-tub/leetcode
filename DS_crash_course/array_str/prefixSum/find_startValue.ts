function buildPrefixSum(nums: number[]) {
    // build prefix sum
    let prefixSum: number[] = []
    prefixSum[0] = nums[0]
    for (let i = 1; i < nums.length; i++) {
        const prevSum = prefixSum[prefixSum.length - 1]
        prefixSum.push(prevSum + nums[i])
    }
    return prefixSum;
}

function minStartValue(nums: number[]): number {
    const prefixSum = buildPrefixSum(nums)

    // if found the less value, it's mean that's the 'startvalue' we need
    // to make sum of any element positive
    let startValue: number = 1
    for (let i =0; i<prefixSum.length; i++) {
        if (prefixSum[i] < 0) {
            startValue = Math.max(startValue, 1 + Math.abs(prefixSum[i]))
        }
    }

    return startValue
};

const tmp = minStartValue([1, -2, -3])