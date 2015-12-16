#from new_game import quit_menu
#Reenter name, Continue, Save, Quit
from quit_menu import quit_menu_choose
def potion_menu ():
    print("1. potionofhealth")
    print("2. potionofdexterity")
    print("3. potionofluck")

    choosen = int(input("choose-option "))
    return choosen

def potion_menu_rec():
    print("1. reselect the potion")
    print("2. continue")
    print("3. quit")

    choosen = int(input("choose-option "))
    return choosen



def potion_menu_choose():
     x = -1
     while True:
         try:
             x = potion_menu()
             if x not in (1,2,3):
                 print("error, type a different number")
         except ValueError:
             print("error, type a different number")
         if x == 1:
             potionofhealth()

         elif x == 2:
             potionofdexterity()

         elif x == 3:
             potionofluck()

def potion_menu_select():
     x = -1
     while True:
         try:
             x = potion_menu_rechoice()
             if x not in (1,2,3):
                 print("error, type a different number")
         except ValueError:
             print("error, type a different number")
         if x == 1:
             reselect()

         elif x == 2:
             pass

         elif x == 3:
             quit_menu_choose()

def potionofhealth():
    potion_menu_rec()

def potionofdexterity():
    potion_menu_rec()

def potionofluck():
    potion_menu_rec()
