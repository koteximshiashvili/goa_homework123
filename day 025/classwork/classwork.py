name = input("please enter your name: ")
print(name.capitalize())
#capitalize ფუნქცია პირველ ასოს ადიდებს
name1 = input("please enter your name: ")
print(name1.upper())
#upper ფუნქცია ადიდებს ყველა ასოს

sentence ="my name is kote im 11 years old"
print(sentence.count("y"))
#count ფუნქცია იტვლის სიმბოლოებს რაიმე წინადადებაში
name2 =input("please enter a word: ")
print(name2.lower())
#lower ფუნქცია აპატარავებს ასოებს სიტყვაში

sentence ="my name is kote im 11 years old"
print(sentence.find("kote"))
print(sentence.index("y"))

list_gmail =[""]
count =int(input("how much email do you want to enter: "))
for i in range(count):
    email =input("please enter email: ")
    if count.endswith("@gmail.com"):
        print("thats a valid gmail")
        print(list_gmail.append(count))
    else:
        print("thats a invalid gmail")
