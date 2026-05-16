def func(text):
    vowels = "aeiouAEIOU"
    max_seq = ""
    current_seq = ""

    for char in text:
        if char in vowels:
            current_seq += char
            if len(current_seq) > len(max_seq):
                max_seq = current_seq
        else:
            current_seq = ""

    return len(max_seq)

print(func('abeiou'))