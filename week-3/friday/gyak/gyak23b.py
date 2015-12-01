w = 123
credits = 100
is_bonus = False
#if credits are at least 50
#but is bonus is false decrement w by 2
#if credits are smaller than 50
#and is bonus is false decrementw by 1
#if is bonus is true w should remain the same
if is_bonus:
    pass
elif credits >= 50:
    w = w - 2
else:
    w = w - 1    

print(w)
