function getFilledArray<T>(value: T, n: number): T[] {
  return Array(n).fill(value);
}
console.log(getFilledArray<string>("cheese", 3));