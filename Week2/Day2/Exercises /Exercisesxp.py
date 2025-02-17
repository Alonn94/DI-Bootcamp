

#------------------ Exercise 1

# class Pets():
#     def __init__(self, animals):
#         self.animals = animals

#     def walk(self):
#         for animal in self.animals:
#             print(animal.walk())

# class Cat():
#     is_lazy = True

#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

#     def walk(self):
#         return f'{self.name} is just walking around'

# class Bengal(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'

# class Chartreux(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'
    
# class Siamese(Cat):
#     def sing(self,sounds):
#         return f'{sounds}'


# all_cats=[Bengal("Shalom", 2),Chartreux("Naim", 3),Siamese("Pany", 4)]

# sara_pets= Pets(all_cats)

# print(sara_pets.walk())


#------------------ Exercise 2


# class Dog():
#     def __init__(self,name,age,weight):
#         self.name=name
#         self.age=age
#         self.weight=weight
    
#     def bark(self):
#         return f'{self.name} is barking'
    
#     def run_speed(self):
#         return f'{self.weight/self.age*10}'
    
#     def fight(self,other_dog):
#         strength_self = self.run_speed() * self.weight
#         strength_other = other_dog.run_speed() * other_dog.weight
#         if strength_self>strength_other:
#             return f'{self.name} won and is stronger'
#         else: return f'{other_dog.name} won and is stronger'


# Juno=Dog("Juni",3,8)
# Clyde=Dog("Kleidi",15,30)
# Nina=Dog("Niiina",8,7)

# print(Juno.bark())
# print(Clyde.run_speed())
# print(Juno.fight(Nina))


#------------------ Exercise 3

# class Dog():
#     def __init__(self,name,age,weight):
#         self.name=name
#         self.age=age
#         self.weight=weight

# class Petdog(Dog):
#     def __init__(self,name,age,weight,trained=False):
#         super().__init__(name,age,weight)
#         self.trained=trained

#     def train(self):
#             self.trained = True
#             return f'is barking'
    
#     def play(self,*dog_name):
#             return f'{dog_name} all play together'
#     def do_a_trick(self):
#                 trick_1=(f'{self.name} does a barrel roll')
#                 trick_2=(f'{self.name} stands on his back legs')
#                 trick_3=(f'{self.name} shakes your hand')
#                 trick_4=(f'{self.name} plays dead')
#                 import random
#                 list=[trick_1,trick_2,trick_3,trick_4]
#                 rnd=random.randint(1,4)
#                 print(list[rnd])


# Nina=Petdog("Niiina",8,7)
# Juno=Petdog("Juni",3,8)
# print(Juno.train())
# print(Juno.play(Nina))
# print(Juno.do_a_trick())


#------------------ Exercise 4


class Family():
    def __init__(self,last_name):
            self.last_name=last_name
            self.members=[]

    def born(self,**kwargs):
          self.members.append(kwargs)
          return f'MAZAL TOV'
    
    def is_18(self,name):
                for member in self.members:
                      if member["name"] == name:
                            return member["age"] >= 18
                return None

    def family_presentation(self):
            return print(self.members.index)

sims_family=Family("Sims")

##how do i add a memeber into the family, through creating an instance with the class? (without using one of the given function)

sims_family.born(name="Aloni", age=30)
sims_family.family_presentation()


class TheIncredibles(Family):
    def __init__(self,last_name,members):
              super().__init__(last_name,members)
    def use_power(self,name):
           for member in self.members:
                  if member["name"]==name:
                         if member["age"] >= 18:
                                print(f"{member} has the power of {member["power"]}")
                         else:
                                raise Exception(f"{name} is child still")
    def family_presentation(self):
           return super().family_presentation()
    
## XXXXXXXXXXXXXXXXXXXXXXXXXX

