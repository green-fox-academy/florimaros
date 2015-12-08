class Sword:
    def __init__(self):
        self.demage = 10

    def strike(self, opponent):
        opponent.hp -= 10

    def demage(self):
        return 10    

class Enhanced:
    def __init__(self, weapon):
        self.weapon = weapon

    def strike(self, opponent):
        self.weapon.strike(opponent)
        opponent.hp -= 5
class Magical:
    def __init__(self, weapon):
        self.weapon = weapon

    def strike(self, oppoment):
        self.weapon.strike(opponent)

class Warrior:
    def __init__(self):
        self.hp = 100

weapon = Enhanced(Sword())
warrior = Warrior()

print(warrior.hp)
weapon.strike(warrior)
print(warrior.hp)
