import unittest
import pld3

class TestFunc(unittest.TestCase):

    def setUp(self):
        self._c1 = pld3.Character(health=10, armor=5)
        self._c2 = pld3.Character(health=50, armor=30)

        self._eventlist = [
            {"character": self._c1, "type": "heal", "size":50},
            {"character": self._c1, "type": "damage", "size":50},
            {"character": self._c2, "type": "damage", "size":50}
        ]
    def test_should_handlde_the_damage_events(self):
        pld3.handleEvents(self._eventlist)
        self.assertFalse(self._c1.isAlive())
        self.assertTrue(self._c2.isAlive())

unittest.main()
