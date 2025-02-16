from game import Game

def get_user_menu_choice():
    print("play a new game = 1")
    print("show_results = 2")
    print("Quit = 0")
    user_choice=input("please chose (1 ; 2 ; 0)")
    if user_choice in ["1","2","0"]:
        return user_choice
    else: print("please select valid option")

def print_results(results):
    print("These are the results:")
    print(f"Wins: {results.get('win', 0)}")
    print(f"Losses: {results.get('loss', 0)}")
    print(f"Ties: {results.get('tie', 0)}")


def main():
    results= {"win":0, "loss":0, "tie":0}

    while True:

        user_choice=get_user_menu_choice()
    
        if user_choice=="1":
            game=Game()
            turn_result=game.play()
            results[turn_result] +=1

        elif user_choice=="2":
            print_results(results)
        elif user_choice =="0":
            print_results(results)
            break

main()





