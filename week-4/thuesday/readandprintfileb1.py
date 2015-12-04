filename = "alma"
#write a function that reads a file and prints how many lines and characters in it
#

def print_file_lines_with_a(name):
    file_to_print = open("name")
    content = file_to_print.read()
    file_to_print.close()
    for line in content.split ("\n"):
        output += "a" + line + "\n"
        return(output)

prints(print_file_lines_with_a(filename))
