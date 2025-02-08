sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
i="Pastrami sandwich"
while i in sandwich_orders:
    sandwich_orders.remove(i)

print(sandwich_orders)

finished_sandwiches=[]

while sandwich_orders:
    new_sandwhich_order = sandwich_orders.pop(0)
    finished_sandwiches.append(new_sandwhich_order)

print(finished_sandwiches)
print(sandwich_orders)

for i in finished_sandwiches:
    print(f"I made your {i}")