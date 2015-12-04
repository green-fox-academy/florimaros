students = [
        {'name': 'Rezso', 'age': 9.5, 'candies': 2},
        {'name': 'Gerzson', 'age': 10, 'candies': 1},
        {'name': 'Aurel', 'age': 7, 'candies': 3},
        {'name': 'Zsombor', 'age': 12, 'candies': 5}
        {'name': 'Olaf', 'age': 12, 'candies': 7}
        {'name': 'Teodor', 'age': 3, 'candies': 2}
]
# create a function that takes a list of students,
# then returns how many candies are own by students
# under 10

def get_candy_count(students):
    rich_mother_count = 0
    for  youngling in kiddos:
        if youngling["candies"] > 4:
            rich_mother_count += 1
    retutn rich_mother_count

print(get_da_rich_mothers(students))
