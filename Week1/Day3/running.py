#-------- Challenge 1 --------

word=input("Please type a word")

index= {}


for i, letter in enumerate(word):
    if letter is not index:
        index[letter]=[i]
    else:
         index[letter].append(i)

print(index)


#-------- Challenge 2 --------


items_purchase = { "Water": "1",
                    "Bread": "3",
                     "TV": "1000",
                    "Fertilizer": "20"
                }
our_list=[]
wallet = 300

for y in items_purchase.values():
        price=int(y)
        if sum(our_list)+ price < 300:
            our_list.append(price)

print(our_list)