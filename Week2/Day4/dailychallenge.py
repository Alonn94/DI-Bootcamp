class Text():
    def __init__(self,text):
        self.text=text.lower()
        self.words=self.text.split()

    def word_freq(self,word):
        word=word.lower()
        count=self.words.count(word)
        return count if count >0 else f"word was not found in text"
    
    def most_common_word(self):
        word_counts:{}
        for word in set(self.words):
            word_counts[word]=self.words.count(word)

        most_common = max(word_counts, key = word_counts.get)
        return most_common
    
    def unique_words(self):
        return list(set.words)
    
    @classmethod
    def from_file(cls,my_file):
        with open ("./the_stranger.txt",mode="r") as my_file:
            cls.text=my_file.read()
            return cls(text)
    
text="A good book would sometimes cost as much as a good house."

obj_text= Text(text)  
print(obj_text.word_freq("good"))
text_obj2 = Text.from_file("the_stranger.txt")   #not able to import the downloaded file


print(text_obj2.word_freq(""))
