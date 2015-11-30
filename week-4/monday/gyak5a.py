
# create a function that returns it s input factorial

def factorial2(num):
    output = 1
    for n in range(1, num + 1):
        output *= n
    return output

print(factorial2(7))
