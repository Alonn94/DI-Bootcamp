#Basic Value Types


print("Hello World") #string, sequences of characters


print(8 + 2) #numbers: 2 options - integers (whole numbers), float  (decimal numbers)

print(5.75 + 3.25)
print(type (5.75))

#discover the type of the following values:

print(type (5))
print(type (2.54))
print(type ("Good morning!"))
                                
print (5 < 7)
print (7<5)
print ("5" == 5)

#Value types: INtegers, strings, bull,floats
#string functions/methods 
#string = seq. of char., so i can use indexing


#len( ) = discover the lengt of the string
#name="Hermine"
#len("Hermine")
#name[3:len(name)]

#exercise: create a variable called my_name. assign it to your name as a string
#print the middle letter of your name
#then print just the second letter of your name
#thenn, print just the 3 last letters of your name


myname="alonn barthels"
print(myname[2])
print(myname[1])
print(myname[2:len(myname)])


print(myname.capitalize())

my_hp_name=myname.replace("barthels", "potter")
print(my_hp_name)

user_name="!Papa joe"
clean_uder_name_= user_name.strip("!")
print(clean_uder_name_)


price="$100"
clean_price=price.strip("$")
print(clean_price)

#numbers
print(4 + 3)
print(4 - 2)
print(4 * 2)
print(4**2)

print(4/2)
print(5%2)

name= "Alonn"
name += "n"
print(name)

#user_age = input("What is your age?") #the output is a string by default

#print(user_age)

#type casting (changing the type of a value)

#user_age_int = int(user_age) 
#print(user_age_int + 7)


print("hello People\n" * 5)
print("Hello" + " World")

firstname="Alonn"
lastname="Barthels"

print(firstname + lastname)
full_name= "Hello my name is " + firstname + " " +lastname

# f-string

print(f"Hello, my name is {firstname} {lastname}")







