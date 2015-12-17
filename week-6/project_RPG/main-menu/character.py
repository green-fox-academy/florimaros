from random import randint
class Character():
    def __init__ (self,name="none", dex="none", luck="none", health="none", potion = "none"):
        self.name = name
        self.dex = dex
        self.luck = luck
        self.health = health
        self.potion = potion

    def save(self):
        with open("save.txt","w") as f:
            f.write(self.name+"\n")
            f.write(str(self.dex)+"\n")
            f.write(str(self.luck)+"\n")
            f.write(str(self.health)+"\n")
            f.write(str(self.potion))


    def roll(self):
        self.dex = randint(1,6) + 6
        self.health = randint(2,6) + 12
        self.luck = randint(1,6) + 6
