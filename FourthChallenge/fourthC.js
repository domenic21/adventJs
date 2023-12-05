function decode(message) {
    const regex = /\(([^()]+)\)/
    const match = message.match(regex)
  
    if (!match) return message 
  
    const reversed = match[1].split('').reverse().join('')
    const replaced = message.replace(regex, reversed)
    const result = decode(replaced) 
    return result 
  }

  const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

// Step by step:
// 1. Reverse the nested -> sa(ualcatn)s
// 2. Reverse the remaining one -> santaclaus

/**Regular Expression (Regex):

const regex = /\(([^()]+)\)/;
This regular expression searches for a pattern enclosed in parentheses. Specifically, it captures any sequence of characters that are not parentheses.
Matching:

const match = message.match(regex);
It tries to find the first match of the regex pattern in the message string.
Decoding:

if (!match) return message;
If no match is found, it means there are no parentheses left in the message, so it returns the original message.
Reverse and Replace:

const reversed = match[1].split('').reverse().join('');
It takes the content inside the parentheses from the matched pattern, splits it into individual characters, reverses the order of characters, and joins them back into a string.
const replaced = message.replace(regex, reversed);
It replaces the content inside the parentheses with the reversed content in the message string.
Recursion:

const result = decode(replaced);
It recursively calls the decode function with the updated replaced message.
The function continues this process until there are no more parentheses to decode, and it returns the final decoded message. */
