import unittest
from cleric import Cleric

class TestCleric(unittest.TestCase):
    def test_existance(self):
        cleric = Cleric("Test", 100, 10)

    def test_inheritance(self):
        cleric = Cleric("Test", 100, 10)
        other = Cleric("Other", 100, 10)
        cleric.heal(other)
        self.assertEqual(other.hp, 110)
