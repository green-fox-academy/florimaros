#from new_game import quit_menu
#Reenter name, Continue, Save, Quit
menu_items = [
  {'num': 1, 'name': 'save and quit', 'func': saveandquit},
  {'num': 2, 'name': 'quit without save', 'func': quitwithoutsave},
  {'num': 3, 'name': 'resume', 'func': resume}
]

def quit_menu ():
    global menu_items
    for item in menu_items:
        print(item.num + ' ' + item.name)


    choosen = int(input("choose-option "))
    return choosen


def quit_menu_choose():
    global menu_items
     x = -1
     while True:
         try:
             x = quit_menu()
             valid_numbers = []
             for item in menu_items:
                 valid_numbers.append(item.num)
             if x not in valid_numbers:
                 print("error, type a different number")
         except ValueError:
             print("error, type a different number")
         for item in menu_items:
             if x == item.num:
                 item.func()

def saveandquit():
    pass

def quitwithoutsave():
    exit()

def resume():
    pass
    #hol voltunk elotte
