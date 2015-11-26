from random import randint
def get_integer():
    number = int(input("Enter an integer"))
    return number

number_to_guess = randint(0, 10)

number_of_guesses = 5

print (number_to_guess)

while number_of_guesses > 0:
    try:
        guess = get_integer()
    except ValueError:
        print("You entered a wrong value.")
    else:
        if guess < number_to_guess:
            print ("nagyobb szammal probalkozz")
        elif number_to_guess < guess:
            print ("kisebb szamot probalj meg")
        else:
            print ("nyert")
            break
        number_of_guesses -= 1
