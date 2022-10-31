## Binary Seach Tree

이진탐색트리(Binary Search Tree)는 다음과 같은 쿼리를 실행할 수 있는 자료 구조이다.

- 요소 x를 자료 구조에 삽입
- 요소 x를 자료 구조에서 삭제
- 요소 x가 자료 구조에 존재하는지 판정

이진탐색트리는 그림처럼 꼭지점 V가 키라고 부르는 값 key[v]를 가지는 이진트리로 다음 조건을 만족한다.

> 임의 조건 v에 대해 v왼쪽 부분 트리에 포함된 모든 꼭지점 v'에 대해 key[v] >= key[v']가 성립하고,
> v오른쪽 부분 트리에 포함된 모든 꼭지점 v'에 대해 key[v] <= key[v']가 성립한다.

![image](https://user-images.githubusercontent.com/48708746/199109584-9629c69f-a201-4a78-b08c-0569ba8c1e8c.png)

#### 이진탐색트리의 특징

- 어떤 쿼리 처리도 루트 트리의 루트에서 탐색을 시작해 최악의 경우 리프까지 찾가므로 트리 높이만큼 계산을 해야함 (임의접근(random access) 불가)
- 이진탐색트리는 특별한 처리를 하지 않는 한 쿼리 처리에 필요한 복잡도는 O(N)
- 하지만 균형을 이루는 '자가균형이진트리'의 경우 이런 복잡도가 모두 O(logN)으로 개선됨
- 그뿐만 아니라 힙 기능 중 하나인 최댓값을 취득하는 처리도 O(logN)으로 실현 가능

#### 구현방법

- 레드-블랙 트리
- AVL트리
- B-트리
- 스플레이 트리
- 트립 등등..

#### 구현

```python
# 노드클래스
class Node
      def __init__(self, value):
          self.value = value
          self.left = None
          self.right = None

class BinarySearchTree:
      def __init__(self, head):
          self.head = head

      # insert 만 구현
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

head = Node(16)
bt = BianrySearchTree(head)
bt.insert_node(12)
bt.insert_node(19)
bt.insert_node(11)
bt.insert_node(13)
bt.insert_node(18)
bt.insert_node(20)
bt.insert_node(9)



```
