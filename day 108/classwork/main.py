def func(s):
    max_substr = ""
    for i in range(len(s)):
        for j in range(i + 1, len(s) + 1):
            substring = s[i:j]
            if len(substring) == len(set(substring)) and len(substring) > len(max_substr):
                max_substr = substring
    return max_substr

print(func("tgerfefgthh"))
