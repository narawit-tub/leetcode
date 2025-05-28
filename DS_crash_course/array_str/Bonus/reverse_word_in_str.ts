function replaceAt(str: string, index: number, replacementStr: string) {
    return str.substring(0, index) + replacementStr + str.substring(index + replacementStr.length)
}
function reverseWords(s: string): string {
    if (s === "") return ""

    let ans: string = ""

    let left: number = 0
    let right: number = 0
    let charCount: number = 0
    for (let curIndex = 0; curIndex <= s.length; curIndex++) {
        if (s.charAt(curIndex) === " ") {
            right = curIndex - 1
            left = curIndex - charCount
        }

        if (curIndex === s.length) {
            right = curIndex
        }

        while (left < right) {
            const tmp = s.charAt(right)
            s = replaceAt(s, right, s.charAt(left))
            s = replaceAt(s, left, tmp)

            left++
            right--
        }

        if (s.charAt(curIndex) === " " && curIndex !== s.length) {
            s = s.concat(" ")
            left++
        }
    }

    return ans
}

const tmp = reverseWords("Let's take LeetCode contest")


