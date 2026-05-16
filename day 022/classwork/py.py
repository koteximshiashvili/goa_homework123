def calculate_average(lst):
    return sum(lst) / len(lst)

def manual_sum(lst):
    res = 0
    for i in lst:
        res += i
    return res 

def greet(name="guest"):
    return "hello " + name

def func(firstnum, secondnum):
    return sum(i for i in range(firstnum, secondnum + 1))

def func1(lst):
    even = [i for i in lst if i % 2 == 0]
    odd = [i for i in lst if i % 2 != 0]
    return [even, odd]

def print_numbers(n):
    lst = []
    for i in range(1, n):
        lst.append(i)
    return lst

def print_even_numbers(n):
    return [i for i in range(2, n) if i % 2 == 0]

def sum(num1, num2):
    return num1 + num2

def joined_string(str1, str2):
    return str1 + str2

def find_maximum(num1, num2):
    return max([num1, num2])

def reverse_string(str):
    return str[::-1]

def fartobi(width, height):
    return width * height

def is_prime(n):
    res = []
    for i in range(1, n + 1):
        if n % i == 0:
            res.append(i)
    return len(res) == 2

def sum1(lst):
    return sum(lst)

def count(str):
    return sum(1 for i in str if i in 'aeiou')

def func2(lst):
    return [i.upper() for i in lst]