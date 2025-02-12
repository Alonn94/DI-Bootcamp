import math

class Circle():
    def __init__(self,radius=None, diameter=None):
        if radius is not None:
            self.radius = radius
            self.diameter = radius * 2
        elif diameter is not None:
            self.diameter = diameter
            self.radius = diameter/2

    def area(self):
        return math.pi * (self.radius **2)
    
    def __str__ (self):
        return f"circle has {self.radius} and {self.diameter}"
    def __repr__(self):
        return self.__str__()
    
    def __add__(self,other):
        if isinstance(other,Circle):
            return Circle(radius = self.radius + other.radius)
    def __eq__(self,other):
        if isinstance(other,Circle):
            return self.diameter == other.diameter

    def __lt__(self,other):
        if isinstance(other,Circle):
            return self.diameter <= other.diameter
        return False
    def __gt__(self,other):
        if isinstance(other,Circle):
            return self.diameter > other.diameter
        return False
    
    def __ge__(self, other):
        if isinstance(other, Circle):
            return self.diameter >= other.diameter
        return False

c1 = Circle(radius=3)
c2 = Circle(diameter=10)
c3 = c1 + c2  
print(c3)  

print(c1 < c2)  
print(c1 == Circle(radius=3))  

circles = [c1, c2, c3]
circles.sort()  
print(circles) 
