// ref: https://leetcode.com/problems/is-subsequence/description/

function isSubsequence(s: string, t: string): boolean {
    if (s === "") return true

    let indexOne: number = 0
    let indexTwo: number = 0;
    while(indexTwo < t.length) {
        if (s[indexOne] === t[indexTwo]) {
            if (indexOne === s.length - 1) {
                return true
            }

            indexOne++;
            indexTwo++;
        } else {
            indexTwo++;
        }
    }

    return false;
};

/*
*  Algo summary
*  assumption: We need just to know 's' is subsequence of 't' or not. So if All 'element' in 's' exist in 't' in order is fine
*  How to check assumption:
*  Is not subsequence when:
*  - loop through
* */