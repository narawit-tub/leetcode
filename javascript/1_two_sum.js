/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// *** reproduce steps
// 1. checking currentNumber is equal to any element in hashmap
// 2. find diff
// 3. store diff

var twoSum = function(nums, target) {
    const difference_note = {}

    for (let index=0; index < nums.length; index++) {
        const currentNumber = nums[index];
        if (difference_note[currentNumber] != null) {
            return [index, difference_note[currentNumber]]
        }

        const diff = target - currentNumber;
        difference_note[diff] = index;
    }
};