```python
class Node(object):
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList(object):
    def __init__(self):
        self.head = None

    # push_back
    def push_back(self, data):
        if self.head == None:
            self.head = data
        else:
            current = self.head
            while current.next != None:
                current = current.next
            current.next = data

    # push_front
    def push_front(self, data):
        if self.head == None:
            self.head = data
        else:
            data.next = self.head
            self.head = data

    # pop_back
    def pop_back(self):
        current = self.head
        while current.next != None:
            if current.next.next == None:
                current.next = None
                return
            current = current.next

    # pop_front
    def pop_front(self):
        front = self.head
        self.head = self.head.next
        del front

    def reverseIterative(self):
        prev = None
        current = self.head
        while current is not None:
            next = current.next
            current.next = prev
            prev = current
            current = next
        self.head = prev

    def reverseRecursive(self, current, prev):
        if current.next is None:
            self.head = current
            current.next = prev
            return
        next = current.next
        current.next = prev
        self.reverseRecursive(next, current)

    def reverse(self):
        if self.head is None:
            return
        self.reverseRecursive(self.head, None)

    def print(self):
        current = self.head
        string = ""
        while current:
            string += str(current.data)
            if current.next:
                string += "->"
            current = current.next
        print(string)


if __name__ == "__main__":
    singlyList = LinkedList()
    singlyList.push_back(Node(1))
    singlyList.push_back(Node(2))
    singlyList.push_back(Node(3))
    singlyList.push_back(Node(4))
    singlyList.print()

    singlyList.push_front(Node(0))
    singlyList.print()

    singlyList.pop_front()
    singlyList.print()

    singlyList.pop_back()
    singlyList.print()

    # singlyList.reverseIterative()
    # singlyList.print()

    singlyList.reverse()
    singlyList.print()


```
