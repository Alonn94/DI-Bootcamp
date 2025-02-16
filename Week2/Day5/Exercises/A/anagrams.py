from anagram_checker import AnagramChecker

def main():
    checker=AnagramChecker("text.txt")

    while True:
        user_input= input("Enter a word or quit (exit) ")

        if user_input =="exit":
            print("you are leaving")
            break

        if not user_input.isalpha() or " " in user_input:
            print("invalid!Only single word with letters")
            continue

        if checker.is_valid_word(user_input):
            anagrams=checker.get_anagrams(user_input)
            if anagrams:
                anagram_list = ', '.join(anagrams)
                print(f"your word is {user_input} and is a valid english word")
                print(f"the anagrams are {anagram_list}")
            else: 
                print("No anagrams were found")

        else: 
            print(f"your word is not a valid word in the dictionarry")

main()

#after i finally was able to open the file - it still seems to have a bug somewhere, 
# because each time i receive "no anagrams were found" for any word 
