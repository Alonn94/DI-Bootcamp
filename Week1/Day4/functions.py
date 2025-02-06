#functions
#syntax


# def say_hello():
#     """prints a str "Hello there"""
#     print("Hello there!")

# say_hello()


# def say_hello(username, language):
#     if language == "HE":
#         print(f"shalom {username}")
#     elif language == "RU":
#         print(f"private, {username}")
#     elif language == "PT":
#           print(f"Oi, {username}")
#     else:
#         print(f"Hello, {username}!")


# say_hello("Harry","RU")


#Positional and keyword arguments

# def calculate_total(price, quantity):
#     print("total",price * quantity)

# calculate_total(5,12)

#Default value 


# def say_hello(username:str, language:str = "EN") -> None:
#     if language == "HE":
#         print(f"shalom {username}")
#     elif language == "RU":
#         print(f"private, {username}")
#     elif language == "PT":
#           print(f"Oi, {username}")
#     elif language == "EN":
#           print(f"Hello, {username}")
#     else:
#         print(f"I do not know your language!")


# say_hello("Alonn")


def calculate_total(price, quantity) -> int:
    return(price * quantity)


print(calculate_total(5,12)) 


def fav_colors():
    fav_colors = ["blue","red","yellow"]
    for color in fav_colors:
        return print("I love {color}")

    
