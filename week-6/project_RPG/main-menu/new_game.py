from quit_menu import quit_menu_choose
from roll_menu import roll
#Reenter name, Continue, Save, Quit
def new_menu ():
    print("1. reenter_name")
    print("2. continue")
    print("3. save")
    print("4.quit")

    choosen = int(input("choose-option "))
    return choosen

def create_new_player():
    print("new player")
    new_item = input("reenter name")
    print(new_item)

def choosen():
     x = -1
     while True:
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
             roll()

         elif x == 4:
             print("quit")
             quit_menu_choose()

def reenter_name():
    new_item = input("reenter name")
    print(new_item)

def continu():
    pass
    #new_item = input("reenter name")
    #print(new_item)

def save():
    pass
    #new_item = input("reenter name")
    #print(new_item)

def quit():
    new_item = input("")
    print(new_item)
