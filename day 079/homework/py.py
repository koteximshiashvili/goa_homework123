def count_area(a, b=None, c=None):
    if b is not None and c is None:
        return a * b
    elif b is None and c is None:
        return 3.1416 * a ** 2
    elif b is not None and c is not None: 
        return (a * b) / 2


print(count_area(5, 10))
print(count_area(7))
print(count_area(6, 4, 5))
