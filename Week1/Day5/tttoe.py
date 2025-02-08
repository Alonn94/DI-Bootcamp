index_board = list(range(1, 10))
block_list = [" "] * 9
board_dictionary = dict(zip(index_board, block_list))

def display_board():
    n = 3
    display_list = [block_list[i:i + n] for i in range(0, 9, n)]  
    print("\n".join(str(e) for e in display_list))  

def check_winner():
    win_combinations = [
        (1, 2, 3), (4, 5, 6), (7, 8, 9),  
        (1, 4, 7), (2, 5, 8), (3, 6, 9),  
        (1, 5, 9), (3, 5, 7)              
    ]
    
    for combo  in win_combinations:
        a, b, c = combo
        if board_dictionary[a] == board_dictionary[b] == board_dictionary[c] and board_dictionary[a] != " ":
            return board_dictionary[a]  

    if " " not in board_dictionary.values():
        return "there is a tie" 

    return None  

def player_input(player):
    while True:

            mark = int(input(f"hey {player}, where do you want to mark?) "))
            if 1 <= mark <= 9 and board_dictionary[mark] == " ":
                board_dictionary[mark] = "X" if player == "A" else "O"
                global block_list
                block_list = list(board_dictionary.values())
                display_board()
                break  
            else:
                print("Spot taken, please re-enter.")
                break

def game_loop():

    display_board()
    current_player = "A"

    while True:
        player_input(current_player)
        winner = check_winner()

        if winner:
            if winner == "there is a tie":
                print("It's a tie!")
            else:
                print(f"Player {winner} wins!")
            break  

        current_player = "B" if current_player == "A" else "A"  

game_loop()