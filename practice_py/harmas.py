
x = input("Adj meg egy szamot: ")
x = int(x)
if x % 2 == 0:
    if x % 3 == 0:
        print("Osztható 2-vel és 3-mal is.")
    else:
        print("Osztható 2-vel, de 3-mal nem.")
elif x % 3 == 0:
        print("Osztható 3-mal, de 2-vel nem.")
else:
        print("Sem 2-vel, sem 3-mal nem osztható.")
