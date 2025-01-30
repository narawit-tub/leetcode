function numSubarrayProductLessThanK(nums: number[], k: number): number {
    if (k <= 0) return 0

    let i: number = 0
    let j: number = 0
    let currentProd = 1
    let subArrayCount = 0

    while (i < nums.length) {
        currentProd = nums[i] * currentProd

        // If window is invalid, then keep remove element from left
        while (currentProd >= k) {
            currentProd /= nums[j]
            j++;
        }


        subArrayCount = subArrayCount + i - j + 1 // Formula for calculating subArrays's total of any given array

        // Keep explore
        i++
    }

    return subArrayCount
}