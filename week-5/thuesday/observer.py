class Warrior:
    def __init__(self):
        self.companions = []
        self.hp = 100
        self.cursed = False

    def join(self, companion):
        self.companions.append(companion)
    def strike(self, opponent):
        opponent.inflict_demage(10)
    def curse(self, opponent):
        opponent.set_cursed(True)
    def set_cursed(self, dog):
        self.cursed = dog
        for companion in self.companions:
            companion.notify("cursed", self)

    def inflict_demage(self, demage):
        self.hp -= demage
        for companion in self.companions:
            companion.notify("demage", self)

    def heal(self, hp):
        self.hp += hp

class Healer:
    def notify(self, type, warrior):
        if type == "demage":
            warrior.heal(10)
        elif type == "cursed":
            warrior.cursed = False


i = Warrior()
a = Healer()
z = Warrior()

i.join(a)
z.strike(i)

print(i.hp)

z.curse(i)
print(i.cursed)
