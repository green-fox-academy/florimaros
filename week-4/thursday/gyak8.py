my_file = open("zen_of_python.txt", "r")

lines = my_file.readlines()

my_file.close()

# print(lines)

for line in lines:
    print(line.rstrip())

# print(line1.rstrip())
# print(line2.rstrip())
# print(line3.rstrip())
