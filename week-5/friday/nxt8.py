from tkinter import *

master = Tk()

w = Canvas(master, width=700, height=700)
w.pack()


i = 0
w.create_line(100, 100, 100, 500)
w.create_line(100, 500, 500, 500)
oy = 0
while oy+100 < 500:
    oy = 15 * i
    w.create_line(100, 100+oy, 100+oy, 500)
    i = i + 1
mainloop()
