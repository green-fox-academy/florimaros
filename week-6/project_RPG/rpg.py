
dex = 0
health = 0
luck = 0

def new_menu ():
    print("1. reenter_name")
    print("2. continue")
    print("3. save")
    print("4.quit")

    choosen = int(input("choose-option "))
    return choosen

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




def create_new_player():
    print("new player")
    new_item = input("reenter name")
    print(new_item)



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

#from new_game import quit_menu
#Reenter name, Continue, Save, Quit
def quit_menu ():
    print("1. save and quit")
    print("2. quit without save")
    print("3. resume")


    choosen = int(input("choose-option "))
    return choosen


def quit_menu_choose():
     x = -1
     while True:
         try:
             x = quit_menu()
             if x not in (1,2,3):
                 print("error, type a different number")
         except ValueError:
             print("error, type a different number")
         if x == 1:
             saveandquit()

         elif x == 2:
             quitwithoutsave()

         elif x == 3:
            resume()

def saveandquit():
    pass

def quitwithoutsave():
    exit()

def resume():
    pass
    #hol voltunk elotte


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
    global dex, health, luck
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

#from new_game import quit_menu
#Reenter name, Continue, Save, Quit

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


menu()
