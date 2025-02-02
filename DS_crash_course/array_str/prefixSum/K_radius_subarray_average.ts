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

function getAverages(nums: number[], k: number): number[] {
    if (k < 1) return nums

    let ans: number[] = []

    const prefixSum: number[] = buildPrefixSum(nums)

    for (let i = 0; i < nums.length; i++) {
        if (i - k < 0 || i + k >= nums.length) {
            ans.push(-1)
            continue
        }

        const leftPart = (i - k - 1) >= 0 ? prefixSum[i] - prefixSum[i - k - 1] : prefixSum[i]
        const rightPart = prefixSum[i + k] - prefixSum[i]
        const average = (leftPart + rightPart) / (2 * k + 1)
        ans.push(Math.floor(average))
    }

    return ans;
}

const tmp = getAverages([7,4,3,9,1,8,5,2,6], 3)