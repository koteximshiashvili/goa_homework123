def func(arr):
    if not arr:
        return []

    arr1 = []
    arr2 = [arr[0]]

    for i in range(1, len(arr)):
        if arr[i] > arr[i - 1]:
            arr2.append(arr[i])
        else:
            if len(arr2) > len(arr1):
                arr1 = arr2
            arr2 = [arr[i]]

    if len(arr2) > len(arr1):
        arr1 = arr2

    return arr1
print(func([1,3,1,4,5,6,8]))