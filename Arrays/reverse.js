const reverseArray = (arr) => {
  const newArr = [];
  for (i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
    newArr.push(arr[i]);
  }

// for()
  return arr;
};

const myArr = [1, 2, 3, 4, 5];
console.log(reverseArray(myArr));
