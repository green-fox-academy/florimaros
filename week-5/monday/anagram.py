def test_assert(actual, expected):
    if actual == expected:
        print("Check")
    else:
        print("Failed")

def is_anagramm(s1, s2):
    if s1 == s2:
        return True
    else:
        return False




test_assert(is_anagramm("",""), True)
test_assert(is_anagramm("a",""), False)
