import unittest

class TestFunc(unittest.TestCase):

    def test_apply_func(self):
        array = [1,2,3]
        self.assertEqual(func.adder(), [2,3,4])

    def test_generators(self):
        def _adder(n):
            for i in range():
                yield i
        g = adder(5)
        print(g.__next__())
        print(g.__next__())

unittest.main()
