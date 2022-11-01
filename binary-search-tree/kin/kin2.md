## Binary Seach Tree

### Tree Treversal

- 특정하게 나열된 각 노드 값을 방문하고 값을 출력하는 것을 트리 순회(Tree Traversal) 이라고 함

#### Tree Traversal 3 ways

- Inorder : 왼쪽의 subtree부터 root 방향으로 방문한 후 오른쪽 subtree를 방문
- Preorder : root부터 왼쪽 subtree 방향으로 방문 후 오른쪽 subtree 방문
- Postorder : 왼쪽 subtree부터 오른쪽 subtree를 방문한 후 root 방문

#### 요약

- Inorder : Left, Root, Right
- Preorder : Root, Left, Right
- Postorder : Left, Right, Root

### 그림 설명

#### Inorder Traversal

![image](https://user-images.githubusercontent.com/48708746/199323327-e8915e54-8765-4b8d-91fe-a8cafb273830.png)

#### Preorder Traversal

![image](https://user-images.githubusercontent.com/48708746/199323119-6e300a8c-e4fb-4988-bfa5-48fa14d02dd0.png)

#### Postorder Traversal

![image](https://user-images.githubusercontent.com/48708746/199323430-d2bee99a-a608-4000-b488-e8eeeb6c14a7.png)

### 코드 구현

#### Inorder Travelsal

```python
# left > root > right
class Node:
    def __init__(self, data):
        self.left = None
        self.right = None
        self.val = data

def inorder(root):
    if root:
        inorder(root.left)
        # print(root.val)
        inoder(root.right)

if __name__ == "__main__":
    root = Node(1)
    root.left = Node(2)
    root.right = Node(3)
    root.left.left = Node(4)
    root.right.right = Node(5)

    inorder(root)
```

#### Preorder Traversal

```python
# root > left > right

class Node:
    def __init__(self, data):
        self.left = None
        self.right = None
        self.val = data

def preorder(root):
    if root:
        # print(root.val)
        preorder(root.left)
        preorder(root.right)

if __name__=="__main__":
    root = Node(1)
    root.left = Node(2)
    root.right = Node(3)
    root.left.left = Node(4)
    root.right.right = Node(5)

    preorder(root)

```

#### postorder Traversal

```python
# left > right > root

class Node:
    def __init__(self, data):
        self.left = None
        self.right = None
        self.val = data

def postorder(root):
    if root:
        postorder(root.left)
        postorder(root.right)
        # print(root.val)

if __name__=="__main__":
    root = Node(1)
    root.left = Node(2)
    root.right = Node(3)
    root.left.left = Node(4)
    root.right.right = Node(5)

    postorder(root)
```

---

### Binary SearchTree Tree - Search

- 이진탐색트리는 이진트리의 특수한 경우
- 모든 노드에 대해 그 왼쪽 자식들의 값이 현재 노드값보다 작거나 같으며,
  그 오르쪽 자식들의 값이 현재 노드의 값보다 크다.
- 위의 조건을 만족하면 이진탐색트리이다.
- 위의 조건에 따라 찾고자 하는 target을 재귀를 통해 왼쪽, 오른쪽으로 보내며 노드를 탐색한다.

```python
class Node:
    def __init__(self, data):
        self.left = None
        self.right = None
        self.val = data

    def search(self, target)
        return self.search_target(self.root, target)

    def search_target(self.root, target):
        if root is None or root.data == target:
            return root is not None
        elif target < root.data:
            return self.search_target(root.left, target)
        else:
            return self.search_target(root.right, target)
```
