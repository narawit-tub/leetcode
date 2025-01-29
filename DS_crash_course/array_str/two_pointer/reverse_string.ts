function reverseString(s: string[]): void {
    let i: number = 0;
    let j: number = s.length - 1;

    while (i < j) {
        const tmp = s[i]
        s[i] = s[j]
        s[j] = tmp;

        i++
        j--
    }
}