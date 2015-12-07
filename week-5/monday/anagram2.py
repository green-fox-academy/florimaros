def test_assert(actual, expected):
    if actual == expected:
        print("Check")
    else:
        print("Failed")

def is_anagramm(s1, s2):
    sorted_s1 = sorted(s1)
    sorted_s2 = sorted(s2)
    return sorted(s1) == sorted(s2)


test_assert(is_anagramm("",""), True)
test_assert(is_anagramm("a",""), False)
test_assert(is_anagramm("ab","ba"), True)
test_assert(is_anagramm("abc","bac"), True)
test_assert(is_anagramm("",""), True)
test_assert(is_anagramm("abcdefghij","jacigbhdfie"))
