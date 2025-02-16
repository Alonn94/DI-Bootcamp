# class Cat():
#     def __init__(self, cat_name, cat_age):
#      self.name = cat_name
#      self.age = cat_age
        
# Naim =Cat("Naim",3)

# Shalom=Cat("Shalom",7)

# Garfield=Cat("Garfield",43)


# def oldest_cat(Naim,Shalom,Garfield):
#     if Naim.age > Shalom.age > Garfield.age:
#         return f"{Naim.name} is the oldest cat."
#     elif Shalom.age > Naim.age > Garfield.age:
#         return f"{Shalom.name} is the oldest cat."
#     elif Garfield.age > Shalom.age > Naim.age:
#         return f"{Garfield.name} is the oldest cat."

# print(oldest_cat(Naim,Shalom,Garfield))



# # # --------------- Exercise 2 ----------------

# class Dog():
   
#    def __init__(self,name,height):
#       print("A new dog has been initized")
#       self.name=name
#       self.height=height
   
#    def jump(self):
#      x=self.height*2
#      return f"{self.name} jumps {x} cm high."
   
#    def bark(self):
#      return f"{self.name} goes Woof!"
   
# davids_dog = Dog("Rex",50)

# print(davids_dog.name)
# print(davids_dog.height)

# print(davids_dog.bark())
# print(davids_dog.jump())

# sarahs_dog=Dog("Teacup",20)

# print(sarahs_dog.name)
# print(sarahs_dog.height)

# print(sarahs_dog.bark())
# print(sarahs_dog.jump())


# def compare_dog(davids_dog, sarahs_dog):
#    if davids_dog.height > sarahs_dog.height:
#       return f"{davids_dog.name} is bigger than {sarahs_dog.name}."
#    if davids_dog.height < sarahs_dog.height:
#       return f"{sarahs_dog.name} is bigger than {davids_dog.name}."
   
# print(compare_dog(davids_dog,sarahs_dog))

# # # --------------- Exercise 3 ----------------

# class Song():
#     def __init__(self,lyrics):
#         self.lyrics=lyrics

#     def sing_me_a_song(self):
#         for i in self.lyrics:
#             print(i)

# stairway = Song(["There is a lady who's sure","all that glitters is gold", "and she is buying a stairway to heaven"])

# stairway.sing_me_a_song()


# # --------------- Exercise 4 ----------------

class Zoo():
    def __init__(self,zoo_name):
        self.name=zoo_name
        self.animals=[]

    def add_animal(self,animal):
        if animal not in self.animals:
            self.animals.append(animal)
        else: print(f"{animal} already in list")

    def get_animals(self):
            return print(f"{self.animals} are in the {self.name} zoo.")

    def sell_animal(self,animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
        else: print(f"{animal_sold} not in the Zoo/List")
    
    def sort_animals(self):
        sorted_names=sorted(self.animals)
        grouped_names={}

        for i in sorted_names:
            first_letter = i[0]
            if first_letter not in grouped_names:
                grouped_names[first_letter]=[]
                grouped_names[first_letter].append(i)
        return grouped_names


ramat_gan_safari=Zoo("Safai")

print(ramat_gan_safari.add_animal("Giraffe"))
print(ramat_gan_safari.add_animal("Pinguin"))
print(ramat_gan_safari.add_animal("Giraffe"))
print(ramat_gan_safari.add_animal("Tweety"))
print(ramat_gan_safari.get_animals())
print(ramat_gan_safari.sell_animal("Tweety"))
print(ramat_gan_safari.sell_animal("Papagai"))
print(ramat_gan_safari.add_animal("Rinoceros"))
print(ramat_gan_safari.add_animal("Mermaid"))
print(ramat_gan_safari.get_animals())
print(ramat_gan_safari.sell_animal("Giraffe"))
print(ramat_gan_safari.get_animals())
print(ramat_gan_safari.sort_animals())









    