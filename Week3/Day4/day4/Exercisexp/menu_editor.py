from menu_manager import MenuManager
from menu_item import MenuItem


def show_user_menu():
        
        print(" View an Item (1)")
        print(" Add an Item (2)")
        print(" Delete an Item (3)")
        print(" Update an Item (4)")
        print(" Show the Menu (5)")
        print(" Exit (6)")

        choice = input("Your choice: ").strip()

        if choice == "1":
            item_name = input("Enter the item name to view: ").strip()
            item = MenuManager.get_by_name(item_name)
            if item:
                print(f"{item} found")

        elif choice == "2":
            save()

        elif choice == "3":
            delete()

        elif choice == "4":
            update()

        elif choice == "5":
            show_restaurant_menu()

        elif choice == "6":
            print("Exiting program. Final menu:")
            show_restaurant_menu()
            

def save():
    item_name = input("Enter the name of the new item: ").strip()
    item_price = int(input("Enter the price of the item: ").strip())
    new_item = MenuItem(item_name, item_price)
    new_item.save()
    print(f"{item_name} was added!")

def delete():
    item_name = input("Enter the name of the item to remove: ").strip()
    item = MenuManager.get_by_name(item_name)

    if item:
        item_to_delete = MenuItem(item_name, item["item_price"])
        item_to_delete.delete()
        print(f"{item_name} was deleted!")

def update():
    old_name = input("Enter the current item name: ").strip()
    item = MenuManager.get_by_name(old_name)

    if item:
        new_name = input("Enter the new name: ").strip()
        try:
            new_price = int(input("Enter the new price: ").strip())
            item_to_update = MenuItem(old_name, item["item_price"])
            item_to_update.update(new_name, new_price)
            print(f"{old_name} updated to {new_name} with price {new_price}.")
        except ValueError:
            print(" Invalid price. Please enter a valid number.")

def show_restaurant_menu():
    menu = MenuManager.all_items()
    if menu:
        print("Restaurant Menu")
        for item in menu:
            print(f"{item['item_id']}: {item['item_name']} - {item['item_price']}₪")
