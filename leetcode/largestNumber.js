function compareNumbers(num1, num2) {
  // Convert numbers to strings for easy digit access
  const str1 = num1.toString();
  const str2 = num2.toString();

  const first = str1 + str2;
  const second = str2 + str1;

  if (Number(first) > Number(second)) {
    return -1;
  } else {
    1;
  }
}
