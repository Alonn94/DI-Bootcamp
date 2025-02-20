import psycopg2

class MenuItem():
    def __init__(self,item_name,item_price):
            self.item_name= item_name
            self.item_price = item_price

# SAVE FUNCTION

    def save(self):
     
        connection = psycopg2.connect(database='Restaurant_Menu', 
                            user='alonnbarthels',
                            password = '310103',
                            host = 'localhost',
                            port = '5432')

        cursor = connection.cursor()
        cursor.execute(f'''INSERT INTO Menu_items (item_name, item_price) 
                       Values 
                       ('{self.item_name}', '{self.item_price}')''')    

        connection.commit()
        cursor.close()
        connection.close()
        print('the fooditem WAS INSERTED SUCESSFULLY')


# DELETE FUNCTION

    def delete(self):
     
        connection = psycopg2.connect(database='Restaurant_Menu', 
                              user='alonnbarthels',
                              password = '310103',
                              host = 'localhost',
                              port = '5432')

        cursor = connection.cursor()
        cursor.execute(f"DELETE FROM menu_items WHERE menu_items.item_name = '{self.item_name}'")

        connection.commit()
        cursor.close()
        connection.close()
        print('the fooditem WAS DELETED SUCESSFULLY')

# UPDATE FUNCTION

    def update(self,new_name,new_price):
     
        connection = psycopg2.connect(database='Restaurant_Menu', 
                              user='alonnbarthels',
                              password = '310103',
                              host = 'localhost',
                              port = '5432')

        cursor = connection.cursor()
        cursor.execute(f"UPDATE Menu_items SET item_name = '{new_name}', item_price = '{new_price}' WHERE item_name = '{self.item_name}'")

        connection.commit()
        cursor.close()
        connection.close()

        print('the fooditem WAS UPDATED SUCESSFULLY')



item=MenuItem("Burger",5)

# item.save()

item.update("Hotdog",9)
