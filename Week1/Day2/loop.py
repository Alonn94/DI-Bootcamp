#for loops

# for <variable> in <sequence>: intended block of code
#loo[ing on a sequence (list)

fruits= ["apple","banana","kiwi","Tuti"]

for each_fruit in fruits:
    print(each_fruit)

#looping on a range of numbers
#range (start,stop,step)
for i in range(6):
    print(i)

for i in range(1,6): #it does not include the stop number
    print(i)

for i in range(2,10,2):
    print(i)

#numerate()

fruits= ["apple","banana","kiwi","Tuti"]

for each_fruit in fruits:
    if each_fruit == fruits[3]:
        print("this is the last one")
    print(each_fruit)


for i, each_fruit in enumerate(fruits): #enumerate
    if each_fruit==fruits [3]:
        print("this is the last one")

    print(i,each_fruit)


#for i, each_fruit in enumerate(fruits):
  #  if each_fruit=="kiwi":
       # XXXXXX


#Exercise 

user_number=input("Please type in a number")
user_number_int=int(user_number)

#for i in range(1,11):

for user_number_int in range(1,100,user_number_int):
    print(user_number_int)


#While-loops, we not know how many interations we need to do

i = 0 

while i < len(fruits):
    print(fruits[1])
    i += 1


pizza_order= []
max_pizza =5

while len(pizza_order) < max_pizza:
    flavour = input("Which flavour?(if you finished type done)")

    if flavour=="done":
        print ("Successfully added")
        print (pizza_order)
        print ("We will deliver in 30 minutes")
        break

    pizza_order.append(flavour)















