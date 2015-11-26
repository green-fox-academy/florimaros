#fuggvenyt ami egy listat valt es visszater a lista forditottjaval. bemenetnek kap egy listat es visszater egy listaval ami a forditottja.

numbers = [1, 2, 3, 4]
def reverse(in_list):
    output = []
    i = len(in_list)-1
    while i >= 0:
        output.append(in_list[i])
        i = i - 1
    return output
print(reverse(numbers))
