numbers =[]

for i in range(1 , 10):
    numbers.append(i)

print(numbers)
print(len(numbers))

start=int(input("please enter start number : "))
end=int(input("please enter end number : "))
nums =[]

for i in range(start , end):
    nums.append(i)

print(nums)
print(min(nums))
print(max(nums))
print(sum(nums))

count = int(input("Please enter quantity of how many numbers do you want to enter: "))

numbers = []

for i in range(count):
    num = int(input("Please enter number: "))
    numbers.append(num)

print(sum(numbers))

cars =["bmw" , "merecedes" , "supra" ,"lamborghini" , "mustang"]

print(cars[0:3])
print(cars[3:5])

names  =["kote" , "kote" , "sandro"]
for name in names:
    print(name)
    if name == "kote":
        print("hello administrator")
    else:
        print("hello user")

