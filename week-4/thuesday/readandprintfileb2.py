filename = "alma"
#write a function that reads a file and prints how many lines and characters in it
#

def print_file_lines_with_a2(name):
    file_to_print = open("name")
    lines = file_to_print.readlines()
    file_to_print.close()
    output = []
    for line in lines:
        output.append("a" + line.rstrip())

print_file_lines_with_a2(filename))
