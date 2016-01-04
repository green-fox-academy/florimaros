#create a Class called FileLines
#lines=FileLines("alma.txt"),
#lines get last() <= returns the last line of the File
#lines.get_first()<- returs the first line of the File
#lines.get_nth(2) <- returns the nth line given in the argument

class FileLines:
    def __init__(self, file_name):
        self.file_name = file_name
        

    def get first(self):
        fobj = open(self.file_name)
        lines = fobj.readlines()
        fobj.close()
        return lines[0]

lines = FileLines("alma.txt")
print(lines.get_first())
