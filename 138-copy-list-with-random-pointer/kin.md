# 138. Copy List with Random Pointer

https://leetcode.com/problems/copy-list-with-random-pointer/

## Approach

- Approach 실패 (python의 깊은 복사를 해본적이 없다. )
- 깊은 복사를 하기 위해 새로운 노드 생성해서 연결해주어야한다.

## problem

- 깊은 복사, 얕은 복사의 개념을 잘 모르고 있었다.
- 깊은 복사 : 실제 값을 새로운 메모리 공간에 복사하는 것
- 얕은 복사 : 주소값을 복사함(참조하고 있는 실제값은 같음)
- 구조체를 사용하다보면 알게모르게 얕은 복사를 하게 되고, 이는 오류를 발생시킬 수 있다.
- 깊은 복사의 경우 일일이 구조체 내의 모든 변수를 복사해주는 것이므로 얕은복사로 인해 발생하는 오류를 막을 수 있다.

## Code

```python
"""
# Definition for a Node.
class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = int(x)
        self.next = next
        self.random = random
"""
# input으로 주어지는 linked list 와 같은 linked list 만들기

class Solution:
    def copyRandomList(self, head: 'Optional[Node]') -> 'Optional[Node]':
        memo = {}
        def deepcopy(n):
            # Trivial returns
            if not n:
                return
            if n in memo:
                return memo[n]

            # 노드 생성 및 임시 저장소
            memo[n] = new = Node(n.val)
            # fix node properties
            new.next = deepcopy((n.next))
            new.random = deepcopy(n.random)
            return new
        return deepcopy(head)

```

## using Recursive

```python
class Solution:
    def copyRandomList(self, head: 'Optional[Node]') -> 'Optional[Node]':
        hashT = dict()
        def DFS(head: 'Node'):
            if head is None:
                return
            if head not in hashT:
                hashT[head] = Node(head.val)
                hashT[head].next = DFS(head.next)
                hashT[head].random = DFS(head.random)
            return hashT[head]
        return DFS{head}

```

## Complexity
