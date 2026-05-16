def calculator(num1 , num2 , operation):
    if operation == "+":
        return num1 + num2
    elif operation == "-":
        return num1 - num2
    elif operation == "/":
        return num1 / num2
    else:
        return num1 * num2
num1 = int(input("please enter number 1: "))

operation = input("please enter operation: ")
num2 = int(input("please enter number 2: "))
print(calculator(num1 , num2 , operation))