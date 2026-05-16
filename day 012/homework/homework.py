for i in range(0 , 21):
    print(i)

num = int(input("please enter a number: "))
if num % 2 == 0:
    print("number is even")
else:
    print("number is odd")
for i in range(0 , 21):
    if i % 2 == 0:
        print(i)
for i in range(50 , 100):
    print(i + i)
for i in range(1 , 51):
    if i % 5 == 0:
        print(i)
num1 = int(input("please enter number 1: "))
num2 = int(input("please enter number 2: "))
for i in range(num1 , num2):
    if num1 > num2:
        print(num1 , num2)
    else:
        print(i)
for i in range(5 , 10):
    print(i * i)