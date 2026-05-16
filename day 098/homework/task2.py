def most_frequent_characters(string):
    frequency = {}
    
    for char in string:
        if char in frequency:
            frequency[char] += 1
        else:
            frequency[char] = 1
    
    max_freq = 0
    for char in frequency:
        if frequency[char] > max_freq:
            max_freq = frequency[char]
    
    result = []
    for char in frequency:
        if frequency[char] == max_freq:
            result.append(char)
    
    return result

string = "aabbbcccdde"
print(most_frequent_characters(string))
