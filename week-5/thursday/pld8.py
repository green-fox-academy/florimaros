x = int(input("Adj meg egy számot: "))
result = 0
while result**3 < x:
    result = result + 1
if result**3 != x:
    print("A számnak nincs egész köbgyöke.")
else:
    print(x," köbgyöke ",result)
