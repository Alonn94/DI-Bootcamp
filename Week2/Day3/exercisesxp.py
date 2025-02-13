
# ------------------ Exercise 1


# class Currency:
#     def __init__(self, currency, amount):
#         self.currency = currency
#         self.amount = amount
    
#     def __str__(self):
#         return f"{self.amount} {self.currency}"
    
#     def __repr__(self):
#         return self.__str__()

#     def __int__(self):
#         return self.amount
    
#     def __add__ (self,other):
#         if isinstance(other,(int,float)):
#             return Currency(self.currency,self.amount + other)
#         if isinstance(other,Currency):
#             if self.currency != other.currency:
#                 raise TypeError (f"different currencies")
#             return Currency(self.currency, self.amount + other.amount)
        
#     def __iadd__(self,other):
#         if isinstance(other,(int,float)):
#             self.amount += other.amount
#             if isinstance(other,Currency):
#                 if self.currency != other.currency:
#                     raise TypeError (f"different c.")
#                 self.amount += other.amount

# c1 = Currency('dollar', 5)
# c2 = Currency('dollar', 10)
# c3 = Currency('shekel', 1)
# c4 = Currency('shekel', 10)

# print(str(c1))
# print(int(c1))
# print(c1 + 5)
# print(c1 + c2)
# c1
# print(c1 + 5)
# print(c1 + c3)

##------------------ Exercise 2

# from func import add_numbers

# print(add_numbers(10,2))

##------------------ Exercise 3

# import random
# import string

# def generate_random_string(length=5):
#     letters = string.ascii_letters
#     return "".join(random.choice(letters) for i in range (length))

# print(generate_random_string())

##------------------ Exercise 4


# import datetime

# def display_current_date():
#     current_date = datetime.date.today ()
#     print (current_date)

##------------------ Exercise 5


import datetime

def time_until_ny():
    now = datetime.datetime.now()
    next_ny = datetime.datetime(now.year +1,1,1)
    time_left = next_ny - now

    days=time_left.days    #not sure how to call the units 



print(time_until_ny())

##------------------ Exercise 6


# import datetime

# def minutes_lived(birthdate_str):
#     birthdate=datetime.datetime.strptime(birthdate_str, "%Y-%m-%d")

#     now = datetime.datetime.now()

#     time_lived=now - birthdate

#     minutes = time_lived.total_seconds() / 60
#     print(f"You have lived {minutes} minutes.")

# minutes_lived("1994-03-27") 

##------------------ Exercise 7

# from faker import Faker

# fake = Faker()

# users=[]

# def add_fake_user():
#     user= {
#           "name": fake.name(),         
#         "address": fake.address(),   
#         "language_code": fake.language_code() 
#     }
#     users.append(user)

# for _ in range(5):
#     add_fake_user()
# for user in users:
    # print(user)