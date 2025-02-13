# import random

# class Game:
#     def __init__(self):
#         self.choices = ["rock", "paper", "scissors"]

#     def get_user_item(self):
#         """Ask the user to select rock, paper, or scissors. Validate input."""
#         while True:
#             user_choice = input("Choose rock, paper, or scissors: ").strip().lower()
#             if user_choice in self.choices:
#                 return user_choice
#             print("Invalid choice. Please choose rock, paper, or scissors.")

#     def get_computer_item(self):
#         """Randomly select rock, paper, or scissors for the computer."""
#         return random.choice(self.choices)

#     def get_game_result(self, user_item, computer_item):
#         """Determine the result of the game."""
#         if user_item == computer_item:
#             return "draw"
#         elif (
#             (user_item == "rock" and computer_item == "scissors") or
#             (user_item == "paper" and computer_item == "rock") or
#             (user_item == "scissors" and computer_item == "paper")
#         ):
#             return "win"
#         else:
#             return "loss"

#     def play(self):
#         """Play one round of rock-paper-scissors."""
#         user_item = self.get_user_item()
#         computer_item = self.get_computer_item()
#         result = self.get_game_result(user_item, computer_item)
        
#         print(f"You selected {user_item}. The computer selected {computer_item}. You {result}!")
#         return result


# from game import Game

# def get_user_menu_choice():
#     """Displays menu and gets user choice."""
#     print("\nMenu:")
#     print("1 - Play a new game")
#     print("2 - Show scores")
#     print("X - Quit")
    
#     choice = input("Enter your choice: ").strip().lower()
#     if choice in ['1', '2', 'x']:  # Valid choices
#         return choice
#     else:
#         print("Invalid choice, please enter 1, 2, or X.")
#         return get_user_menu_choice()

# def print_results(results):
#     """Prints the game summary."""
#     print("\nGame Summary:")
#     print(f"Wins: {results.get('win', 0)}")
#     print(f"Losses: {results.get('loss', 0)}")
#     print(f"Draws: {results.get('draw', 0)}")
#     print("Thank you for playing!")

# def main():
#     """Main game loop."""
#     results = {"win": 0, "loss": 0, "draw": 0}
    
#     while True:
#         choice = get_user_menu_choice()
        
#         if choice == '1':
#             game = Game()
#             result = game.play()
#             results[result] += 1  # Update results dictionary
        
#         elif choice == '2':
#             print_results(results)
        
#         elif choice == 'x':
#             print_results(results)
#             break

# if __name__ == "__main__":
#     main()
