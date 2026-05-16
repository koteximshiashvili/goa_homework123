def func1(d2_matrix):
    sum = 0
    for i in d2_matrix:
        for j in i:
            sum += j
    print(sum)

func1([[1,23,3], [1,2,3]])

