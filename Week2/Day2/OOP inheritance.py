#----------- Inheritance 
# class Animal():
#     def __init__(self, name):
#         self.name = name

# class Dog(Animal):
#     def bark(self):
#         print(f"{self.name} barked, WAF !")

# class Animal():
#     def __init__(self, type, number_legs, sound):
#         self.type = type
#         self.number_legs = number_legs
#         self.sound = sound

#     def make_sound(self):
#         print(f"I am an animal, and I love saying {self.sound}")

# class Dog(Animal):
#     pass

# rex= Dog("dog", 4, "wouaf")
# print('This animal is a:', rex.type)
# print('This dog has', rex.number_legs , ' legs')
# print('This dog makes the sound ', rex.sound)

# rex.make_sound()


# class Circle:
#     def __init__(self, diameter):
#       self.diameter = diameter

#     def grow(self, factor=2):
#         """grows the circle's diameter by factor"""
#         self.diameter = self.diameter * factor

# class NewCircle(Circle):
#     def grow(self, factor=2):
#         """grows the area by factor..."""
#         self.diameter = (self.diameter * factor * 2)

# nc = NewCircle(1)
# print(nc.diameter)

# nc.grow()

# print(nc.diameter)
# # >> What will be the output

class MyClass():
    def func(self):
        print("I'm being called from the Parent class")


class ChildClass(MyClass):
    def func(self):
        print("I'm actually being called from the Child class")
        print("But...")
        # Calling the `func()` method from the Parent class.
        super(ChildClass, self).func()

my_instance_2 = ChildClass()
my_instance_2.func()

#------------- Closed Door Example
class Door:
    def __init__(self, is_opened=False):
        """Initialize the door with a default closed state."""
        self.is_opened = is_opened

    def open_door(self):
        """Opens the door if it's not already open."""
        if not self.is_opened:
            self.is_opened = True
            print("The door is now open.")
        else:
            print("The door is already open.")

    def close_door(self):
        """Closes the door if it's not already closed."""
        if self.is_opened:
            self.is_opened = False
            print("The door is now closed.")
        else:
            print("The door is already closed.")

class BlockedDoor(Door):
    def open_door(self):
        """Overrides the parent method to prevent opening the door."""
        raise RuntimeError("Error: This door is blocked and cannot be opened.")

    def close_door(self):
        """Overrides the parent method to prevent closing the door."""
        raise RuntimeError("Error: This door is blocked and cannot be closed.")

# Example Usage
door1 = Door()
door1.open_door()  # Output: The door is now open.
door1.close_door()  # Output: The door is now closed.

# BlockedDoor Example
blocked_door = BlockedDoor()
try:
    blocked_door.open_door()
except RuntimeError as e:
    print(e)  # Output: Error: This door is blocked and cannot be opened.

try:
    blocked_door.close_door()
except RuntimeError as e:
    print(e)  # Output: Error: This door is blocked and cannot be closed.