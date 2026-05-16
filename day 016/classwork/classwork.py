age =int(input("please enter your age: "))
if age >= 5 and age < 13:
    print("you are a kid")
elif age >= 13 and age < 18:
    print("you are a teenager")
else:
    print("you are adult")

films =["cobra kai" , "teen wolf" , "lost"]
music =["deep focus music" , "aggresive drift" , "phonk"]
all =films + music
len(all)
print