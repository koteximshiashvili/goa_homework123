def func(n):
    count = 0
    while n >= 10:
        num = 1
        for digit in str(n):
            num *= int(digit)
        n = num
        count += 1
    return count

print(func(12))
