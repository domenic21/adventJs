function findNaughtyStep(original, modified) {
  // Code here
  if (original === modified) return "";
  let pos = 0; // position of the first difference
  while (original[pos] === modified[pos]) {
    //pos means position
    pos++; // increment pos
  }
  let or = original.slice(pos); // slice means cut
  let mo = modified.slice(pos); // slice does not include the last index

  return or.length > mo.length ? or[0] : mo[0]; // ternary operator
}

// Test cases
const original = "abcd";
const modified = "abcde";

const original2 = "stepfor";
const modified2 = "stepor";

const original3 = "abcde";
const modified3 = "abcde";

const original4 = "xxxx";
const modified4 = "xxoxx";

console.log(findNaughtyStep(original, modified));
console.log(findNaughtyStep(original2, modified2));
console.log(findNaughtyStep(original3, modified3));
console.log(findNaughtyStep(original4, modified4));

/* In Santa's workshop, a mischievous elf has been playing around with the gift production line, 
adding or removing an unplanned step.

You have the original sequence of original manufacturing steps and the
 modified modified sequence that may include an extra step or be missing a step.

Your task is to write a function that identifies and returns the first extra 
step that was added or removed in the manufacturing chain. If there is no difference 
between the sequences, return an empty string.*/
