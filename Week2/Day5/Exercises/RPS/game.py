import random

class Game():
    def __init__(self):
        self.choice=["rock","paper","scissors"]

    def get_user_item(self):
        while True:
            user_item = input("What do you chose?").lower()
            if user_item in self.choice:
             return user_item
            else: print("please select right option")

    
    def get_computer_item(self):
       computer_item=random.choice(self.choice)
       return computer_item 
    

    def get_game_result(self, user_item,computer_item):
       
       if user_item==computer_item:
        return "tie"
       elif  user_item=="scissors" and computer_item=="paper" or user_item=="paper" and computer_item=="rock" or user_item=="rock" and computer_item=="scissors":
          return "win"
       else: 
        return"loss" 


    def play(self):
       user_item = self.get_user_item()
       computer_item=self.get_computer_item()
       turn_result= self.get_game_result(user_item,computer_item)
       print(f"You selected {user_item}, and computer selected {computer_item}, your result: {turn_result}")
       return turn_result
    



