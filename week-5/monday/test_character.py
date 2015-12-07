import unittest
from character import Character

class TestCharacter(unittest.TestCase):
    def test_existance(self):
        character = Character("Test", 100, 10)

    def test_properties(self):
        character = Character("Test", 100, 10)
        self.assertEqual(character.name, "Test")
        self.assertEqual(character.hp, 100)
        self.assertEqual(character.damage, 10)

    def test_drink_potion(self):
        character = Character("Test", 100, 10)
        character.drink_potion()
        self.assertEqual(character.hp, 110)

    def test_strike(self):
        character = Character("Test", 100, 10)
        opponent = Character("Opponent", 100, 10)
        character.strike(opponent)
        self.assertEqual(opponent.hp, 90)

    def test_get_status_contains_name(self):
        character = Character("Test", 100, 10)
        status = character.get_status()
        first_line = status.split("\n")[0]
        self.assertEqual(first_line, character.name)

    def test_get_status_contains_dead(self):
        character = Character("Test", 0, 10)
        status = character.get.status()
        first_line = status.split("\n")[1]
        self.assertEqual(first_line, dead)

    def get_status_line(line_number, initial_hp):
        character = Character("Test", initial_hp, 10)
        status = character.get_status()
        return status.split("\n")[line_number]
