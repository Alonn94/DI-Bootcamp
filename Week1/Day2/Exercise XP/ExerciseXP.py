#-------Exercise 1 ---------

my_fav_numbers= {27,3,18,31} #- Sets: unordered, mutable, no duplicates


my_fav_numbers.add(2025)
my_fav_numbers.add(1994)

#print(my_fav_numbers)

my_fav_numbers.remove(1994)

#print(my_fav_numbers)

friend_fav_numbers= {21,10,31,2000}

our_fav_numbers= my_fav_numbers.union(friend_fav_numbers)
print(our_fav_numbers)

#-------Exercise 2 ---------

#- Tuples: ordered, imutable, + than 2 elements 

#NO we can not add any integer, because a tuple is unchaneable


#-------Exercise 3 ---------

basket=["Bananas","Apples","Oranges","Blueberries"]

basket.remove("Bananas")
print(basket)

basket.remove("Blueberries")

print (basket)

basket.append("Kiwi")
basket.append("Apples")

print(basket)

print(basket.count("Apples"))

basket.clear()
print(basket)


#-------Exercise 4 ---------

#Float - float is a number as well, tho showing decimals compared to an integer

#list=[1.5,2,2.5,3,3.5,4,4.5,5]

floats=1.5,2.5,3.5,4.5
integers=2,3,4,5

list=floats+integers

print(list)



#-------Exercise 5 ---------

#for i in range(1,21,1):
  #  print(i)


#for i in range(0,21,1):
   # if i%2==0:
   #     print(i)


#-------Exercise 6 ---------


# name=input("What is your name?")

# while name!="Alonn":
#         name=input("What is your name?")
#         if name=="Alonn":
#             break




#-------Exercise 7 ---------

# fav_fruits=input("What is your favourte fruit?:").split()


# fav_fruits_list=[fav_fruits]


# print(fav_fruits_list)

# new_fruit=input("Add new fruit:")
# if new_fruit in fav_fruits:
#       print("You chose one of your fruits")
# else: 
#       print("You chose new fruit")



#-------Exercise 8 ---------
# pizza_order=[]

# while True:
#       topping=input("Please add topping:")
#       pizza_order.append(topping)
#       print("We are adding this topping!")

#       if topping == "quit":
#             break
      
# pizza_order.pop()
# print(pizza_order)

# price=10+(len(pizza_order)*2.5)

# print(f"Total price is {price}")


#-------Exercise 9 ---------

# total_cost=0
# int_age_list= []


# family_age=input("What is your age").split()

# print(family_age)

# for i in family_age:
#     age_int=int(i)
#     int_age_list.append(age_int)

# for i in int_age_list:
#     if i < 3:
#         total_cost += 0
#     elif 3<i<12:
#         total_cost += 10
#     elif i>12:
#         total_cost += 15
    
# print(f"total cost it{total_cost}")

# teenager_age=[]
# teenager_list= ["hannah", "john", "laura"]

# for i in teenager_list:
#     x=input("What is your age")
#     teenager_age.append(x)

# print(teenager_age)

#-------Exercise 10 ---------


sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
i="Pastrami sandwich"
while i in sandwich_orders:
    sandwich_orders.remove(i)

print(sandwich_orders)

finished_sandwiches=[]

while sandwich_orders:
    new_sandwhich_order = sandwich_orders.pop(0)
    finished_sandwiches.append(new_sandwhich_order)

print(finished_sandwiches)
print(sandwich_orders)

for i in finished_sandwiches:
    print(f"I made your {i}")
