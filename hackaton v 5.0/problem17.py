
def manual_max(list1):
    max_num = list1[0]
    for num in list1:
        if max_num < num:
            max_num = num
    return max_num
print(manual_max(list1=[5, 3, 1, 20, 11]))