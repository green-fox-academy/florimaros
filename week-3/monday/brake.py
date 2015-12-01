#valtozonev, ami jelenleg egy lista,
numbers = [5, 7, 9, 11, 13, 12]

i = 0
#valtozo lehet tobb eleme is
while i < len(numbers) :
#muveletes szavak amig i kisebb mint 6 addig mindig belej0n a blokkba es rater az ifre
    if numbers[i] % 3 == 0:
#==maradekos osztas, az osztas maradekat adja vissza, ha oszthato 3-al maradek nelkul
        print (numbers[i])
#a numbers lista i-edik elemet emeli ki
        break
    i += 1
