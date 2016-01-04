
# create a function that returns it s input factorial

def factorial(num):
    output = 1
    i = 1
    while i <= num:
        output *= i
        i += 1
    return output

print(factorial(10))
