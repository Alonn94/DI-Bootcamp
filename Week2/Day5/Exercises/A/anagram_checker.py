class AnagramChecker:
    def __init__(self, word_list_file="./text.txt"):
        try:
            with open(word_list_file, mode='r') as my_file:
                words=my_file.readlines()
                self.word_list=[]
                for word in words:
                    self.word_list.append(word.strip().lower())
        except FileNotFoundError:
            print(f"Error: the file does not exist")

    def is_valid_word(self, user_input):
        user_input=user_input.lower()
        if user_input in self.word_list:
            return user_input

    def is_anagram(self, word1, word2):
        word1,word2 = sorted(word1), sorted(word2)
        if word1 == word2 and word1 != word2:
            return True
        return False

    def get_anagrams(self, word):
        anagrams=[]
        for i in self.word_list:
            if self.is_anagram(word,i):
                anagrams.append(i)
        return anagrams

