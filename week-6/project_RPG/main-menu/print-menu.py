
def menu ():
    print("1. user")
    print("2. new game")
    print("3. load game")
    print("4. exit")
    choosen = int(input("choose-option "))
    return choosen
def add_new_item(input_item):
    new_item = input("Add a new user: ")
    text = open(input_item, "a")
    text.write(new_item + "\n")
    text.close()

def list_items(input_item):
    text = open(input_item, "r")
    y = text.readlines()
    text.close()
    i = 1
    for line in y:
        print(i, line)
        i += 1

def list_delete(input_item):
    text = open(input_item, "r")
    z = text.readlines()
    text.close()
    i = 1
    for line in z:
        print(i, line)
        i += 1
    a = int(input("choose deleting part"))
    del z[a-1]
    text = open(input_item, "w")
    for line in z:
        text.write(line)
    text.close()

x = -1
while x != 4:
    x = menu ()
    if x == 1:
        add_new_item("print-menu-list.txt")
        print("python game")

    elif x == 2:
        list_items("print-menu-list.txt")
    elif x == 3:
        list_delete("print-menu-list.txt")
