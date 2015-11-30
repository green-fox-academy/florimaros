class Player:
    def_init_(self, name, hp, dmg):
        self.name = name
        self.hp = hp
        self.dmg = dmg

    def drink_potion(self):
        self.hp += 10

    def strike
        enemy.hp -= self.dmg

    def print_status(self):
        print(self.name)
        if self.hp <= 0:
            print("DEAD.....HAHAHAHA")
        else:
            print("HP:" + str(self.hp))
class Cerlic(Player):
    def heal(self, ally)
        ally.hp += 10
        print("Ally ")
balrog = player("Balrog", 100, 20)
gandalf = Player("Gandalf the Grey", 50, 40)
melkor = Cerlic("Melkor", 1000, 80)

balrog.print_status()
for i in range(3):
