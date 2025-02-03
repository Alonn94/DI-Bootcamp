
#-------Challenge 1-------

# multi_list=[]

# number= int(input("Enter number"))
# length= int(input("Enter length"))

# for i in range(1,length+1):
#     multi=i * number
#     multi_list.append(multi)
    

# print(multi_list)


#-------Challenge 2-------


word=input("Enter a worrrrrrddd:")
corrected_word=[]


list=list(word)
set=set(list)

corrected_word=[]


while set:
    for i in set:
        if i in word:
            corrected_word.append(i)

print(corrected_word)








