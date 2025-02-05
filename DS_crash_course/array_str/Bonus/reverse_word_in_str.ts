function reverseWords(s: string): string {
    if (s === "") return ""

    // set this up to follow existing algorithm
    s = s.concat(" ")

    let ans: string = ""
    let left: number = 0

    let numberOfCharInCurrentWindow: number = 0
    for (let right = 0; right < s.length; right++) {
        if (s.charAt(right) === " ") {
            // Prepare Index for swapping
            left = right
        } else {
            numberOfCharInCurrentWindow++
        }

        // have text in buffer & current index is in ""
        while (numberOfCharInCurrentWindow > 0 && s.charAt(right) === " ") {
            numberOfCharInCurrentWindow--

            ans = ans.concat(s.charAt(left - 1))

            left--

            if (numberOfCharInCurrentWindow === 0 && right !== s.length - 1) {
                ans = ans.concat(" ")
            }
        }
    }

    return ans
};