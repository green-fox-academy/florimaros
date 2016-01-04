#create a Class called FileLines
#lines=FileLines("alma.txt"),
#lines get last() <= returns the last line of the File
#lines.get_first()<- returs the first line of the File
#lines.get_nth(2) <- returns the nth line given in the argument

class FileLines:
    def __init__ (self, file_name):
        fobj = open(file_name)
        self.lines = fobj.readlines()
        fobj.close()

    def get_first(self):
        return self.lines(0)

    def get_last(self):
        return self.lines(-1)

    def get_nth(self, n):
        return self.lines[n]


lines = FileLines("alma.txt")
print(lines.get_first())
print(lines.get_last())
print(lines.get_nth())
