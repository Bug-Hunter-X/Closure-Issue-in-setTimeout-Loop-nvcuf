# TypeScript Closure Gotcha in setTimeout Loop

This repository demonstrates a common error encountered when using closures within `setTimeout` loops in TypeScript (and JavaScript).  The issue arises from how JavaScript handles variable scoping and closures.  The `printNumbers2` function illustrates the problem.

## Problem

The `printNumbers2` function intends to print numbers 1 through `n` with a one-second delay between each number. However, due to the way closures work, the value of `i` is not captured at the time `setTimeout` is called. Instead, it captures the *reference* to `i`, so by the time the callbacks finally execute, the loop has already completed, and `i` holds its final value.