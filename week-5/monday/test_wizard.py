import unittest
from wizard import Wizard

class TestWizard(unittest.TestCase):
    def test_existance(self):
        wizard = Wizard ("Merlin", 40, 10, 20)

    def test_inheritance(self):
        wizard = Wizard("Merlin", 40, 10, 20)
        self.assertEqual(wizard.hp, 40)

    def test_manna(self):
        wizard = Wizard("Merlin", 40, 10, 20)
        self.assertEqual(wizard.manna, 20)

    def test_strike_with_manna(self):
        wizard = Wizard("Merlin", 40, 10, 20)
        opponent = Wizard("Malfoy", 30, 5, 10)
        wizard.strike(opponent)
        self.assertEqual(wizard.manna, 15)

    def test_strike_with_manna(self):
        wizard = Wizard("Merlin", 40, 10, 20)
        opponent = Wizard("Malfoy", 30, 5, 10)
        wizard.strike(opponent)
        self.assertEqual(wizard.manna, 15)
