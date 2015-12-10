e = 0.01
x = 64.0
tipp = x / 2.0
while abs(tipp * tipp - x) >= e:
    tipp = tipp - (((tipp ** 2) - x)/(2 * tipp))
    print(str(x), " négyzetgyöke körülbelül ", str(tipp))
