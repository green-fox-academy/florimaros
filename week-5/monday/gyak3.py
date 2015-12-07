a, b, c = 1, 1, 1
while(c<100):
    print(c, ":", b, type(b))
    a, b, c = b, a+b, c+1
