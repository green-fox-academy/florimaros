#create a student class that stores grades and the student name
#it should have add_grade method, also a get_average method
#create a Class class that contains student
#it should have an add_student method , also a get_average method
#it should also have a get_names
class Student:
    def __init__ (self, name):
        self.name = name
        self.grades = []

    def add_grade(self, grade):
        self.grades.apend(grade)

    def get_average(self):
        return sum(self.grades) / len(self.grades)

class Class:
    def __init__(self):
        self.students = []

    def add_student(self, student):
        self.students.append(student)

    def get_average(self):
        return sum(map(lambda s : s.get_average(), self.students))/

    def get_names(self):
        return map(lambda s : s.name, self.students)

my_class = Class()
kati = Student ("Kati")
kati.add_grade(5)
kati.add_grade(4)
my_class.ad_student(kati)
jozsi = Student("Jozsi")
jozsi.add_grade(2)
my_class.add_student(jozsi)

    print(my_class.get_average())
print(my_class.get_names())
