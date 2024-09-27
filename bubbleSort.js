const arr = [56, 10, 20, 11, 4, 100];
for (let i = arr.length - 1; i >= 0; i--) {
  //   console.log(arr[i]);
  //   console.log("Iteration", i + 1);
  //   for (let j = i + 1; j < arr.length - 1; j++) {
  //     num = arr[i];
  //     console.log(num, arr[j]);
  //   }
  //   console.log("---------");
  for (let j = i - 1; j >= 0; j--) {
    console.log(arr[i], arr[j]);
    const temp = arr[i];
    if (arr[i] > arr[j]) {
    } else {
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  console.log("---------\n");
}
console.log("arr", arr);
