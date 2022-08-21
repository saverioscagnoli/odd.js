import { animals, countries, emojis, names, pokemons } from "./data";
let falsy = [false, null, undefined, NaN, 0, ""];
let letters = "abcdefghijklmnopqrstuvwxyz";
let UpperLetters = letters.toUpperCase();
let allchars =
  letters + UpperLetters + "1234567890!@#$%^&*()-_=+[]{}'\";:|\\,.<>`~/?";
let bytes = new ArrayBuffer(Float32Array.BYTES_PER_ELEMENT);
let floatV = new Float32Array(bytes);
let intV = new Uint32Array(bytes);
let suits = ["♤", "♡", "♧", "♢"];
let ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
export const odd = {
  /**
   * @param min The minimum value.
   * @param max The maximum value.
   * @returns A random value between min and max.
   */
  rng: (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  /**
   * @param chance The likelyhood of the function to return true.
   * @default 50%
   * @returns a Boolean.
   */
  flip: (chance: number = 50): boolean => {
    return chance > odd.rng(0, 100);
  },
  /**
   * @returns A random falsy value.
   */
  falsy: (): any => {
    return odd.pick(falsy);
  },
  /**
   * @param uppercase If the letter should be uppercase.
   * @returns A random letter
   */
  letter: (uppercase: boolean = false): string => {
    let picked: string = odd.pick(letters.split(""));
    return uppercase ? picked.toUpperCase() : picked;
  },
  /**
   * @param length The desired length of the string.
   * @returns A random string.
   */
  string: (length: number) => {
    let arr = allchars.split("");
    let string: string[] = [];
    for (let i = 0; i < length; i++) {
      string.push(odd.pick(arr));
    }
    return string.join("");
  },
  /**
   * @param type The type of person we're getting the random age of.
   * Leave blank for all ages.
   * @returns A random age of the type of person.
   */
  age: (type?: "child" | "teen" | "adult" | "elder"): number => {
    switch (type) {
      case "child":
        return odd.rng(1, 10);
      case "teen":
        return odd.rng(11, 18);
      case "adult":
        return odd.rng(18, 60);
      case "elder":
        return odd.rng(60, 90);
      default:
        return odd.rng(1, 100);
    }
  },
  /**
   * @param american If the date shoudl be in the american format (MM/DD/YYYY).
   * @returns A random date.
   */
  date: (american: boolean = false): string => {
    let year = odd.rng(1900, 2022);
    let month = odd.rng(1, 12);
    let day = odd.rng(1, month == 2 ? 28 : 30);
    return american ? `${month}/${day}/${year}` : `${day}/${month}/${year}`;
  },
  /**
   * @param amount How many dice you want yo roll.
   * @param sides How many sides for each die.
   * @returns An array that contains all the rolls.
   */
  roll: (amount: number, sides: number): number[] => {
    let rolls: number[] = [];
    for (let i = 0; i < amount; i++) {
      rolls.push(odd.rng(1, sides));
    }
    return rolls;
  },
  /**
   * @returns A random animal's name.
   */
  animal: (): string => {
    return odd.pick(animals);
  },
  /**
   * @returns A random first name.
   */
  name: () => {
    return odd.pick(names);
  },
  /**
   * @returns A random country.
   */
  country: () => {
    return odd.pick(countries);
  },
  /**
   * @param amount How many emojis you want to get.
   * @returns A random emoji.
   */
  emoji: (amount: number = 1): string => {
    let emoji = "";
    for (let i = 0; i < amount; i++) {
      emoji += odd.pick(emojis);
    }
    return emoji;
  },
  /**
   * @returns A random english Pokemon name.
   */
  pokemon: (): string => {
    return odd.pick(pokemons);
  },
  /**
   *
   * @returns A random IP address.
   */
  ip: () => {
    return `${odd.rng(1, 255)}.${odd.rng(1, 255)}.${odd.rng(1, 255)}.${odd.rng(
      1,
      255
    )}`;
  },
  /**
   * @param str Any item.
   * @returns A boolean, which represents if the given item is a string.
   */
  isString: (str: any): boolean => {
    return typeof str == "string";
  },
  /**
   * @param num Any item.
   * @returns A Boolean, which represents if the given item is a number.
   */
  isNumber: (num: any): boolean => {
    return typeof num == "number";
  },
  /**
   *
   * @param num Any number.
   * @returns A Boolean, which represents if the number is prime.
   */
  isPrime: (num: number): boolean => {
    if (num < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  },
  /**
   * @param min The minimum interval value.
   * @param max The maximum interval value.
   * @returns An array of prime numbers between the min and max parameters.
   */
  prime: (min: number, max: number): number[] => {
    let primes: number[] = [];
    for (let i = min; i <= max; i++) {
      let flag = i > 1;
      for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j == 0) {
          flag = false;
          break;
        }
      }
      if (flag) primes.push(i);
    }
    return primes;
  },
  /**
   * @param num Any number.
   * @returns The first num values of the Fibonacci chain.
   */
  fibonacci: (num: number): number[] => {
    const fib = [0, 1];
    for (let i = 2; i <= num; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
  },
  /**
   * Quake III inverse square root algorythm.
   * @param num A value
   * @returns The inverse square root of the num parameter.
   */
  invSqrt: (num: number): number => {
    let x2 = num * 0.5;
    floatV[0] = num;
    intV[0] = 0x5f3759df - (intV[0] >> 1);
    let f = floatV[0];
    f = f * (1.5 - x2 * f * f);
    return f;
  },
  /**
   * @param num Any number.
   * @returns The factorial of the given number.
   */
  factorial: (num: number): number => {
    let result = 1;
    for (let i = 2; i <= num; i++) {
      result = result * i;
    }
    return result;
  },
  /**
   * @param array A number array.
   * @returns The sum of all the numbers in the array.
   */
  sum: (array: number[]): number => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum;
  },
  /**
   * @param array A number array.
   * @returns A value which is the subtraction of all the number in the array.
   */
  sub: (array: number[]): number => {
    let sub = array[0];
    for (let i = 1; i < array.length; i++) {
      sub -= array[i];
    }
    return sub;
  },
  /**
   * @param array Any array.
   * @returns A random element from the given array.
   */
  pick: (array: any[]): any => {
    return array[odd.rng(0, array.length)];
  },
  /**
   * @param array Any array.
   * @returns The given array, but shuffled.
   */
  shuffle: (array: any[]): any[] => {
    let cIndex = array.length,
      rndIndex: number;
    while (cIndex != 0) {
      rndIndex = Math.floor(Math.random() * cIndex);
      cIndex--;
      [array[cIndex], array[rndIndex]] = [array[rndIndex], array[cIndex]];
    }
    return array;
  },
  /**
   * Quick sort algorythm.
   * @param array A number array
   * @returns The same array, but sorted.
   */
  sort: (array: number[]): number[] => {
    if (array.length < 2) return array;
    let pivot = array[array.length - 1];
    let beg = [];
    let end = [];
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] < pivot) {
        beg.push(array[i]);
      } else {
        end.push(array[i]);
      }
    }
    return [...odd.sort(beg), pivot, ...odd.sort(end)];
  },
  /**
   * @param array Any array.
   * @returns A copy of the given array.
   */
  clone: (array: any[]): any[] => {
    return [...array];
  },
  /**
   * A binary search algorythm to find a number in an array of numbers.
   * @param array A number array.
   * @param num the number you want to find in the given array.
   * @param fn Do not edit.
   * @returns the index of the number, or else -1 if it did not find it.
   */
  binary: (
    array: number[],
    num: number,
    fn = (a: number, b: number) => a - b
  ): number => {
    let beg = 0;
    let end = array.length - 1;
    while (beg <= end) {
      let k = (end + beg) >> 1;
      let cmp = fn(num, array[k]);
      if (cmp > 0) {
        beg = k + 1;
      } else if (cmp < 0) {
        end = k - 1;
      } else {
        return k;
      }
    }
    return -1;
  },
  /**
   * @param array Any array.
   * @returns The given array, but with all the 0s at the end of it.
   */
  push0toEnd: (array: any[]): any[] => {
    let count = 0;
    for (let i = 0; i < array.length; i++)
      if (array[i] != 0) array[count++] = array[i];

    while (count < array.length) array[count++] = 0;
    return array;
  },
  /**
   * @param shuffled If the deck should be shuffled.
   * @param jokers If the deck should contain jokers.
   * @returns A deck of 52/54 french cards.
   */
  deck: (shuffled = false, jokers = false) => {
    let deck: string[] = [];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 13; j++) {
        deck.push(ranks[j] + suits[i]);
      }
    }
    if (jokers) {
      deck.push("Joker");
      deck.push("Joker");
    }
    return shuffled ? odd.shuffle(deck) : deck;
  },
  /**
   * @returns An array that represents a french roulette.
   */
  roulette: (): string[] => {
    let roulette: string[] = ["🟢 0"];
    for (let i = 1; i <= 36; i++) {
      if (i <= 10 || (i > 18 && i <= 28))
        roulette.push(i % 2 == 0 ? `⚫ ${i}` : `🔴 ${i}`);
      else if (i <= 18 || (i > 28 && i <= 36))
        roulette.push(i % 2 == 0 ? `🔴 ${i}` : `⚫ ${i}`);
    }
    return roulette;
  },
};
