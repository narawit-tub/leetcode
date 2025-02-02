import {buildPrefixSum} from "../../utils/array";

function waysToSplitArray(nums: number[]): number {
    let ans: number = 0

    let prefixSum = buildPrefixSum(nums);

    // Find the answer
    for (let i = 0; i < nums.length - 1; i++) {
        const leftPart: number = prefixSum[i]
        const rightPart: number = prefixSum[prefixSum.length - 1] - prefixSum[i]

        if (leftPart >= rightPart) {
            ans++
        }
    }

    return ans
}

const tmp = waysToSplitArray([10, 4, -8, 7])