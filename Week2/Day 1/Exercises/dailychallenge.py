class Farm():
    def __init__(self,name):
        self.name=name
        self.animals={}

    def add_animal(self,animal, quantity=1):
            if animal in self.animals:
                self.animals[animal] += quantity
            else: self.animals[animal] = quantity
            

    def show_inventar(self):
      for animal,count in self.animals.items():
              print(f"{animal}{count}")

    def get_info(self):
         print("E-I-E-I-O")


macdonald = Farm("McDonald")
macdonald.add_animal('cow',5)
macdonald.add_animal('cow',5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
print(macdonald.get_info())
print(macdonald.show_inventar())
