#letrehoztunk egy fuggvenyt ami var egy parametert (string-el azonositjuk a parametert),letrehoztunk egy ures string-et (reversed), for-al vegigmentunk a stringunkon es berakjuk az aktualis karaktert az i-be. es letrehozzuk a forditott stringet. a forditott ele belerakjuk a forditott stringet, visszaadja a reversben tarolt stringet
#
def create_palindrom (string, var2):
  reversed = ""
  for i in string:
      reversed = i + reversed
  reversed=string+reversed
  return reversed

print(create_palindrom("pear", "xxxxxxx"))
    # it prints: pearraep
