def d2(list1):
    if (list1[0][0] == "X" and list1[1][1] == "X" and list1[2][2] == "X") or (list1[0][2] == "X" and list1[1][1] == "X" and list1[2][0] == "X") or (list1[0][0] == "X" and list1[1][0] == "X" and list1[2][0] == "X") or (list1[0][2] == "X" and list1[1][2] == "X" and list1[2][2] == "X") or (list1[0][0] == "X" and list1[0][1] == "X" and list1[0][2] == "X") or (list1[1][0] == "X" and list1[1][1] == "X" and list1[1][2] == "X") or (list1[2][0] == "X" and list1[2][1] == "X" and list1[2][2] == "X") or (list1[0][1] == "X" and list1[1][1] == "X" and list1[2][1] == "X"):
        print("X won")
    elif (list1[0][0] == "O" and list1[1][1] == "O" and list1[2][2] == "O") or (list1[0][2] == "O" and list1[1][1] == "O" and list1[2][0] == "O") or (list1[0][0] == "O" and list1[1][0] == "O" and list1[2][0] == "O") or (list1[0][2] == "O" and list1[1][2] == "O" and list1[2][2] == "O") or (list1[0][0] == "O" and list1[0][1] == "O" and list1[0][2] == "O") or (list1[1][0] == "O" and list1[1][1] == "O" and list1[1][2] == "O") or (list1[2][0] == "O" and list1[2][1] == "O" and list1[2][2] == "O") or (list1[0][1] == "O" and list1[1][1] == "O" and list1[2][1] == "O"):
        print("O won")
    else:
        print("tie")

d2([[ 'X', "O", ""],
    ["X", "O", "O"],
    ["X", "", ""]])