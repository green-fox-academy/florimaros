x = int(input("Adj meg egy számot: "))
result = 0
for result in range(0, abs(x)+1):
    if result**3 == abs(x):
        break
if result**3 != abs(x):
    print("A számnak nincs egész köbgyöke.")
else:
    if x < 0:
        result = - result
    print(x," köbgyöke ",result)
