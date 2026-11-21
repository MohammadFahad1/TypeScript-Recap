// Primitive Types
let username: string = "Md. Fahad Monshi";
let age: number = 27;
let isStudent: boolean = true;

// Array Types
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Alice", "Bob", "Charlie"];

// Tuple Types
let person: [string, number] = ["John Doe", 30];

// Enum Types
enum Color {
  Red,
  Green,
  Blue,
}

let favoriteColor: Color = Color.Green;

// Any Type (Avoid using 'any' when possible)
let randomValue: any = 10;
randomValue = "Hello";
randomValue = true;

// Unknown Type (Safer alternative to 'any')
let userInput: unknown = 10;
userInput = "Hello";
userInput = true;

// Void Type (Typically used for functions that do not return a value)
function processInput(input: unknown): void {
  if (typeof input === "string") {
    console.log("String input:", input);
  } else if (typeof input === "number") {
    console.log("Number input:", input);
  } else {
    console.log("Unknown input type");
  }
}

processInput("Hello");
processInput(42);
processInput(true);

// Null and Undefined Types
let nullValue: null = null;
let undefinedValue: undefined = undefined;
