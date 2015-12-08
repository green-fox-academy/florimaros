class FibonacciIterator:

fibo = FibonacciIterator(50)
while fibo.next():
    print(fibo.current())

class Iterator:
    def __init__(self, list):
        self.list = list
        self.i = 0
    def next(self):
        self.i += 1
        return len(sef.list) > self.i

    def current(self):
        return self.list[self.i]
print("*" * 80)
l = [1, 2, 3, 4]
iter = Iterator(1)
while iter.next():
    print(iter.current())
