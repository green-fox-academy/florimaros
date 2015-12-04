numbers = [7, 5, 8, -1, 2]
#write a function that returns the minimal element in a list (your own function)
#vegigmenni rajta es megnezni h az adott elem kisebb e mint 0
def get_minimum_from_list(number_list):
    output = number_list[0]
    for n in number_list:
        if output < n:
            output = n
    return output

print(get_minimum_from_list(numbers))
print(get_minimum_from_list([1, 2, 3]))
