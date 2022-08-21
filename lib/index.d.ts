export declare const odd: {
    /**
     * @param min The minimum value.
     * @param max The maximum value.
     * @returns A random value between min and max.
     */
    rng: (min: number, max: number) => number;
    /**
     * @param chance The likelyhood of the function to return true.
     * @default 50%
     * @returns a Boolean.
     */
    flip: (chance?: number) => boolean;
    /**
     * @returns A random falsy value.
     */
    falsy: () => any;
    /**
     * @param uppercase If the letter should be uppercase.
     * @returns A random letter
     */
    letter: (uppercase?: boolean) => string;
    /**
     * @param length The desired length of the string.
     * @returns A random string.
     */
    string: (length: number) => string;
    /**
     * @param type The type of person we're getting the random age of.
     * Leave blank for all ages.
     * @returns A random age of the type of person.
     */
    age: (type?: "child" | "teen" | "adult" | "elder") => number;
    /**
     * @param american If the date shoudl be in the american format (MM/DD/YYYY).
     * @returns A random date.
     */
    date: (american?: boolean) => string;
    /**
     * @param amount How many dice you want yo roll.
     * @param sides How many sides for each die.
     * @returns An array that contains all the rolls.
     */
    roll: (amount: number, sides: number) => number[];
    /**
     * @returns A random animal's name.
     */
    animal: () => string;
    /**
     * @returns A random first name.
     */
    name: () => any;
    /**
     * @returns A random country.
     */
    country: () => any;
    /**
     * @param amount How many emojis you want to get.
     * @returns A random emoji.
     */
    emoji: (amount?: number) => string;
    /**
     * @returns A random english Pokemon name.
     */
    pokemon: () => string;
    /**
     *
     * @returns A random IP address.
     */
    ip: () => string;
    /**
     * @param str Any item.
     * @returns A boolean, which represents if the given item is a string.
     */
    isString: (str: any) => boolean;
    /**
     * @param num Any item.
     * @returns A Boolean, which represents if the given item is a number.
     */
    isNumber: (num: any) => boolean;
    /**
     *
     * @param num Any number.
     * @returns A Boolean, which represents if the number is prime.
     */
    isPrime: (num: number) => boolean;
    /**
     * @param min The minimum interval value.
     * @param max The maximum interval value.
     * @returns An array of prime numbers between the min and max parameters.
     */
    prime: (min: number, max: number) => number[];
    /**
     * @param num Any number.
     * @returns The first num values of the Fibonacci chain.
     */
    fibonacci: (num: number) => number[];
    /**
     * Quake III inverse square root algorythm.
     * @param num A value
     * @returns The inverse square root of the num parameter.
     */
    invSqrt: (num: number) => number;
    /**
     * @param num Any number.
     * @returns The factorial of the given number.
     */
    factorial: (num: number) => number;
    /**
     * @param array A number array.
     * @returns The sum of all the numbers in the array.
     */
    sum: (array: number[]) => number;
    /**
     * @param array A number array.
     * @returns A value which is the subtraction of all the number in the array.
     */
    sub: (array: number[]) => number;
    /**
     * @param array Any array.
     * @returns A random element from the given array.
     */
    pick: (array: any[]) => any;
    /**
     * @param array Any array.
     * @returns The given array, but shuffled.
     */
    shuffle: (array: any[]) => any[];
    /**
     * Quick sort algorythm.
     * @param array A number array
     * @returns The same array, but sorted.
     */
    sort: (array: number[]) => number[];
    /**
     * @param array Any array.
     * @returns A copy of the given array.
     */
    clone: (array: any[]) => any[];
    /**
     * A binary search algorythm to find a number in an array of numbers.
     * @param array A number array.
     * @param num the number you want to find in the given array.
     * @param fn Do not edit.
     * @returns the index of the number, or else -1 if it did not find it.
     */
    binary: (array: number[], num: number, fn?: (a: number, b: number) => number) => number;
    /**
     * @param array Any array.
     * @returns The given array, but with all the 0s at the end of it.
     */
    push0toEnd: (array: any[]) => any[];
    /**
     * @param shuffled If the deck should be shuffled.
     * @param jokers If the deck should contain jokers.
     * @returns A deck of 52/54 french cards.
     */
    deck: (shuffled?: boolean, jokers?: boolean) => any[];
    /**
     * @returns An array that represents a french roulette.
     */
    roulette: () => string[];
};
