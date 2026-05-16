def func2(d2_matrix):
    new_matrix = []
    for row in range(len(d2_matrix)):
        new_row = []

        for col in range(len(d2_matrix)):
            new_row.append(d2_matrix[col][row])
        new_matrix.append(new_row)
    print(new_matrix)
func2([[1,2,3], [4,5,6], [7,8,9]])