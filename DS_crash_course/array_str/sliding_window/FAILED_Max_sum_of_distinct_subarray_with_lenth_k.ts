function maximumSubarraySum(nums: number[], k: number): number {

    let howManyTimesThisNumberFoundInWindow: Record<number, number> = {}

    // build 1st window
    let sum = 0
    let maxSum: number = 0
    let right: number = k - 1
    let left: number = right - k + 1
    let isFirstWindowValid = true
    for (let i = 0; i <= right; i++) {
        sum += nums[i]

        if (howManyTimesThisNumberFoundInWindow[nums[i]] > 0) {
            isFirstWindowValid = false
        }

        howManyTimesThisNumberFoundInWindow[nums[i]] = (howManyTimesThisNumberFoundInWindow[nums[i]] || 0) + 1
    }
    if (isFirstWindowValid) {
        maxSum = Math.max(maxSum, sum)
    }

    while (right < nums.length - 1) {
        // Remove left element
        if (howManyTimesThisNumberFoundInWindow[nums[left]] > 0) {

            howManyTimesThisNumberFoundInWindow[nums[left]] = (howManyTimesThisNumberFoundInWindow[nums[left]] || 0) - 1
        }
        sum = sum - nums[left]
        left++

        // Go right
        right++
        sum = sum + nums[right]
        if ((howManyTimesThisNumberFoundInWindow[nums[right]] == undefined || howManyTimesThisNumberFoundInWindow[nums[right]] < 1)
            && Object.keys.length === k) {
            maxSum = Math.max(maxSum, sum)
        }
        howManyTimesThisNumberFoundInWindow[nums[right]] = (howManyTimesThisNumberFoundInWindow[nums[right]] || 0) + 1

    }

    return maxSum;
};

const tmp = maximumSubarraySum([9,9,9, 1,2,3], 3)