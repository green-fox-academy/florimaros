x = 8
time = 120
out = ""
#if x is dividable by 4
#and time is not more than 200
#set out to fourth
#if time is more than 200
#set out to time out
#otherwise set out to run forest run
maxtime = 200
if x % 4 == 0 and time < maxtime:
    out = "check"
elif time >= maxtime:
    out = "time out"
else:
     out == "run forest run"

print (out)
