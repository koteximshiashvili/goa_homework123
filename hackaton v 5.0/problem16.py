def manual_min(list1):
    min_num = list1[0]
    for num in list1:
        if min_num > num:
            min_num = num
    return min_num
print(manual_min(list1=[33, 11, 21, 22, 101, 5]))