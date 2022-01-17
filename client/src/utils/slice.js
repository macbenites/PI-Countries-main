export const sliceMethod = (first, last, array) => {
  let arr = [];
  for (let i = first; i < last; i++) {
    arr.push(array[i]);
  }
  return arr;
};
