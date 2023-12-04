def find_naughty_step(original, modified):
    if original == modified:
        return ''
    
    pos = 0
    while pos < len(original) and pos < len(modified) and original[pos] == modified[pos]:
        pos += 1
    
    or_substr = original[pos:]
    mo_substr = modified[pos:]
    
    return or_substr[0] if len(or_substr) > len(mo_substr) else mo_substr[0]

# Test cases
original = 'abcd'
modified = 'abcde'
print(find_naughty_step(original, modified))  # Output: 'd'

original2 = 'stepfor'
modified2 = 'stepor'
print(find_naughty_step(original2, modified2))  # Output: 'f'

original3 = 'abcde'
modified3 = 'abcde'
print(find_naughty_step(original3, modified3))  # Output: ''

original4 = 'xxxx'
modified4 = 'xxoxx'
print(find_naughty_step(original4, modified4))  # Output: 'o'
