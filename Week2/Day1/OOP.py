# # --------------- OOP ----------------

class Dog():
    def __init__(self,name,color,breed,floppy_ears):
        print("A new dog has been initized")
        self.name=name
        self.color=color
        self.breed=breed
        self.floppy_ears=floppy_ears

    def __str__(self):
        return f"{self.name} is a {self.breed},{self.color},{self.floppy_ears}"
    
    def bark(self):
        return f"{self.name} goes WOOF!!!"
    
    def walk(self, number_of_meters):
        print(f"{self.name} walked {number_of_meters} meters.")

peanut=Dog("peanut","brown","mutt",True)

print(peanut.bark())

# peanut=Dog("peanut","brown","mutt",True)


# #oldfashioned way to set attribue:

# peanut.color = "grey"
# dingo=Dog("white", "cnaani",False)



class Book():
    def __init__(self,title,author,year):
        self.title = title
        self.author = author
        self.year = year
        self.checked_out= False

    def check_out(self):
        self.checked_out= True
    
    def check_in(self):
        self.check_out = False
    

moby_dick = Book("Moby Dick","Herman Melville", 1851)
moby_dick.check_out()

moby_dick.checked_out()



