function numSubarrayProductLessThanK(nums: number[], k: number): number {
    if (k <= 1) return 0

    let right:number = 0
    let left:number = 0
    let validSubArrayCount: number = 0
    let currentProduct = 1;
    //
    while (right < nums.length) {
        // Let's try to add element into window,
        // try to follow constraint, a window should less than K
        currentProduct *= nums[right]

        // When window is invalid from adding more right element
        // mean current window won't be able to reach constraint by adding more right element anymore
        // so only thing we can do is removing left element of window
        while(currentProduct >= k) {
            currentProduct = currentProduct / nums[left]
            left++
        }

        // if this window still valid,
        // then note down the answer
        validSubArrayCount += right - left + 1 // From Math trick
        right++
    }

    return validSubArrayCount
}

// Math trick, number of valid subarray in a window is right - left + 1