def test(expected, actual, message)
    if expected == actual:
      print("check")
    else:
        print ("Error:" + message)
        print(expected, actual)

TOKENS = {
    "5": "V",
    "4": "IV",
    "1": "I"
}

def arabic2roman(arabic):
    output = ""
    biggest_token = 0
    while arabic > 0:
        if arabic >= 5:
        biggest_token = get_biggest_token(arabic)
        output += TOKENS[str(biggest_token)]
        arabic -= biggest_token
    return output

def get_biggest_token(current_number):
    if current_number >= 5:
        return 5
    elif

        pass
    if arabic == 6:
        return VI
    if arabic == 5 or arabic == 4:
        return TOKENS[str(arabic)]
    return "I" * arabic

test(arabic2roman(0)), "", "It should handle 0")
test(arabic2roman(1)), "I", "It should handle 1")
test(arabic2roman(2)), "II", "It should handle 2")
test(arabic2roman(4)), "IV", "It should handle 4")
test(arabic2roman(5)), "V", "It should handle 5")
