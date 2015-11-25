

f(5)

R(0) = 0
R(1) = 1
R(n) = R(n-1) + R(n-2)

def fibo(n):
    pass

fibo(0) => 0


# fibo(0) => 0
# fibo(1) => 1
# fibo(2) => 1
# fibo(3) => 2

# R(0) = 0
# R(1) = 1
# R(n) = R(n-1) + R(n-2)
# fibo(5) = fibo(5-1) + fibo(5-2)
def fibo(n):
    if n == 0:
        return 0
    if n == 1:
        return 1
    return fibo(n-1) + fibo(n-2)
    # return 1 + fibo(n-2)


                                            fibo(1)
fibo(4) -> fibo(4-1) -> fibo(3-1) -> fibo(2-1) -> 1
        ->fibo(4-2) -> fibo(2-1) -> 1
