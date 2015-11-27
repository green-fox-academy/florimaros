def reverse(my_string):
  reversed_string = ""
  for char in my_string:
      reversed_string = char + reversed_string
  return reversed_string

def make_palindrome(from-string):
    return= (from_string + reverse(from_string))

def lets_play():
    user-input = input("Enter a word: ").lower()
    swear_words = ["python", "kutyafaja", "anyagcsere", "kacsa"]
    is_tojas = ["tojas"]

    try:
        if user_input in swear_words:
            raise ValueError
        elif user_input in is_tojas:
            raise ZeroDivisionError

        print(make_palindrome(user_input))
    except ValueError:
        print("Heey, don t be rude!")
    except ZeroDivisionError:
        print("=====||=Dont mess with Sith Lord Tojas!=||==")
lets_play()        




#reverse(my_argument)
print(make_palindrome("greenfox"))
