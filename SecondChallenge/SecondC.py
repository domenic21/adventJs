def manufacture(gifts, materials):
    return [gift for gift in gifts if all(letter in materials for letter in gift)] # Return a list of gifts that can be manufactured 
    # This is done by iterating through the list of gifts and checking if all the letters in the gift.
    

# Test cases
gifts1 = ['tren', 'oso', 'pelota']
materials1 = 'tronesa'
print(manufacture(gifts1, materials1))  # Output: ['tren', 'oso']

gifts2 = ['juego', 'puzzle']
materials2 = 'jlepuz'
print(manufacture(gifts2, materials2))  # Output: ['puzzle']

gifts3 = ['libro', 'ps5']
materials3 = 'psli'
print(manufacture(gifts3, materials3))  # Output: []
