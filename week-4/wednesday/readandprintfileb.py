filename = "alma"
#write a function that reads a file and prints how many lines and characters in it
#

def wc(filename):
    input_file = open(filename)
    file_content = input_file.read()
    line_count = file_content.split("\n")
    input_file.close()
    return[line_count, len(file_content)]
    
print(wc(filename)) # [3, 23G]
