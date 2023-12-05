import re

def decode(message):
    regex = r'\(([^()]+)\)'
    match = re.search(regex, message)

    if not match:
        return message

    reversed_content = match.group(1)[::-1]
    replaced = re.sub(regex, reversed_content, message, 1)
    result = decode(replaced)
    return result
  
  #Explanation of Python Code:
#The Python re module is used for regular expressions.
#re.search() is used to find the first occurrence of the regex pattern in the message.
#re.sub() is utilized to replace the matched pattern with the reversed content.
#The function decode() recursively calls itself to continue decoding the message until no more 
#parentheses patterns are found.
#The logic and regex pattern remain consistent with the JavaScript code, 
# allowing this Python code to decode messages in a similar manner by reversing content enclosed within parentheses.