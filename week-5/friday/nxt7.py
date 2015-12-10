from tkinter import *

master = Tk()

w = Canvas(master, width=700, height=700)
w.pack()



w.create_line(100, 100, 100, 500)
w.create_line(100, 500, 500, 500)
w.create_line(100, 150, 150, 500)
w.create_line(100, 200, 200, 500)
for i in range (50):
    oy = 25 * i
    w.create_line(100, 100+oy, 100+oy, 500)

mainloop()
