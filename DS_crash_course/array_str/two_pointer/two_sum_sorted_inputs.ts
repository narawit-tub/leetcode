function twoSum(numbers: number[], target: number): number[] {
    let left = 0
    let right = numbers.length - 1

    while (left < right) {
        if (numbers[left] + numbers[right] > target) {
            // Mean we find less for sum
            right--
        }

        if (numbers[left] + numbers[right] < target) {
            // Mean we find more for sum
            left++
        }

        if (numbers[left] + numbers[right] == target) {
            return [left+1, right+1]
        }
    }

    return []
}