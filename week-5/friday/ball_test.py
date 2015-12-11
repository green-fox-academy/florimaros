#data structure ami leirja a koordinatakat, mereteket, vmi ami megjeleniti
import unittest
from ball import Ball

class TestBall(unittest.TestCase):
    def test_exists(self):
        ball = Ball(40, 50, 10)

    def test_position_and_size(self):
        ball = Ball(40, 50, 10)
        self.assertEqual(ball, x, 40)
        self.assertEqual(ball.y, 50)
        self.assertEqual(ball.size, 10)

    def test_get_bbox(self):
        ball = Ball(40, 50, 10)
        bbox = ball.get_bbox()
        self.assertEqual((bbox, (30, 40, 50, 60))

    def test_move(self):
        ball = Ball((40, 50), (10, 10), 10)
        ball.move()
        self.assertEqual(ball.pos, (50,60))    
