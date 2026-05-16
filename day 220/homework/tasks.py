# რეკურსია არის ფუნციაში თვითონ იმ ფუნქციის გამოძახება რომელშიც ვართ

def func(n):
    if n == 0:
        return 0
    func(n-1)
    print(n)
func(3)

def func1(n):
    if n <= 0:
        return
    print(n)
    func1(n-1)
func1(10)

def sum(arr):
    if not arr:
        return 0
    return arr[0] + sum(arr[1:])
print(sum([12,3,45,678,7,6543]))

def length(arr):
    if not arr:
        return 0
    return 1 + length(arr[1:])
print(length([1,1,2345,678]))

def reverse(str):
    if not str:
        return ""
    return str[-1] + reverse(str[0:-1])
print(reverse("abcd"))

def find_max(arr):
    if len(arr) == 1:
        return arr[0]
    max_rest = find_max(arr[1:])
    return arr[0] if arr[0] > max_rest else max_rest
print(find_max([1,2,3,4,7,6,5]))

def vowels(str):
    if not str:
        return 0
    if str[0] in "aeiouy":
        return 1 + vowels(str[1:])
    return vowels(str[1:])
print(vowels("hello"))