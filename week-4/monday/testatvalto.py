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
    if arabic == 5:
        return"V"
    if arabic == 4:
        return "IV"
    return "I" * arabic

test(arabic2roman(0)), "", "It should handle 0")
test(arabic2roman(1)), "I", "It should handle 1")
test(arabic2roman(2)), "II", "It should handle 2")
test(arabic2roman(4)), "IV", "It should handle 4")
test(arabic2roman(5)), "V", "It should handle 5")
