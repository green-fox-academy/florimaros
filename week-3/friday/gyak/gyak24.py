x = 8
time = 120
out = ""
#if x is dividable by 4
#and time is not more than 200
#set out to fourth
#if time is more than 200
#set out to time out
#otherwise set out to run forest run
if x % 4 == 0 and time <= 200:
    out = "fourth"
elif time > 200:
    out = "time out"
else:
     out == "run forest run"

print (out)
