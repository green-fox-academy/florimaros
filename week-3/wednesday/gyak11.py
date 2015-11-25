# 1. create mysuperstring class
#2. receive a string as an argument and store it
#3. implement reverse()
# !hello" => "olleh"

class Mysuperstring:
    def __init__(self, mystr):
        self.mystr = mystr

    def reverse(self):
        n = len(self.mystr)
        reversed = ""
        for i in range(n):
            self.mystr[i]

    def reverse(self):
        n = len(self.mystr)
        reversed = ""
        for i in range(n)
            reversed= self.mystr[i] + reversed
            print ("i={}".format(i))
            print(reversed)
            reversed = self.mystr[i] + reversed
        return  reversed
