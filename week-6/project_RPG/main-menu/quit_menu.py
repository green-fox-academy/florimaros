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
