def func(s):
    counts = {}
    
    for char in s:
        if char in counts:
            counts[char] += 1
        else:
            counts[char] = 1
    
    for char in s:
        if counts[char] == 1:
            return char
    
    return None

print(func("ddds"))