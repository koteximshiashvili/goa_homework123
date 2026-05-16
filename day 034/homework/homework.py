def find_short(s):
    list1 = s.split(" ")


    word_len = len(list1[0])
    for i in list1:
        if len(i) < word_len:
            word_len = len(i)
    
    # word_len = 3
    return word_len

print(find_short("bitcoin take over the world maybe who knows perhaps"))
#ამ კოდში S ცვლადს სფეისებთან ბრჭყალები დაეწერება შემდეგ შევქმენით ცვლადი word_lenი word_lenში იქნება 7 რადგან 
#პირველი სიტყვა არის 7 ასოთი შემდეგ ფუნქცია ამოწმებს შემდეგი სიტყვა ასოებით ნაკლებია თუ არა თუ არ არის ნაკლები
#მაშინ გააგრძელებს ძებნას თუ არის ნაკლები მაშინ ამ რიცხვს შეიტანს word_lenში და ასე გააგრძელებს ბოლომდე.


words = "hello! my name is kote" 
print(words.split(" "))

words = "hello! my surname is ximshiashvili" 
print(words.split("i"))

words = "im ,in ,goa" 
print(words.split(","))

words = "this is my homework" 
print(words.split("h"))

words = "i like reading" 
print(words.split("i"))

words = "to be continued" 
print(words.split("n"))

words = "i like proggraming" 
print(words.split("g"))

words = "i prefer web development" 
print(words.split("e"))

words = "i like making sites" 
print(words.split("i"))

words = "i like chess" 
print(words.split("s"))