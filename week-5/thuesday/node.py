class Node:

    def __init__(self, value, left = None, right = None):
        self.value = value
        self.left = left
        self.right = right

root = Node(
    1,
    Node(2), # left
    node(3), # right
)

class LeftIterator:
    def __init__(self, root):
        self.curr = root
        self._next = None

    def next(self):
        self._next, self.curr = self.curr.left, self._next
        return self.curr.left is not None

    def current(self):
        return self.curr

iter = LeftIterator(root)
while iter.next():
    print(iter.current().value)
