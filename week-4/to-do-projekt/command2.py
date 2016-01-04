import time
from datetime import datetime
from colors import red, green, yellow

csv_input = "todo.csv"


def open_list():

    input_file = open(csv_input, "r")
    lines = csv.reader(input_file, delimiter = "|")
    print("Priority: Description: Status: Deadline:")
    for index, line in enumerate(lines):

        print(index+1, line[0,3])
    print()
    print()
    input_file.close()


def add_new_item():
    with open(csv_input, "a") as csvfile:
        todo_csv = csv.writer(csvfile, delimiter = "|", lineterminator="\n")
        status = "active"
        priority = input ("Choose a priority: H - High, M - Medium, L - Low:").upper()
        if priority == "H"
            priority_mod = "High"
        elif priority == "M"
            priority_mod = "Medium"
        elif    priority == "L"
                priority_mod = "Low"
        else:
                priority_mod = "Medium"

        description = input("Give the description:")
        deadline = int(input("Please give the deadline | format: 20150622: "))
        date = datetime.now().strftime("%d,%m,%Y,%H,%M")
        data = [priority_mod, description, status, deadline, date]
        todo_csv.writerow(data)


def remove():
    text = open(csv_input, "r")
    lines =list (csv.read (text, delimiter = "|"))
    open_items()
    user_input = int(input("Enter an index: "))
    new_list = list(lines)
    print()
    print("Are you sure? y/n: ")
    print([new_list_user_input-1])
    yes = input('are you sure that you want to delete this? Y/N: ')
    if yes == 'y':
        lines.remove(lines[rm-1])
        my_todo.close
        my_todo = open(csv_input, "w")
        my_todo.write("".join(lines))
        my_todo.close
    elif  yes == 'n':
        pass
    else:
        print('')
# remove_item()
print('new list:')
list_items()
