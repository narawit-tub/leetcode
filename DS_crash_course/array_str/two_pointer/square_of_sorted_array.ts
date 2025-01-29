function sortedSquares(nums: number[]): number[] {
    let i = 0
    let j = nums.length - 1
    const answer: number[] = []

    while(i <= j) {
       if (Math.pow(nums[i], 2) > Math.pow(nums[j], 2)) {
           answer.push(Math.pow(nums[i], 2))
           i++
       } else {
           answer.push(Math.pow(nums[j], 2))
           j--
       }
    }

    return answer.reverse()
}