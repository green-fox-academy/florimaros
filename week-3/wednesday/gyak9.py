# 1. create mysuperstring class
#2. receive a string as an argument and store it
#3. implement reverse()
# !hello" => "olleh"

class Mysuperstring:
    def __init__(self, hello):
        self.hello = hello
szo = Mysuperstring("alma")
print (szo.hello)
