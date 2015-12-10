from tkinter import *

master = Tk()

w = Canvas(master, width=400, height=400)
w.pack()


i = 0
j = 50
k = 0
while j <= 400:
    if k % 2 == 0:
        w.create_rectangle(i, 0, j, 50, fill="black")
    else:
        w.create_rectangle(i, 0, j, 50, fill="white")
    i += 50
    j += 50
    k += 1
#w.create_rectangle(0, 0, 50, 50, fill="black")
#w.create_rectangle(50, 0, 100, 50, fill="white")
#w.create_rectangle(100, 0, 150, 50, fill="black")
#w.create_rectangle(150, 0, 200, 50, fill="white")
#w.create_rectangle(200, 0, 250, 50, fill="black")
#w.create_rectangle(250, 0, 300, 50, fill="white")
#w.create_rectangle(300, 0, 350, 50, fill="black")
#w.create_rectangle(350, 0, 400, 50, fill="white")

mainloop()
