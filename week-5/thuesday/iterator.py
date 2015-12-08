class FibonacciIterator:
    def __init__(self, count):
        self.count = count
        self.i = 0
        self.a = 0
        self.b = 1
        self.curr = 0

    def next(self):
        if self.i >= self.count:
            return False

        self.i += 1
        self.curr = self.a
        self.a, self.b = self.a + self.b, self.a
        return True

    def current(self):
        return self.curr

fibo = FibonacciIterator(30)
while fibo.next():
    print(fibo.current())
