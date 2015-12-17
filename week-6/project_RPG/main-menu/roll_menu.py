from quit_menu import quit_menu_choose
from random import randint
from potion import potion_menu_choose


#from new_game import quit_menu
#Reenter name, Continue, Save, Quit
def continue_menu ():
    print("1. reroll")
    print("2. continue")
    print("3. save")
    print("4.quit")

    choosen = int(input("choose-option "))
    return choosen

def roll():
    dex = randint(1,6) + 6
    health = randint(2,6) + 12
    luck = randint(1,6) + 6
    print(dex, health, luck)
    continue_menu_choose()

def continue_menu_choose():
     x = -1
     while True:
         try:
             x = continue_menu()
             if x not in (1,2,3, 4):
                 print("error, type a different number")
         except ValueError:
             print("error, type a different number")
         if x == 1:
             roll()

         elif x == 2:
             potion_menu_choose()

         elif x == 3:
             save()

         elif x == 4:
            quit_menu_choose()

def save():
    pass
