from new_game import choosen
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
    choosen()

x = -1
while x != 3:
    try:
        x = menu()
        if x not in (1,2,3):
            print("error, type a different number")
    except ValueError:
        print("error, type a different number")
    if x == 1:
        create_new_game()
        print("python game")
    elif x == 2:
        print("load game")
