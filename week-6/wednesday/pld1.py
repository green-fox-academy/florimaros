#create a student class that stores grades and the student name
#it should have add_grade method, also a get_average method
#create a Class class that contains student
#it should have an add_student method , also a get_average method
#it should also have a get_names
class Student:
    def __init__ (self, name):
        self.name = nameself.grades = []

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
        sum = 0
        for student in self.students:
            sum += student.get_average                        
