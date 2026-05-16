# big O notation არის გზა რომლითაც შეგვიძლია შევაფასოთ რაიმე ალგორითმის სისწრაფე inputის გაზრდასთან ერთად.

# O(1)
def first_el(arr):
    return arr[0]
print(first_el([1,234,56,7,89,0,23,456,78,987,6543,2,3456,76543,2]))
# O(n)
def sum(arr):
    res = 0
    for i in arr:
        res += i
    return res
print(sum([1,34,56,5]))
# O(n)
def find(arr, target):
    for i in arr:
        if i == target:
            return True
    return False
print(find([1,234,56,7], 56))
# O(n**2)
def pairs(arr):
    return [[i, j] for i in arr for j in arr]
print(pairs([1,234,567,89,8,765,432,2,34,5678,98,76,543,2,3456,7]))
# O(log n)
def binary_search(arr, target):
    low = 0
    high = len(arr) - 1

    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return True
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1

    return False
print(binary_search([1,2,3,4,5,6,7,8,9], 10))
# O(n)
def linear_search(arr, target):
    for i in arr:
        if i == target:
            return True
    return False
print(linear_search([12324567890987654321,2,3,45324565768,67,34567898,923456], 2))
