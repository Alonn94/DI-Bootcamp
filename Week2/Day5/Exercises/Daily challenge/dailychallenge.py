#------ Exercise 1

#1) a class is a blueprint for when creating objects, it defines the attributes and methods of the objective that is created by that class.
#2) An instance is a specific object that was created from that class
#3) Encapsulation is used when there are internal details of an objectivs that should remain hidden
#the private attributes/methods can keep the data hidden with _ or __, tho they can be called by getters and setter methods
#4) abstraction is used when trying to hide complex implementation details while only showing the necessary functionality
#5) inheritance is what allows a new class to receive the same attributes and methods from another class
#6) multiple inheritance occurs when a class inherits from multiple classes
#7) polymorphism is being used when different classes want to be used interchangeably 
#8) MRO determines the order in which the program looks for methods in the file. 


#------ Exercise 2


import random

class Card():
    def __init__(self,suit,value):
        self.suit=suit
        self.value=value


class Deck():
    def __init__ (self):
        suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
        values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

        
        self.cards = []
        for suit in suits:
            for value in values:
                self.cards.append(Card(suit,value))


    def shuffle(self):
        if len(self.cards) != 52:
            print("the deck is incomplete")
            return
        else: random.shuffle(self.cards)
        
    def deal(self):
        if not self.cards:
            print("no more cards left to take")
        
        dealt_card = self.cards.pop(0)
        return dealt_card
    
    def cards_left(self):
        #not sure how to remove that one specifc card from the deck


#Part 2: Create a deck of cards class.
# The Deck of cards class should NOT inherit from a Card class.

# The requirements are as follows:

# The Card class should have a suit (Hearts, Diamonds, Clubs, Spades) and a value (A,2,3,4,5,6,7,8,9,10,J,Q,K)
# The Deck class :
# should have a shuffle method which makes sure the deck of cards has all 52 cards and then rearranges them randomly.
# should have a method called deal which deals a single card from the deck. After a card is dealt, it should be removed from the deck


