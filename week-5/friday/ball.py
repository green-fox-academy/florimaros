#data structure ami leirja a koordinatakat, mereteket, vmi ami megjeleniti
from tkinter import *
from ball import Ball

master = Tk()

canvas = Canvas(master, width=400, height=400)
canvas.pack()


class Ball():
    def __init__(self, x, y, radius):
        self.pos = (x, y)
        self.size = vector.multiply(radius, radius), 2)

    def get_bbox(self):
        start = vector.add(self.pos, vector.multiply(self.size, -0.5))
        end = vector.add(self.pos, vector.multiply(self.size, 0.5))
        return start + end (
            self.pos[0] - self.sizef[0]/2,
            self.pos[1] - self.size[1]/2,
            self.pos[0] + self.size[0]/2,
            self.pos[1] + self.size)[1]/2
