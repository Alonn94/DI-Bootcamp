user_string=input("Please type in a string of at 10crs:")

if len(user_string) < 10:
    print("string not long enough")
elif len(user_string) > 10:
    print("string too long")
elif len(user_string)==10:
    print("perfect string")

print(user_string[0]) 
print(user_string [-1])

new_string=""
for char in user_string:
    new_string += char # adds each character to new_string
    print(new_string)







