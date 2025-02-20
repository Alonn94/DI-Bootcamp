import psycopg2

class MenuManager():

    def get_by_name(item_name):
        
        connection = psycopg2.connect(database='Restaurant_Menu', 
                            user='alonnbarthels',
                            password = '310103',
                            host = 'localhost',
                            port = '5432')     

        cursor = connection.cursor()
        cursor.execute(f"SELECT * FROM Menu_items WHERE item_name='{item_name}'")      
        item= cursor.fetchone()
        cursor.close()
        connection.close()
        if item:
            return {"item_id": item[0], "item_name":item[1], "item_price":item[2]}
        else: return None


    def all_items():

        connection = psycopg2.connect(database='Restaurant_Menu', 
                            user='alonnbarthels',
                            password = '310103',
                            host = 'localhost',
                            port = '5432')     
        
        cursor = connection.cursor()
        cursor.execute(f"SELECT * FROM Menu_items")      
        items=cursor.fetchall()
        cursor.close
        connection.close
        if items:
            return [[{"item_id": item[0], "item_name": item[1], "item_price": item[2]}] for item in items]
        

menu = MenuManager.all_items()
print(menu)