import os
import random 

#os.chdir("/Users/alonnbarthels/Desktop/DI-Bootcamp/Week2/Day4/")
def get_words_from_file():
    with open("./wordlist.txt", mode= "r") as my_file:
            wordlist = my_file.read().split()
            return wordlist
    

def get_random_sentence(length):
    words= get_words_from_file()
    print(words)
    random_words = random.sample(words,length)
    sentence= " ".join(random_words).lower()
    return sentence

def main():
     print("this code gives a random sentence based on the amount of words you put")
     length=int(input("How many words you want to put?"))
     
     if 2 < length < 20:
       print(get_random_sentence(length))
     else: print("please enter number between 2-20")

main()


