import command2
import sys
def menu():
    print("\033c")
    print('*************************************')
    print('* * *       1 List items        * * *')
    print('* *          1.1 order by prioriy * *')
    print('* *          1.2 deadline         * *')
    print('* *         2 Add nem item        * *')
    print('*           3 Remove item           *')
    print('* *         4 Complete Item       * *')
    print('* * *       Q Exit Program      * * *')
    print('*************************************')
    choosen = input("Choose an option: ")
    if choosen == '1':
        print()
        print("\033c")
        commands.list_items()
        input('For main menu hit enter ')
        menu()
    elif choosen == '2':
        commands.add_new()
    elif choosen == '3':
        commands.remove_item()
        print()
        commands.list_items()
        time=input()
        menu()
    elif choosen == '4':
        menu()
    elif choosen.upper() == 'Q':
        pass
menu()
