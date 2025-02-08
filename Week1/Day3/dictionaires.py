#Dictionairies: Data structure- more complex bc it holds it holds key:value pair
#ordered and can be changed 

#how we access the information (position,data)

user_info = {"Name":"Alonn",
             "last_name": "Barthels",
             "age": 30,
             "address":"tel aviv",
             "family":[("Chani","sister",22), ("Patricia","Mother",66)],
             "hobbies":{"Swimming","Tennis"}} #initialise empty, or with strings or numbers

print(user_info["Name"])

user_info_2={"Name":"Alonn",
             "last_name": "Barthels",
             "age": 30,
             "address":"tel aviv",
             "family":[("Chani","sister",22), ("Patricia","Mother",66)],
             "hobbies":{"Swimming","Tennis"}}



#------Exercise-----

sample_dict = { 
   "class":{ 
      "student":{ 
         "name":"Mike",
         "marks":{ 
            "physics":70,
            "history":80
         }
      }
   }
}

print(sample_dict["class"]["student"]["marks"]["history"])



#how we can modify an entry

user_info = {"Name":"Alonn",
             "last_name": "Barthels",
             "age": 30,
             "address":"tel aviv",
             "family":[("Chani","sister",22), ("Patricia","Mother",66)],
             "hobbies":{"Swimming","Tennis"}} #initialise empty, or with strings or numbers

user_info["age"] = 31

print(user_info)

#Adding a new entry 

user_info["school"] ="Athenee"
print(user_info)

#Deleting an entry

del user_info["school"]

print("hobbies" in user_info)
print("bday" in user_info)

if "age" in user_info:
    print(user_info["age"])
else:
    print("this key does not exist")
for relative in user_info ["family"]:
    print(relative)


#Build-in Methods

print(user_info.keys())
print(user_info.values())


for i in user_info.values():
    print(i)


print(user_info.items())

print(sample_dict)

car= {
    "brand":"Ford",
    "model":"Mustang",
    "year": 1964
    }


car.update({"model":"Mazda"})

#merging 2 lists, of keys and values 
#ZIP = very useful

names= ["Alonn","Esmeralda","Yuppy","Maria"]
power= [27,3,5,10]

Glow = dict(zip(names,power))

print(Glow)

# for i in names:
#     if i =="Yuppy":
#         continue
#     print(names)


