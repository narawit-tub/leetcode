export function arrayEqualIgnoreOrder(
  arr1: Array<number>,
  arr2: Array<number>): boolean {
  return (
    arr1.length === arr2.length &&
    arr1.every((item) => arr2.includes(item)) &&
    arr2.every((item) => arr1.includes(item))
  );
}
