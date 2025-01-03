function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5);

function printNumbers2(n: number): void {
  for (let i = 1; i <= n; i++) {
    // Capture the value of 'i' using an immediately invoked function expression (IIFE)
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}

printNumbers2(5); // This will print 1,2,3,4,5 with delays.

function printNumbers3(n: number): void {
  for (let i = 1; i <= n; i++) {
    //Using a separate variable in the loop to capture the current value of i
    const j = i;
    setTimeout(() => {
      console.log(j);
    }, 1000);
  }
}

printNumbers3(5); // This will also print 1,2,3,4,5 with delays.