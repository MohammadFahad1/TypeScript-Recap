// Basic function with types
function add(a: number, b: number): number {
  return a + b;
}

// Optional and Default Parameters
function greet(name?: string, greeting: string = "Hello"): string {
  return `${greeting}, ${name}!`;
}

// Function with Rest Parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

// Arrow Function with Types
const multiply = (a: number, b: number): number => a * b;

// Function Overloading
function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: any, b: any): any {
  if (typeof a === "string" && typeof b === "string") {
    return a + b;
  } else if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
}

// Function types
// let calculate: (x: number, y: number) => number;
let calculate: typeof add;
calculate = add;
