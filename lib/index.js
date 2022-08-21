"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.odd = void 0;
var data_1 = require("./data");
var falsy = [false, null, undefined, NaN, 0, ""];
var letters = "abcdefghijklmnopqrstuvwxyz";
var UpperLetters = letters.toUpperCase();
var allchars = letters + UpperLetters + "1234567890!@#$%^&*()-_=+[]{}'\";:|\\,.<>`~/?";
var bytes = new ArrayBuffer(Float32Array.BYTES_PER_ELEMENT);
var floatV = new Float32Array(bytes);
var intV = new Uint32Array(bytes);
var suits = ["♤", "♡", "♧", "♢"];
var ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
exports.odd = {
    /**
     * @param min The minimum value.
     * @param max The maximum value.
     * @returns A random value between min and max.
     */
    rng: function (min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    },
    /**
     * @param chance The likelyhood of the function to return true.
     * @default 50%
     * @returns a Boolean.
     */
    flip: function (chance) {
        if (chance === void 0) { chance = 50; }
        return chance > exports.odd.rng(0, 100);
    },
    /**
     * @returns A random falsy value.
     */
    falsy: function () {
        return exports.odd.pick(falsy);
    },
    /**
     * @param uppercase If the letter should be uppercase.
     * @returns A random letter
     */
    letter: function (uppercase) {
        if (uppercase === void 0) { uppercase = false; }
        var picked = exports.odd.pick(letters.split(""));
        return uppercase ? picked.toUpperCase() : picked;
    },
    /**
     * @param length The desired length of the string.
     * @returns A random string.
     */
    string: function (length) {
        var arr = allchars.split("");
        var string = [];
        for (var i = 0; i < length; i++) {
            string.push(exports.odd.pick(arr));
        }
        return string.join("");
    },
    /**
     * @param type The type of person we're getting the random age of.
     * Leave blank for all ages.
     * @returns A random age of the type of person.
     */
    age: function (type) {
        switch (type) {
            case "child":
                return exports.odd.rng(1, 10);
            case "teen":
                return exports.odd.rng(11, 18);
            case "adult":
                return exports.odd.rng(18, 60);
            case "elder":
                return exports.odd.rng(60, 90);
            default:
                return exports.odd.rng(1, 100);
        }
    },
    /**
     * @param american If the date shoudl be in the american format (MM/DD/YYYY).
     * @returns A random date.
     */
    date: function (american) {
        if (american === void 0) { american = false; }
        var year = exports.odd.rng(1900, 2022);
        var month = exports.odd.rng(1, 12);
        var day = exports.odd.rng(1, month == 2 ? 28 : 30);
        return american ? "".concat(month, "/").concat(day, "/").concat(year) : "".concat(day, "/").concat(month, "/").concat(year);
    },
    /**
     * @param amount How many dice you want yo roll.
     * @param sides How many sides for each die.
     * @returns An array that contains all the rolls.
     */
    roll: function (amount, sides) {
        var rolls = [];
        for (var i = 0; i < amount; i++) {
            rolls.push(exports.odd.rng(1, sides));
        }
        return rolls;
    },
    /**
     * @returns A random animal's name.
     */
    animal: function () {
        return exports.odd.pick(data_1.animals);
    },
    /**
     * @returns A random first name.
     */
    name: function () {
        return exports.odd.pick(data_1.names);
    },
    /**
     * @returns A random country.
     */
    country: function () {
        return exports.odd.pick(data_1.countries);
    },
    /**
     * @param amount How many emojis you want to get.
     * @returns A random emoji.
     */
    emoji: function (amount) {
        if (amount === void 0) { amount = 1; }
        var emoji = "";
        for (var i = 0; i < amount; i++) {
            emoji += exports.odd.pick(data_1.emojis);
        }
        return emoji;
    },
    /**
     * @returns A random english Pokemon name.
     */
    pokemon: function () {
        return exports.odd.pick(data_1.pokemons);
    },
    /**
     *
     * @returns A random IP address.
     */
    ip: function () {
        return "".concat(exports.odd.rng(1, 255), ".").concat(exports.odd.rng(1, 255), ".").concat(exports.odd.rng(1, 255), ".").concat(exports.odd.rng(1, 255));
    },
    /**
     * @param str Any item.
     * @returns A boolean, which represents if the given item is a string.
     */
    isString: function (str) {
        return typeof str == "string";
    },
    /**
     * @param num Any item.
     * @returns A Boolean, which represents if the given item is a number.
     */
    isNumber: function (num) {
        return typeof num == "number";
    },
    /**
     *
     * @param num Any number.
     * @returns A Boolean, which represents if the number is prime.
     */
    isPrime: function (num) {
        if (num < 2) {
            return false;
        }
        for (var i = 2; i <= Math.sqrt(num); i++) {
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
    prime: function (min, max) {
        var primes = [];
        for (var i = min; i <= max; i++) {
            var flag = i > 1;
            for (var j = 2; j <= Math.sqrt(i); j++) {
                if (i % j == 0) {
                    flag = false;
                    break;
                }
            }
            if (flag)
                primes.push(i);
        }
        return primes;
    },
    /**
     * @param num Any number.
     * @returns The first num values of the Fibonacci chain.
     */
    fibonacci: function (num) {
        var fib = [0, 1];
        for (var i = 2; i <= num; i++) {
            fib[i] = fib[i - 1] + fib[i - 2];
        }
        return fib;
    },
    /**
     * Quake III inverse square root algorythm.
     * @param num A value
     * @returns The inverse square root of the num parameter.
     */
    invSqrt: function (num) {
        var x2 = num * 0.5;
        floatV[0] = num;
        intV[0] = 0x5f3759df - (intV[0] >> 1);
        var f = floatV[0];
        f = f * (1.5 - x2 * f * f);
        return f;
    },
    /**
     * @param num Any number.
     * @returns The factorial of the given number.
     */
    factorial: function (num) {
        var result = 1;
        for (var i = 2; i <= num; i++) {
            result = result * i;
        }
        return result;
    },
    /**
     * @param array A number array.
     * @returns The sum of all the numbers in the array.
     */
    sum: function (array) {
        var sum = 0;
        for (var i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum;
    },
    /**
     * @param array A number array.
     * @returns A value which is the subtraction of all the number in the array.
     */
    sub: function (array) {
        var sub = array[0];
        for (var i = 1; i < array.length; i++) {
            sub -= array[i];
        }
        return sub;
    },
    /**
     * @param array Any array.
     * @returns A random element from the given array.
     */
    pick: function (array) {
        return array[exports.odd.rng(0, array.length)];
    },
    /**
     * @param array Any array.
     * @returns The given array, but shuffled.
     */
    shuffle: function (array) {
        var _a;
        var cIndex = array.length, rndIndex;
        while (cIndex != 0) {
            rndIndex = Math.floor(Math.random() * cIndex);
            cIndex--;
            _a = [array[rndIndex], array[cIndex]], array[cIndex] = _a[0], array[rndIndex] = _a[1];
        }
        return array;
    },
    /**
     * Quick sort algorythm.
     * @param array A number array
     * @returns The same array, but sorted.
     */
    sort: function (array) {
        if (array.length < 2)
            return array;
        var pivot = array[array.length - 1];
        var beg = [];
        var end = [];
        for (var i = 0; i < array.length - 1; i++) {
            if (array[i] < pivot) {
                beg.push(array[i]);
            }
            else {
                end.push(array[i]);
            }
        }
        return __spreadArray(__spreadArray(__spreadArray([], exports.odd.sort(beg), true), [pivot], false), exports.odd.sort(end), true);
    },
    /**
     * @param array Any array.
     * @returns A copy of the given array.
     */
    clone: function (array) {
        return __spreadArray([], array, true);
    },
    /**
     * A binary search algorythm to find a number in an array of numbers.
     * @param array A number array.
     * @param num the number you want to find in the given array.
     * @param fn Do not edit.
     * @returns the index of the number, or else -1 if it did not find it.
     */
    binary: function (array, num, fn) {
        if (fn === void 0) { fn = function (a, b) { return a - b; }; }
        var beg = 0;
        var end = array.length - 1;
        while (beg <= end) {
            var k = (end + beg) >> 1;
            var cmp = fn(num, array[k]);
            if (cmp > 0) {
                beg = k + 1;
            }
            else if (cmp < 0) {
                end = k - 1;
            }
            else {
                return k;
            }
        }
        return -1;
    },
    /**
     * @param array Any array.
     * @returns The given array, but with all the 0s at the end of it.
     */
    push0toEnd: function (array) {
        var count = 0;
        for (var i = 0; i < array.length; i++)
            if (array[i] != 0)
                array[count++] = array[i];
        while (count < array.length)
            array[count++] = 0;
        return array;
    },
    /**
     * @param shuffled If the deck should be shuffled.
     * @param jokers If the deck should contain jokers.
     * @returns A deck of 52/54 french cards.
     */
    deck: function (shuffled, jokers) {
        if (shuffled === void 0) { shuffled = false; }
        if (jokers === void 0) { jokers = false; }
        var deck = [];
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 13; j++) {
                deck.push(ranks[j] + suits[i]);
            }
        }
        if (jokers) {
            deck.push("Joker");
            deck.push("Joker");
        }
        return shuffled ? exports.odd.shuffle(deck) : deck;
    },
    /**
     * @returns An array that represents a french roulette.
     */
    roulette: function () {
        var roulette = ["🟢 0"];
        for (var i = 1; i <= 36; i++) {
            if (i <= 10 || (i > 18 && i <= 28))
                roulette.push(i % 2 == 0 ? "\u26AB ".concat(i) : "\uD83D\uDD34 ".concat(i));
            else if (i <= 18 || (i > 28 && i <= 36))
                roulette.push(i % 2 == 0 ? "\uD83D\uDD34 ".concat(i) : "\u26AB ".concat(i));
        }
        return roulette;
    }
};
