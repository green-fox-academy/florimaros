#Reenter name, Continue, Save, Quit
def new_menu ():
    print("1. reenter_name")
    print("2. Continue")
    print("3. save")
    print("4.Quit")

    choosen = int(input("choose-option "))
    return choosen

def create_new_game():
    print("new game")
    new_item = input("enter name")
    print(new_item)

def choosen(x):
     x = -1
     while x != 4:
         try:
             x = new_menu()
             if x not in (1,2,3,4):
                 print("error, type a different number")
         except ValueError:
             print("error, type a different number")
         if x == 1:
             reenter_name()

             print("python game")

         elif x == 2:
             print("load game")
def reenter_name():
    new_item = input("enter name")
    print(new_item)
