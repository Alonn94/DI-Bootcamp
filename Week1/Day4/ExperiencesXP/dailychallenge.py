
matrix_string='''7ii
Tsx
h%?
i #
sM 
$a 
#t%
^r!
'''
#No idea where and how to start, wanted to make i get the exercise and the material right from yesterday
#step: create a 2d list -
#decryp the matrix : for loop check chr 
#replace every group of symbols between two alpas ch and replace by space
#output a string with the message

# list: [["7ii"],["Tsx"],["h%?"],["i #"],["sM"],["$a"],["#t%"],["^r!"]]

matrix= []

for row in matrix_string.split:
    row= list(matrix_string[i:i+3])
    print(rows)

for now in rows:

    matrix.append(list(row))
print(matrix)
output_string=''

for sublist in matrix:
    print(sublist)
    for i in sublist:
        print(char)
        if char.isalpha():
            output_string+= char
        else: 
            if len(output_string) != 0 and output_string[-1] !=' '