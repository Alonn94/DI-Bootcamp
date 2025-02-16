class Farm:
    def __init__(self, name):
        self.name = name
        self.animals = {}  # Dictionary to store animal counts

    def add_animal(self, animal, quantity=1):
        if animal in self.animals:
            self.animals[animal] += quantity  # Correctly update the count
        else:
            self.animals[animal] = quantity  # Add new animal

    def show_inventory(self):
        inventory_info = "Farm Inventory:\n"
        for animal, count in self.animals.items():
            inventory_info += f"{animal}: {count}\n"
        return inventory_info.strip()  # Remove trailing newline for cleaner output

    def get_info(self):
        info = f"{self.name} Farm Inventory:\n"
        for animal, count in self.animals.items():
            info += f"{animal}: {count}\n"
        info += "E-I-E-I-O"
        return info

# Creating a farm
macdonald = Farm("McDonald")

# Adding animals
macdonald.add_animal('cow', 5)
macdonald.add_animal('cow', 5)  # Should increase cow count to 10
macdonald.add_animal('sheep')  # Default quantity is 1
macdonald.add_animal('sheep')  # Should increase sheep count to 2
macdonald.add_animal('sheep')  # Should increase sheep count to 3
macdonald.add_animal('goat', 12)

# Printing farm information
print(macdonald.get_info())  # Displays full farm info
print(macdonald.show_inventory())  # Shows inventory only