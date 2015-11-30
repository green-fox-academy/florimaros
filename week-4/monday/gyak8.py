class Car:
    def __init__(self, color, type, km):
        #if type(color)!=str:
            #raise Exception("No string")
        self.color = color
        self.type = type
        self.km = km

    def ride(self, km):
        self.km += km

    def getMiles(self):
        return self.km * 0.6213

tesla = Car("pink", "Tesla S", 1200)

tesla.ride(220)
print(tesla.km)
print(tesla.getMiles())
