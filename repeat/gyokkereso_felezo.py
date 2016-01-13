x = 82
e = 0.01
lepes = e ** 2
probakSzama = 0
alsoHatar = 0.0
felsoHatar = x
eredmeny = (alsoHatar + felsoHatar) / 2.0
while abs(eredmeny ** 2 - x) >= e:
    print("Alsó határ: ", str(alsoHatar), " Felső határ: ", str(felsoHatar), " Eredmény: ",str(eredmeny))
    probakSzama += 1
    if eredmeny ** 2 < x:
        alsoHatar = eredmeny
    else:
        felsoHatar = eredmeny
    eredmeny = (alsoHatar + felsoHatar) / 2.0
print("Próbálkozások száma: ", str(probakSzama))
print(str(eredmeny), " megközelíti ", str(x), " négyzetgyökét")
