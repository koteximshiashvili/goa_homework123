def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr

print(bubble_sort([1,4,5,63,2,1,3,987,6543,2]))
# worst O(n**2) თუ ყველა ელემენტი საპირისპიროდ დალაგებულია

# best O(n) თუ უკვე დალაგებულია

# average O(n**2)

def selection_sort(arr):
    n = len(arr)
    for i in range(n):
        min_index = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_index]:
                min_index = j
        arr[i], arr[min_index] = arr[min_index], arr[i]
    return arr

print(selection_sort([9,8,765,43,2,45]))

# worst O(n**2)

# best O(n²)

# average O(n**2)

def insertion_sort(arr):
    for i in range(1, len(arr)):
        i1 = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > i1:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = i1
    return arr

print(insertion_sort([9,87,6543,2,3456,78,765,43,4567,8]))

# worst: O(n**2) თუ მასივი უკუღმაა დალაგებული

# best: O(n) თუ უკვე დალაგებულია

# average: O(n**2)

# სორტირება მნიშვნელოვანია რადგან ზოგ ალგორითმშ წინასწარ სორტირებაა საჭირო


def sort_string(s):
    chars = list(s)

    n = len(chars)
    for i in range(n):
        for j in range(0, n - i - 1):
            if chars[j] > chars[j + 1]:
                chars[j], chars[j + 1] = chars[j + 1], chars[j]

    return ''.join(chars)


print(sort_string("hedf"))

def sort_objects(arr):
    n = len(arr)

    for i in range(n):
        for j in range(0, n - i - 1):
            a, b = arr[j], arr[j + 1]

            if a["order"] > b["order"]:
                arr[j], arr[j + 1] = b, a
            elif a["order"] == b["order"] and a["id"] < b["id"]:
                arr[j], arr[j + 1] = b, a

    return arr


print(sort_objects([
    {"order": 2, "id": 5},
    {"order": 1, "id": 7},
    {"order": 2, "id": 8},
    {"order": 1, "id": 3},
]))

