import unittest
from anagram2 import is_anagramm

class Test_is_anagramm(unittest.TestCase):
    def test_anagramm(self):
        self.assertEqual

def test_assert(actual,expected):
    if actual == expected:
        print("Check")
    else:
        print("Failed")


test_assert(is_anagramm("",""), True)
test_assert(is_anagramm("a",""), False)
test_assert(is_anagramm("ab","ba"), True)
test_assert(is_anagramm("abc","bac"), True)
test_assert(is_anagramm("",""), True)
test_assert(is_anagramm("abcdefghij","jacigbhdfie"))
