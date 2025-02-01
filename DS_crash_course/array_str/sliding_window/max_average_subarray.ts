function findMaxAverage(nums: number[], k: number): number {
    if (k === 0) return 0

    let right:number = 0;
    let left:number = 0;
    let curAverage: number = 0;
    let maxAverageSoFar: number;

    // build 1st window
    while (right < k) {
        curAverage += nums[right] / k
        right++
    }
    maxAverageSoFar = curAverage

    while(right < nums.length) {
        // Explore right element
        curAverage += nums[right] / k
        right++;

        // Remove old element to keep size of window
        curAverage -= nums[left] / k
        left++;

        // Update answer
        maxAverageSoFar = Math.max(maxAverageSoFar, curAverage);
    }

    return maxAverageSoFar
};

const tmp = findMaxAverage([0,1,1,3,3], 4)