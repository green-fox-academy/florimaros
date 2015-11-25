# 1. create mysuperstring class
#2. receive a string as an argument and store it
#3. implement reverse()
# !hello" => "olleh"
#implement count(char)
#implement snake_case()
#return a new string with spaces
class Mysuperstring:
    def __init__(self, mystr):
        self.mystr = mystr

    def reverse(self):
        reversed = ""
        for i in self.mystr:
            reversed = i + reversed
        return  reversed

    def count(self, kacsa):
        count=0
        for  i in self.mystr:
            if kacsa==i:
                count = count + 1
        return count
    def snake_case(self):
        snake = ""
        for i in self.mystr:
            if i == " ":
                snake = snake + "_"
            else:
                snake = snake + i
        return snake
