
def menu ():
    print("1. new game")
    print("2. load game")
    print("3. exit")
    choosen = int(input("choose-option "))
    return choosen


def create_new_game():
    print("new game")
    new_item = input("enter name")
    print(new_item)
    




x = -1
while x != 3:
    x = menu ()
    if x == 1:
        create_new_game()
        print("python game")

    elif x == 2:
        print("load game")


    elif x < 0 or x > 3:
        print("error, type a different number")
