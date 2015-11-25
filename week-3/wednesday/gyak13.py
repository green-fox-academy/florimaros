# 1. create mysuperstring class
#2. receive a string as an argument and store it
#3. implement reverse()
# !hello" => "olleh"
#implement count(char)
#implement snake_case()
#ujklasszt kell kesziteni, a szamok listajanak kiszamolni az atlagat es visszaadni, uj osztaly Mysupermasterclass
#return a new string with spaces

class Mysupermasterclass:
    def __init__(self, number):
        self.number = number

    def average(self):
        summa = 0
        piece = len(self.number)
        for i in self.number:
            summa = summa + i
        average = summa / piece
        return average
