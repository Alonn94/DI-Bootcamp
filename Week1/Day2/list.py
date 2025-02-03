"""
-List

-Tuple
-Dictionary
-Set
"""

my_name="Alonn"
hello = "Hello class"
my_age=30

my_list= [my_name,hello,my_age]

numbers = [1,2,3,4,5]

print(numbers)

#lists are ordered data strucuture sequence = we can use index
#they are also mutuable = changeable
print(numbers[0])

numbers[3]=44

print(numbers)

#methods for list 

students = ["Harry","Ron","Hermione"]
students.append("Luna")

print(students)

students.insert(1,"Ginny")
print(students)

students.remove("Ron")
print(students)

students.append("Ginny")
print(students)

students.remove("Ginny")
print(students)

students.pop() #last one
print(students)

students.pop(-1)
print(students)



#Exercise
#Given the list
# list1=
#1 - print index 3
#2 - change 50 to 70
#3 delete number 20 (first apperance)
#4 add a nember to the end of the list

list=[5,10,15,20,25,50,20]
print(list[3])

list[5]=70
print(list)

list.remove(20)
print(list)

list.append(30)
print(list)

"""
Method to check after class 
copy()
extend()
clear()

"""

