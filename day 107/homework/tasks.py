# first task

def func(matrix):
    all_elements = [matrix[i][j] for i in range(len(matrix)) for j in range(len(matrix[i]))]
    first_max = max(all_elements)
    all_elements.remove(first_max)
    second_max = max(all_elements)

    return first_max + second_max

# func([[1,2,3], [1,2,3], [5,6,9]])

# second task
def func1(matrix):
    seen = set()
    last_duplicate = None

    for row in matrix:
        for num in row:
            if num in seen:
                last_duplicate = num
            seen.add(num)

    if last_duplicate is None:
        return "no duplicates"
    else:
        return last_duplicate

# print(func1([[5,1,4], [1,2,3], [5,6,9]]))

# third task

def func2(arr):
    result = []
    for i in range(len(arr)):
        count = sum(1 for x in arr[:i] if x < arr[i])
        result.append(str(count))
    return ", ".join(result)

print(func2([3, 2, 6, 5, 1]))







