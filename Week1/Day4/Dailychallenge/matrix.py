# Define the matrix as a 2D list
matrix = [
    ['7', 'i', 'i'],
    ['T', 's', 'x'],
    ['h', '%', '?'],
    ['i', ' ', '#'],
    ['s', 'M', ' '],
    ['$', 'a', ' '],
    ['#', 't', '%'],
    ['^', 'r', '!']
]

num_columns = len(matrix[0])

decoded_list = []

for col in range(num_columns):
    for row in range(len(matrix)):
        char = matrix[row][col]
        if char.isalpha():  
            decoded_list.append(char)
        else:
            decoded_list.append(" ") 

decoded_message = "".join(decoded_list)
decoded_message = " ".join(decoded_message.split())  

print(decoded_message)