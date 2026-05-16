import random

def bogosort(arr):
    while not all(arr[i] <= arr[i+1] for i in range(len(arr)-1)):
        random.shuffle(arr)
    return arr

bogosort([1,2,3,4,56,7,8,9,10])