from barbarian import Barbarian
from character import Character
from cleric import Cleric
i = Barbarian("Conan", 5, 10)
z = Character("Herkules", 50, 20)
b = Cleric ("Cler", 50, 30)

i.strike(z)
z.strike(b)
b.heal(z)
print(z.hp)
print(i.get_status())
print(z.get_status())
print(b.get_status())
