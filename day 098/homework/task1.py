def func(matrix):
    unique_elements = []
    
    for i in range(len(matrix)):
        for j in range(len(matrix[i])):
            element = matrix[i][j]
            count = 0
            if matrix[i][j+1] == element:
                count += 1
            
            if count == 1:
                unique_elements.append(element)
    
    return unique_elements


matrix = [
    [1, 2, 5],
    [2, 5, 6],
    [3, 3, 6]
]

print(func(matrix))
