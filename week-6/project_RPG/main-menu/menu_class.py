class Menu:
    def __init__(self, menu_items):
        self.menu_items = menu_items

    def show(self):
        for item in self.menu_items:
            print(str(item["num"]) + ' ' + item["name"])


        choosen = int(input("choose-option "))
        return choosen


    def choose(self):
         while True:
             try:
                 x = self.show()
                 valid_numbers = []
                 for item in self.menu_items:
                     valid_numbers.append(item["num"])
                 if x not in valid_numbers:
                     print("error, type a different number")
             except ValueError:
                 print("error, type a different number")
             for item in self.menu_items:
                 if x == item["num"]:
                     item["func"]()
