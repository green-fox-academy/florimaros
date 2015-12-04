import sys
import csv
csv_input = "todo_list.csv"
def list_items():
    my_todo = open(csv_input, "r")
    lines = csv.reader(my_todo, delimiter = "|")
    for index, line in enumerate(lines):
        print(index+1, line)
    my_todo.close()
def add_new():
    teszt = open(csv_input, "a")
    new = input('Add meg az új elemet: ')
    teszt.write(new + '\n')
    teszt.close()


# add_new()
def remove_item():
    my_todo = open(csv_input, "r")
    lines = csv.reader(my_todo, delimiter = "|")
    list_items()
    rm = int(input('Melyiket szeretnéd törölni? Adj meg egy számot: '))
    print()
    print(lines[rm])
    yes = input('Biztosan törölni akarod? Y/N: ')
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
print('új lista:')
list_items()
