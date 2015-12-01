my_file = open("zen_of_python.txt", "r")

for line in my_file:
    print(line.rstrip())

my_file.close()

# print(line1.rstrip())
# print(line2.rstrip())
# print(line3.rstrip())
