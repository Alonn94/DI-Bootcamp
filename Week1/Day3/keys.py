brand = {"Name":"Zara",
         "creation_date":1975,
         "creator_name": "Amancio Ortega Gaona",
         "type_of_clothes":["men","women","children","home"],
         "international_competitors":["Gap","H&M","Benetton"],
         "number_stores": 7000,
         "major_color":{"France":"Blue",
                        "Spain":"Red",
                        "US":["pink","green"]
         }
}

brand["number_stores"]=2      #3


print(f"People that are into Zara buy{brand['type_of_clothes']}")      #4
      

brand["country_creation"]="Spain"    #5

 
if "international_competitors" in brand:     #6

    brand["international_competitors"]="Desigual"
else: 
    print("They have not mentioned")

print(brand["international_competitors"])

del brand["creation_date"]   #7

print(brand)

#print(brand["international_competitors".(1)])  #8

print(brand["major_color"]["US"]) #9


print(len(brand))      #10

print(brand.keys())



