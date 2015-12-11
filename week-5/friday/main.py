#data structure ami leirja a koordinatakat, mereteket, vmi ami megjeleniti
from tkinter import *

master = Tk()

canvas = Canvas(master, width = 400, height = 400)
canvas.pack()

canvas.create_rectangle(0, 0, 400, 400, fill = "white")
ball = Ball((250, 250), (2, 2), 20)

while True:
    ball.move()
    bbox = ball.get_bbox()
    canvas.create_oval(bbox, fill = "black")
    canvas.after(1000//60)
mainloop()
