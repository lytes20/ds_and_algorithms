function FizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    let print = "";
    if (i % 3 === 0) {
      print = "Fizz";
    }
    if (i % 5 === 0) {
      print = print + "Buzz";
    }

    if (i % 3 !== 0 && i % 5 !== 0) {
      print = i;
    }
    console.log(print);
  }
}

FizzBuzz(15);
