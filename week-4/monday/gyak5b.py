
# create a function that returns it s input factorial

def factorial3(num):
    if num == 1:
        return 1
    else:
        return factorial3(num - 1) * num

print(factorial3(10))
