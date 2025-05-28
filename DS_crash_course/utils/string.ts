export function replaceAt(str: string, index: number, replacementStr: string) {
    return str.substring(0, index) + replacementStr + str.substring(index + replacementStr.length)
}