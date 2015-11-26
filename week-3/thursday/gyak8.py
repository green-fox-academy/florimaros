#def get integer


while True:
    try:
        int(input("Enter an integer: "))

    except:
        print("You entered a wrong value.")
    else:
        print("Koszi")
        break
