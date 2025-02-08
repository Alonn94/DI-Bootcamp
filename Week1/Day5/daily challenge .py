# ----------- Challenge 1 : Sorting -----------


# def words():
#     user_input=input("please enter sentence").split(",")
#     s_user=sorted(user_input)
#     return s_user

# sorted_list=words()
# print(sorted_list)



# user_list=[input("Enter sentence").split(",")]
# #newlist =[expression FOR value in iterable if condition]
# #sorted_list= [sorted(x) for x in user_list]

# sorted_list= [sorted(x) for x in [input("Enter sentence").split(",")]]

# print(sorted_list)


# ----------- Challenge 2 : Longest word -----------

def longest_word():
    longest_word=max(input("Enter sentence").split(" "),key=len)
    print(longest_word)

longest_word()


