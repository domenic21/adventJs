function manufacture(gifts, materials) {
  return gifts.filter((gift) =>
    [...gift].every((letter) => materials.includes(letter))
  );
}
// Test cases
const gifts1 = ["tren", "oso", "pelota"];
const materials1 = "tronesa";
console.log(manufacture(gifts1, materials1)); // Output: ["tren", "oso"]

const gifts2 = ["juego", "puzzle"];
const materials2 = "jlepuz";
console.log(manufacture(gifts2, materials2)); // Output: ["puzzle"]

const gifts3 = ["libro", "ps5"];
const materials3 = "psli";
console.log(manufacture(gifts3, materials3)); // Output: []

/*
How it works:
gifts.filter(gift => [...gift].every(letter => materials.includes(letter)))
The filter method iterates through each gift in the gifts array.
For each gift, [...gift] spreads the characters of the gift string into an array.
The every method checks if every letter in the spread-out gift array is included in the materials string using materials.includes(letter).
If every letter in the gift can be found in the materials, every returns true, and the gift is included in the filtered result.

Explanation:
filter iterates through each gift in the gifts array.
[...gift] converts each gift string into an array of characters.
every checks if every character (letter) in the gift is included in the materials string. 
It returns true only if all characters in the gift are found in materials.
If every returns true for a gift, it means that all the necessary 
materials for that gift are available, so it includes that gift in the resulting array.
Advantages:
The code utilizes array methods (filter, every) along with spread syntax to succinctly check if the available materials can manufacture each gift.
It's a concise and readable solution that leverages JavaScript's array manipulation methods.
Limitations:
This solution checks if all individual letters in the gift are present in the materials, 
but it doesn't account for the count of each letter. For instance, if a gift requires two 'a' characters, but the materials only contain one 'a', it would still consider it manufacturable, which might not be accurate in all cases.
*/
