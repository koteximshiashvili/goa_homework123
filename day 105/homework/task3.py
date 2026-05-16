def func3(d2_matrix):
    first_diagonal_sum = 0
    second_diagonal_sum = 0
    for i in range(len(d2_matrix)):
        first_diagonal_sum += d2_matrix[i][i]
    for i in range(len(d2_matrix)):
        for j in range(len(d2_matrix)):
            if i + j == len(d2_matrix) - 1:
                second_diagonal_sum += d2_matrix[i][j]
    print(first_diagonal_sum, second_diagonal_sum)

func3([[1,2,3], [4,5,6], [7,8,9]])