export default function sortBy(array, key, descending = false) {
  const length = array.length;
  if (length === 1) {
    return array;
  } else if (length === 2) {
    const aValue = array[0][key];
    const bValue = array[1][key];
    if (bValue > aValue) {
      return array;
    }
    return [array[0], array[1]];
  }
  const result = array.toSorted((a, b) => {
    return a[key] - b[key];
  });

  return descending ? result.reverse() : result;
}
