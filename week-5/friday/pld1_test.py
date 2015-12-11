import unittest
from intro import MyMagic

class TestIntro(unittest.TestCase):
    def setUp(self):
        self.names = names = [{"id": 1, "name": "John"},
                                {"id": 2, "name": "Molly"},
                                {"id": 3, "name": "Jane"}]
        self.subject = MyMagic(self.names)

    def test_instant(self):
        self.assertEquals(MyMagic([]), MyMagic)
    def test_names_as_list_when_empty(self):
        subject = MyMagic([])
        self.assertEquals(subject.names_as_list(), [])
    def test_names_as_list(self):
        subject = MyMagic(self.names)
        self.assertEquals(subject.names_as_list(), ["John", "Molly", "Jane"])

    def test_names_starts_with_j(self):
        subject = MyMagic(self.names)
        self.assertEquals(subject.name_starts_with_j(), ["John", "Jane"])



unittest.main()
#map ha van userem es kerem az id-jat akkor nem megszamolta es kiirta az elemeket map(lambda u: u["name"], names)elindit egy valtozot es kiserletezik
