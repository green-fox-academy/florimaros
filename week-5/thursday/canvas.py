from tkinter import *
import math
def get_length(fr, to):
    return ((to[0] - fr[0]) ** 2 + (to[1] - fr[1]) ** 2) ** 0.5


def fractal_line(fr, to):
    if get_length(fr, to) < 5:
        line(fr, to)
    else:
        le = scale(diff(to, fr), 1/3)
        fractal_line(fr, add(fr, le))
        triangle_line(add(fr, le), diff(to, le))
        fractal_line(diff(to, le), to)

def triangle_line(fr, to):
    p = diff(to, fr)
    fractal_line(fr, add(fr, rotate(p, 1.0472)))
    fractal_line(add(fr, rotate(p, 1.0472)), to)

def line(fr, to):
    w.create_line(fr[0], fr[1], to[0], to[1])

def diff(p1, p2):
    return (p1[0] - p2[0], p1[1] - p2[1])

def add(p1, p2):
    return (p2[0] + p1[0], p2[1] + p1[1])

def scale(p, s):
    return (p[0] * s, p[1] * s)

def rotate(p, a):
    return (p[0] * math.cos(a) - p[1] * math.sin(a), p[1] * math.cos(a) + p[0] * math.sin(a))



master = Tk()

w = Canvas(master, width=1000, height=1000)
w.pack()

a = 500 / 2 * 3 ** 0.5

w.create_line(300, 0, 300, 600, fill='#000000')
w.create_line(40.2, 150, 559.8, 450, fill='#000000')
w.create_line(40.2, 450, 559.8, 150, fill='#000000')
n = 10
for i in range(30):
    w.create_line(300 + i * ((0.75 * (n ** 2)) ** 0.5), 300 - i * (n/2), 300, 0 + i*n, fill='#000000')
    w.create_line(300 - i * ((0.75 * (n ** 2)) ** 0.5), 300 - i * (n/2), 300, 0 + i*n, fill='#000000')
    w.create_line(300 + i * ((0.75 * (n ** 2)) ** 0.5), 300 + i * (n/2), 300, 600 - i*n, fill='#000000')
    w.create_line(300 - i * ((0.75 * (n ** 2)) ** 0.5), 300 + i * (n/2), 300, 600 - i*n, fill='#000000')
    w.create_line(300 + i * ((0.75 * (n ** 2)) ** 0.5), 300 - i * (n/2), 559.8 - i * ((0.75 * (n ** 2)) ** 0.5), 450 - i * (n/2), fill='#000000')
    w.create_line(300 - i * ((0.75 * (n ** 2)) ** 0.5), 300 - i * (n/2), 40.2 + i * ((0.75 * (n ** 2)) ** 0.5), 450 -i * (n/2), fill='#000000')


fractal_line((20, 550), (520, 550))
fractal_line((520, 550), (270, 550 - a))
fractal_line((270, 550 - a), (20, 550))





def create_triangle(x, y, size, direction = 1):
    height = (3 ** 0.5) * size / 2 * direction
    w.create_line(x, y, x + size / 2, y - height, fill="#000000")
    w.create_line(x + size / 2, y - height, x + size, y, fill="#000000")
    w.create_line(x, y, x + size, y, fill="#000000")

size = 200
def draw_complex():
    create_triangle(50, 200, size)
    create_triangle(50, 200 - size / 3 * 3 ** 0.5 / 3, size / 3, -1)
    create_triangle(50 + size * 2 / 3, 200 - size / 3 * 3 ** 0.5 / 3, size / 3, -1)
    create_triangle(50 + size / 3, 200 - size * 3 ** 0.5 / 2 * 8 / 9, size / 3, -1)


mainloop()
