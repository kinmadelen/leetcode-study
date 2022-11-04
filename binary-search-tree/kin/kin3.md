# Binary Search Tree - delete

## Case 1. 자식노드가 하나도 없는 경우

- 삭제할 노드가 자식 노드를 가지고 있지 않을 경우 부모노드와의 링크를 끊어준다.
-
- python의 경우 GC가 Reference counter가 0이 된 노드를 자동으로 삭제시켜준다.
-

## Case 2. 자식노드가 하나만 있는 경우

- 부모노드와의 링크를 끊고 부모 노드의 링크를 자식 노드에 연결 시켜준다.

## Case 3. 자식노드가 양쪽 다 있는 경우

- 삭제시킬 노드의 빈자리를 채울 노드가 필요하게되는 케이스
- 삭제시킬 노드의 왼쪽 서브 트리에서 가장 큰 값이 대체될 수 있다.
- 왼쪽 자식 노드의 오른쪽 노드를 타고 내려가다가 null 값을 가지는 오르쪽 자식 노드를 가지는 노드로 대체한다.
- 삭제시킬 노드의 른쪽 서브 트리에서 가장 작은 값이 대체될 수도 있다.
- 오른쪽 자식노드의 왼쪽 노드를 쭉 타고 내려가다 null 값을 가지는 왼쪽 자식이 있는 노드로 대체한다.

```python
class BinarySearchTree:
    def __init__(self, head):
          self.head = head

    # insert
    def insert_node(self, value):
        self.base_node = self.head
        while True:
            if self.base_node.value > value:
                if self.base_node.left != None:
                    self.base_node = self.base_node.left
                else:
                    self.base_node.left = Node(value)
                    break
            else:
                if self.base_node.right != None:
                    self.base_node = self.base_node.right
                else:
                    self.base_node.right = Node(value)
                    break

    # search
    def search(self, target):
        current = self.head
        while current:
            if current.value == target:
                return current
            elif current.value > target:
                current = current.elft
            else:
                current = current.right
        return None



    # delete with 3 ways
    def delete_node(self, current, target):
        if not current:
            return None
        elif target < current.value:
            current.left = self.delete_node(current.left, target)
        elif target > current.value:
            current.right = self.delete_node(current.right, target)
        else:
            # Case 1.
            if not current.left and not current.right:
                current = None

            # Case 2.
            elif not current.left:
                current = current.right
            elif not current.right:
                current = current.left
            else:
                # Case 3. 대체 노드 찾기
                replaced_node = current.left
                while replace_node.right:
                    replace_node = replace_node.right
                    # 삭제할 노드와 대체할 노드 값 교환
                    current.value, replaced_node.value = replaced_node.value, current.value

                    current.left = self.delete_node(current.left, replaced.value)
            return current



```
