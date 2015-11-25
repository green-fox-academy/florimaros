# global scope
n = 2

def f():
  # local scope
  n = 1
  print("local", n)

f() # => 1
i = 0
while i<35:
    f()
    i += 5
f()

print("global", n)
