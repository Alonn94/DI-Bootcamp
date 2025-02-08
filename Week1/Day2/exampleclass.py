# student_info = {
#     'name': 'John',
#     'age': 25,
#     'hobbies': ['reading', 'gaming', 'cycling'],
#     'city': 'New York'
# }
# student_info["age"] = 30
# student_info["occupation"] = "Engineer"

# del student_info["city"]


# if "email" in student_info:
#     print(student_info['email'])
# else:
#     student_info["email"]="name@gmail"


# for i in student_info['hobbies']:
#     print(i)

# # Tasks:
# 1 - Change the value of 'age' from 25 to 30.
# 2 - Add a new entry with the key 'occupation' and the value 'Engineer'.
# 3 - Remove the entry with the key 'city'.
# 4 - check if the key 'email' is on the dictionary, if not, add it with value 'name@gmail.com'
# 5 -Loop through the values in the 'hobbies' list and print each hobby on a new line.


#Build-in Methods



sample_dict = {
  "name": "Kelly",
  "age":25,
  "salary": 8000,
  "city": "New york"

}
print("ALonn")

print(sample_dict)


keys_to_remove = ["name", "salary"]

for i in keys_to_remove:
    print(i)
    if i in sample_dict:
        del sample_dict[i]


print(sample_dict)









# car= {
#     "brand":"Ford",
#     "model":"Mustang",
#     "year": 1964
#     }


# car.update({"model":"Mazda"})





