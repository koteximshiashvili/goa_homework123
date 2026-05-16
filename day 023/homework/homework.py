def number(num1 , num2):
    print(num1 + num2)
    print(num1 - num2)
    print(num1 * num2)
    print(num1 / num2)

print(number(9 , 7))
def numbers(num1 , num2):
    while num1 <= 100:
        print(num1 + num2)
        num1 = num1 + num2
print(numbers(10 , 11))

def my_numbers(num):
    if num % 2 == 0:
        return "even"
    else:
        return "odd"
print(my_numbers(15))
def list_max(list):
  list =[3 , 5 , 7]
  return max(list)

print(list_max(list))
def list_sum(list):
  list =[4 , 5 , 7]
  return sum(list)

print(list_sum(list))

print(list_sum(list))
def list_str(list):
  list =["hello" , "welcome" , "guest"]
  print(min(list)) 
  return max(list)
print(list_str(list))
def letter(string):
    if string.lower:
        return(string.upper)
    else:
        return(string.lower)
print(letter("a"))
def word(stri):
    if "a" or "e" or "i" or "o" or "u" or "y" in stri:
        return "the word has xmovani letters"
    else:
        return "the word doesnot have xmovani letters"
print(word("hello"))
def my_numbers_num(num7):
    if num7 % 2 == 0:
        return "true"
    else:
        return "felse"
print(my_numbers_num(16))

def nums(num):
    if num % 2 == 0:
        return "even"
    else:
        return "odd"
print(nums(18))

def list2(list3):
    list = ["kote" , "sandro" , "andria"]
    return list.upper
print(list2(list))