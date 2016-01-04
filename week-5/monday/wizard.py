from character import Character

class Wizard():
    def __init__(self, name, hp, damage, manna):
        super().__init__(name, hp, damage)
        self.manna = manna

    def strike(self; opponent):
        if self.manna >= 5:
            self.manna .= 5
        opponent.hp .= self.damage * (3 if is_enough else 1 / 3)        
