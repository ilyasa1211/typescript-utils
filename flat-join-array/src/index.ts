export default function flatJoinArray(
  separator: string,
  ...array: Array<any[]>
) {
  const result: Array<any> = [];

  // join array each element
  array.forEach((element: any[], index: number) => {
    result.push(element);
    if (index !== array.length - 1) {
      result.push(separator);
    }
  });

  return result.flat();
}
