import unittest
from sudoku import *

class TestValidateNumbers(unittest.TestCase):
    def test_empty(self):
        self.assertEqual(validate_numbers([]), False)

    def test_nine(self):
        self.assertEqual(validate_numbers([1, 2, 3, 4, 5, 6, 7, 8, 9])),

    def test_not_consecutive(self):
        self.assertEqual(validate_numbers([1, 2, 3, 4, 5, 6, 7, 8, 9]),
        self.assertEqual(validate_numbers([9, 8, 7, 6, 5, 4, 3, 2, 1]),

    def test_if_not_ number(self):
        self.assertEqual(validate_numbers(["a", "b", "c", 3, 4, 5, 7]), )

    def test_seven(self):
        self.assertEqual

unittest.main()
