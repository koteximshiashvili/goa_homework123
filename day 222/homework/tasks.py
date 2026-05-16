import random, itertools
def task1(arr):
    el1 = random.randint(0, len(arr)-1)
    el2 = random.randint(0, len(arr)-1)
    return f"{arr[el1]} // {arr[el2]} - {abs(arr[el1] - arr[el2])}"

print(task1([1,2,3,4,6,7,9,9]))

# time: O(n)
# space: O(1)

def task3(arr):
    n = len(arr)
    res = []
    for i in range(n):
        group = []
        current_sum = 0
        for j in range(i, n):
            current_sum += arr[j]
            group.append(current_sum)
        res.append(group)
    
    return res
print(task3([4, 7, 1]))

# space: O(n**2)
# time: O(n**2)

def task4(n):
    return list(itertools.permutations(n))
print(task4("abc"))
# space: O(1)
# time: O(n!)

# დროის კომპლექსურობა აღწერს რამდენი ოპერაცია გვჭირდება რომ ამოვხსნათ პრობლემა
# სივრცის კომპლექსურობა აღწერს რამდენი მეხსიერება სჭირდება ალგორითმს რომ გაეშვას