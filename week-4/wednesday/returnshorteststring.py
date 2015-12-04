names ["zakarias, "Hans"]
#vegigmenni rajta es megnezni h az adott elem kisebb e mint 0


def get_shortest_string_from_list(strings):
    output = strings[0]
    for string in strings:
        if len(output) > len(string):
            output = string
    return output

print(get_shortst_string_from_list(names))
