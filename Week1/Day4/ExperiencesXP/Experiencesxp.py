#-------- Exercise 1 --------

def display_message():
    print("Today i learned more about functions!")

display_message()


#-------- Exercise 2 --------

def favorite_book(title):
    print(f"One of my favorite books is {title}.")

favorite_book("Harry potter (not true)")

#-------- Exercise 3 --------

def describe_city(city, country="Iceland"):
    print(f"{city} is in {country}.")

describe_city("Reykjavik")  
describe_city("Paris", "France")  
describe_city("Luxembourg City", "Luxembourg")  


#-------- Exercise 4 --------

import random

def compare_number(user_number):
    if 1 <= user_number <= 100:  
        random_number = random.randint(1, 100)  


        if user_number == random_number:
            print(f"Success! Both numbers are the same!")
            return random_number
        else:
            print(f"Fail! We do not have the same number {random_number}.")
            return random_number
    else:
        print("Please number must be between 1 and 100.")

random_nunmber = print(compare_number(12))


#-------- Exercise 5 --------

def make_shirt(size="Large", text="I love Python"):
    print(f"The size of the shirt is {size} and the text is '{text}'.")

make_shirt()  
make_shirt("medium")  
make_shirt("","Code is Life")  

make_shirt(size="extra large", text=" i love myself")


#-------- Exercise 6 --------


magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

def show_magicians(magician_names):
    for i in magician_names:
        print(i)

show_magicians(magician_names)

def make_great(magician_names):
    for i in range(len(magician_names)):
        magician_names[i] += "the great"


make_great(magician_names)
print(magician_names)


#-------- Exercise 7 --------

import random

dic_season ={("11", "12", "1", "2"): "winter",
             ("3", "4", "5"): "spring",
             ("6", "7", "8", "9", "10"): "summer"
}

month=(input("Type in numbermonth"))

for months, season_name in dic_season.items():
    if month in months:  # Check if the input month is inside the tuple
        season = season_name
        break

def get_random_temp(season):
            if season=="winter":
                r_temperature = random.randint(-10, 10)  
                return r_temperature
            elif season=="spring":
                 r_temperature=random.randint(11,17)

            elif season=="summer":
                r_temperature = random.randint(18, 40)  
                return r_temperature
            
x=(get_random_temp(season))

print(x)

def main(): 
            print(f"The temperature right now is {x} celsius")
            if x<0:
                print("COLD")
            elif 0<x<16:
                print ("CHILLY")
            elif 16<x<23:
              print ("PLEASANT")
            elif 24<x<32 :
             print("WARM")
            elif 32>x>40 :
                print("HOT")


main()

#Bonus: Give the temperature as a floating-point number instead of an integer.

#-------- Exercise 8 --------

data = [
    {"question": "What is Baby Yoda's real name?", "answer": "Grogu"},
    {"question": "Where did Obi-Wan take Luke after his birth?", "answer": "Tatooine"},
    {"question": "What year did the first Star Wars movie come out?", "answer": "1977"},
    {"question": "Who built C-3PO?", "answer": "Anakin Skywalker"},
    {"question": "Anakin Skywalker grew up to be who?", "answer": "Darth Vader"},
    {"question": "What species is Chewbacca?", "answer": "Wookiee"}
]

def start_quiz():
    correct = 0
    wrong = 0
    for i in data:
        user_answer = input(f"{i['question']}")

        if user_answer == i['answer']:
            print("Correct!")
            correct += 1
        else:
            print(f"wrong!")
            wrong += 1

    show_results(correct, wrong)

    
def show_results(correct, wrong):
    print(f"Correct answers: {correct}")
    print(f"Incorrect Answers: {wrong}")

start_quiz()



