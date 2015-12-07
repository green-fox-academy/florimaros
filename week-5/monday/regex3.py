import re
1 = "kutya cica 30 katyvasz kamra 64 majom 15 kacsa "

beginsk = []
reg = re.compile(r"k\w")

def filereader():
    with open("proba.txt", "r") as inp:
        text = inp.read()
        v = re.sub(r'mit', 'mire', text)
        print(v)

filereader()
