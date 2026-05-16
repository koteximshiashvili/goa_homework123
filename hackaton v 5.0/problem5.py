word = "apple"
wowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U" ]
count = 0
for wowel in wowels:
    if wowel in word:
        count += 1
print(count) 
