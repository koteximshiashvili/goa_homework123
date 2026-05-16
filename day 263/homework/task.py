import random

def bubble_sort(lst):
    for i in range(len(lst)):
        for j in range(len(lst)-1):
            if lst[j] > lst[j+1]:
                f = lst[j]
                lst[j] = lst[j+1]
                lst[j+1] = f


def selection_sort(lst):
    for i in range(len(lst)):
        minIndex = i
        for j in range(i+1, len(lst)):
            if lst[j] < lst[minIndex]:
                minIndex = j
        lst[i], lst[minIndex] = lst[minIndex], lst[i]

def insertion_sort(lst):
    for i in range(1, len(lst)):
        idk = lst[i]
        j = i - 1
        while j >= 0 and idk < lst[j]:
            lst[j + 1] = lst[j]
            j -= 1
        lst[j + 1] = idk

def bogo_sort(lst):
    while not sorted(lst) == lst:
        random.shuffle(lst)
    return lst

