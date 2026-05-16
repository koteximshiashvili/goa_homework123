def join(list, joinLetter):
    new_str = ""
    word = ""
    for i in list:
        word += i + joinLetter

    return new_str[0:-1]
