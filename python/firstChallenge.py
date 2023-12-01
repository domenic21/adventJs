def find_first_repeated(gifts):
    index_map = {} # Create a dictionary to store the index of each gift

    for i, gift in enumerate(gifts): # Enumerate through the list of gifts
        if gift in index_map: # If the gift is already in the dictionary, return the gift
            return gifts[index_map[gift]] # Return the gift at the index of the gift in the dictionary
        else:
            index_map[gift] = i # If the gift is not in the dictionary, add it to the dictionary

    return -1  # Return -1 if no repeated number found


# Test cases
gift_ids = [2, 1, 3, 5, 3, 2]
first_repeated_id = find_first_repeated(gift_ids)
print(first_repeated_id)  # Output: 3

gift_ids2 = [1, 2, 3, 4]
first_repeated_id2 = find_first_repeated(gift_ids2)
print(first_repeated_id2)  # Output: -1

gift_ids3 = [5, 1, 5, 1]
first_repeated_id3 = find_first_repeated(gift_ids3)
print(first_repeated_id3)  # Output: 5

