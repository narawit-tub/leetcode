function longestOnes(nums: number[], k: number): number {
    let left: number = 0
    let numberOfOnes = 0
    let numberOfZeros = 0
    let maxNumberOfOnesPlusZero = 0

    for (let right = 0; right < nums.length; right++) {
        // Explore the right element by
        // Adding into window
        if (nums[right] === 1) {
            numberOfOnes += 1
        } else {
            numberOfZeros += 1
        }

        // Ignore the window that has 0 in a row than k
        // By deleting the left element until the number of zero back
        // to equal k
        while (numberOfZeros > k) {
            if (nums[left] === 1) {
                numberOfOnes -= 1
            } else {
                numberOfZeros -= 1
            }
            left++
        }

        // Take snapshot of max elements in a window so far
        maxNumberOfOnesPlusZero = Math.max(maxNumberOfOnesPlusZero, numberOfOnes + numberOfZeros)
    }

    return maxNumberOfOnesPlusZero;
};

const tmp = longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2)