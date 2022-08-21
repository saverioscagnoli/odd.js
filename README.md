# oddity.js

Oddity is a library of random data generation and utils functions like `sum` or `sort`.

## Installation

JavaScript:

```javascript
const { odd } = require("oddity.js");

console.log(odd.pick(["Hello!", 1, 10, "Test", "Ciao", 28, false, null]));
//=> "Ciao"
```

TypeScript:

```javascript
import { odd } from "oddity.js";

console.log(odd.sort([1, 3, 334, 5, 29, 7]));
//=> [1, 3, 5, 7, 29, 334]
```

list of function in this lib:

## Random data generation

- `rng` - random number generator
- `flip` - coin flip, with chance set default at 50%
- `falsy` - pick a random falsy value
- `letter` - get a random letter
- `string` - generate a random string
- `age` - generate a random person's age
- `date` - generate a random date
- `roll` - roll any and as many dice as you want!
- `animal` - get a random animal's name
- `name` - get a random first name
- `country` - get a random country
- `emoji` - get a random emoji
- `pokemon` - get a random pokemon's name
- `ip` - get a random ip address

## Validators

- `isString` - checks if the input value is a string
- `isNumber` - checks if the input value is a number
- `isPrime` - check if the input value is a prime number

## Math

- `fibonacci` - get as many values as you want of the Fibonacci chain
- `invSqrt` - Quake III algorythm of the inverse square root
- `factorial` - calculates the factorial of the input value

## Arrays

- `sum` - returns the sum of all the numbers in an array
- `sub` - returns the subctraction od all the numbers in an array starting from index 0
- `pick` - returns a random item in an array
- `shuffle` - shuffles a given array
- `sort` - sorts an array (numbers)
- `clone` - clones an array
- `binary` - binary search algorythm of a number in an array
- `push0toEnd` - pushes all the 0s in an array to the end of it

## Misc

- `deck` - generates a 52 or 54 (Jokers) deck of french playing cards
- `roulette` - generates an array of colored numbers, which represent a french roulette.


Thank you! 🌸