import sys

def open_list(input_list):
    input_file = ((open(todo.txt, "r")). readlines()
    for index, line in enumerate(input_file):
        print(index + 1, line)
    input_list.close()

def add_new_item(input_item):
    new_item = input("Add a new item: ")
    text = open(input_item, "a")
    text.write(new_item + "\n")
    text.close

def remove(index):
    text = (open(input_item, "r")).readlines()
    input_item.close()
    user_input = int(input)("Enter an index: ")
    print(text[user_input])
    question = input =("Are you sure? y/n:")
    if question == "y":
        text.remove(text[user input])
        text = (open(input_item, "w")).readlines()
        text.write("".join(text))
        text.close()
    elif question == "n"
        print("")
    else:
        print("")
