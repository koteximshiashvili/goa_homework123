def task1(arr3d):
    return [val for i in arr3d for j in i for val in j]
print(task1([
    [ [1, 2], [3, 4] ],
    [ [5, 6], [7, 8] ]
]))
def task2(arr3d, target):
    for x, smth in enumerate(arr3d):
        for y, idk in enumerate(smth):
            for z, value in enumerate(idk):
                if value == target:
                    return (x, y, z)
    return None
print(task2([
    [ [1, 2], [3, 4] ],
    [ [5, 6], [7, 8] ]
], 4))
def task3(matrix, directions):
    def rotate_right(mat):
        return [list(row) for row in zip(*mat[::-1])]

    def rotate_left(mat):
        return [list(row) for row in zip(*mat)][::-1]

    result = [row[0:len(row)] for row in matrix]

    for i in directions:
        if i == 1:
            result = rotate_right(result)
        else:
            result = rotate_left(result)

    return result
print(task3([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
], [1, 1, -1]))