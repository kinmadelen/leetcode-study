# 328. Odd Even Linked List

https://leetcode.com/problems/odd-even-linked-list/

## Approach

- 홀수인 수를 찾아 차례차례 앞으로 밀어낸다.
- 앞으로 움직이는 것은 어렵다고 판단하여 홀수가 아닌 경우 뒤로 밀어내자고 생각했다.
- 하지만 홀수, 짝수를 묶어주는 형태보다는 노드의 val 값에 따라 홀수, 짝수 번째 인덱스를 연결해준다는 식으로 접근하는게 낫다.
- 문제에서 홀짝홀짝 순서로 배열이 됨을 명시 했기 때문이다.

## problem

- 홀수, 짝수를 묶어주는데에 집중하는 바람에 노드들을 움직이는데에 한계가 있었다.

## Code

### 틀린 코드

원인: TIME OUT

```python
class Solution:
    def oddEvenList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        first = head.val
        current = head.next

        while current:
            if first % 2 != 0 and current.next:
                while current.val % 2 != 0:
                    first = first.next
            else:
                if current.next:
                    current = current.next
                else:
                    first.next = None
                    break
        return head
```

### 맞는 답

```python
class Solution:
    def oddEvenList(self, head: Optional[ListNode]) -> Optional[ListNode]:

        if head is None: return None
        if head.next is None: return head

        first = head # 홀수
        current = head.next # 짝수
        evenHead = current

        while current.next is not None:
            first.next = current.next # 짝수는 홀수의 자리로
            current.next = current.next.next # 홀수는 짝수의 자리로

            first = first.next # 그 다음 홀수
            current = current.next # 그 다음 짝수

            if current is None: break

        first.next = evenHead
        return head
```

## Complexity
