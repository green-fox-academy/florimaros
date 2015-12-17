#from new_game import quit_menu
#Reenter name, Continue, Save, Quit

from character import Character
from menu_class import Menu



def saveandquit():
    player.save()
    exit()

def todo():
    pass


def create_new_game():
    print("new player")
    player.name = input("enter name ")
    print(player.name)
    new_game_menu.choose()

def quit_menu_choose():
    quit_menu.choose()

def save():
    player.save()

def go_to_roll():
    player.roll()
    print(player.dex, player.health, player.luck)
    roll_menu.choose()

def reenter():
    player.name = input ("reenter name ")
    print(player.name)

def reroll():
    player.roll()
    print(player.dex, player.health, player.luck )

def go_to_potion():
    potion_menu.choose()

def potionofhealth():
    player.potion = "healthofpotion"
    reselect_menu.choose()

def potionofluck():
    player.potion = "potionofluck"
    reselect_menu.choose()

def potionofdexterity():
    player.potion = "potionofdexterity"
    reselect_menu.choose()

menu_items = [
  {'num': 1, 'name': 'save and quit', 'func': saveandquit},
  {'num': 2, 'name': 'quit without save', 'func': exit},
  {'num': 3, 'name': 'resume', 'func': todo}
]

game_items = [
  {'num': 1, 'name': 'new game', 'func': create_new_game},
  {'num': 2, 'name': 'load game', 'func': todo},
  {'num': 3, 'name': 'exit', 'func': exit}
]

new_game_items = [
  {'num': 1, 'name': 'reenter name', 'func': reenter},
  {'num': 2, 'name': 'continue', 'func': go_to_roll},
  {'num': 3, 'name': 'save', 'func': save},
  {'num': 4, 'name': 'quit', 'func': quit_menu_choose}
]

roll_items = [
  {'num': 1, 'name': 'reroll', 'func': reroll},
  {'num': 2, 'name': 'continue', 'func': go_to_potion},
  {'num': 3, 'name': 'save', 'func': save},
  {'num': 4, 'name': 'quit', 'func': quit_menu_choose}
]

potion_items = [
  {'num': 1, 'name': 'potionofhealth', 'func': potionofhealth},
  {'num': 2, 'name': 'potionofdexterity', 'func': potionofdexterity},
  {'num': 3, 'name': 'potionofluck', 'func': potionofluck}
]

reselect_items = [
  {'num': 1, 'name': 'reselect the potion', 'func': go_to_potion},
  {'num': 2, 'name': 'continue', 'func': todo},
  {'num': 3, 'name': 'quit', 'func': quit_menu_choose}
]





quit_menu = Menu(menu_items)
game_menu = Menu(game_items)
new_game_menu = Menu(new_game_items)
roll_menu = Menu(roll_items)
potion_menu = Menu(potion_items)
player = Character()
reselect_menu = Menu(reselect_items)
game_menu.choose()
