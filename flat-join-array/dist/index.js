export default function flatJoinArray(separator, ...array) {
    const result = [];
    // join array each element
    array.forEach((element, index) => {
        result.push(element);
        if (index !== array.length - 1) {
            result.push(separator);
        }
    });
    return result.flat();
}
