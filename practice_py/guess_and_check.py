x = int(input("Adj meg egy számot: "))
result = 0
while result**3 < abs(x):
    result = result + 1
if result**3 != abs(x):
    print("A számnak nincs egész köbgyöke.")
else:
    if x < 0:
        result = - result
    print(x," köbgyöke ",result)
