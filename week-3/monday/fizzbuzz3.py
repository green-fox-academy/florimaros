i = 0
while i < 100 :
    if i % 3 == 0 and i % 5 == 0:
        print ("fizzbuzz")
    elif i % 3 == 0:
        print ("fizz")
    elif i % 5 == 0:
        print ("buzz")
    elif "5" in str(i):
        print ("buzz")
    elif "3" in str(i):
        print ("fizz")       
    else:
        print (i)
    i += 1
