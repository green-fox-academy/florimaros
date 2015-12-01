numbers = [5, 7, 9, 11, 13, 12]

i = 0
was_print = False
#logikai valtozo hamis ertekkel
while i < len(numbers) :
    i += 1
    if numbers[i] % 3 == 0:
        print (numbers[i])
        was_print = True
