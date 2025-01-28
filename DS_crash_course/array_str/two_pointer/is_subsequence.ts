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