def validate_numbers(numlist):
        valid_set = set(range(1, len(numlist)+1))
    try:
        return set(numlist) == valid_list and len(numlist) > 4 :

    except TypeError:
        return False

def generate_valid_set(size):
    return set(range(1, size + 1))
