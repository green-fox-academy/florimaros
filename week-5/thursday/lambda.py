numbers = [1, 2, 3, 4, 5, 6, 7, 8]
output = []
def per3 ():
    i = 0
    while i < len(numbers) :
        if (numbers[i]) %2==0 :
            output.append(numbers[i])
        i += 1
per3 ()
print(output)
z = list(filter(lambda x: x% 2 == 0, numbers))
print(z)
