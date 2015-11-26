#definialtunk egy f-t neve, bemenete, kimenet, ezen a szinten meghivjuk a f-t leirva a nevet, a zarojelek koze adunk egy bemenetet, ha leirja ismet filter even id jon vissza, a valtozot beallitjuk egy erteke (a def azt mondja meg hova ugorjon) ezt behelyettesiti az unflist heyere. a fuggvenyt hivom meg ezzelaz ertekkel.  
numbers = [1, 2, 3, 4, 5, 6, 7, 8]

def filter_even(unfiltered_list):
    output = []
    for n in unfiltered_list:
        if n % 2 == 0:
            output.append(n)
    return output


output = filter_even(numbers)

print(output)
