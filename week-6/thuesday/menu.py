
class Menu:
    def __init__ (self, items):
        self.items = items

    def choose(self, nummber):
        for item in self.items:
            if item.numm == number:
                item.action()

main_menu = Menu([
    MenuItem(1. "Start Game", start_game),
    MenuItem(2, "Load Game", load_game)
])
