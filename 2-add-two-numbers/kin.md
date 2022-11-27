# 2. Add Two Numbers

https://leetcode.com/problems/add-two-numbers/

## Approach

- 한 리스트에 대해서 loop를 돌리며 또 다른 리스트의 노드 값과 더하기
- 만약 10 이상일 경우 새 list에 0을 넣고 올림값을 저장하는 변수에 1을 선언
- 만약 10이 넘지 않고 올림값이 있을 경우 새 list에 두 노드를 더한 값에 변수를 더해준다.

## problem

- 스스로 풀기 실패
- 올림값에 1을 선언하고 무작정 값이 있을 경우 두 노드값에 더해주는 경우는 하드코딩
- 만약 index 0에서 올림값이 발생하면 index 2까지 올림값을 더하는 상황이 발생한다.
- 고로 올림값이 발생했을 경우 그 다음 값이 바로 적용될 수 있도록 처리해야한다.
- 그런데 이걸 어떻게 해야할지 감이 잘 오지 않았다.
- 무엇보다 문제를 잘못읽어서 reverse order (심지어 볼드체-\_-)를 놓쳤다.

## My Code(fail)

```python
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        new_list = []
        round_up = 0
        while l1.next is not None:
            if l1.val + l2.val >= 10:
                round_up = 1
                new_list.append(0)
            else:
                if round_up:
                    new_list.append(l1.val + l2.val + round_up)
        return new_list

```

## Other's Code(success)

- carry 올림자리를 보관하는 변수를 생성한다.
- l1, l2, carry가 존재하는 동안 loop를 한다.
-

```python

class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        result = ListNode()
        current = result
        carry = 0 # 올림자리 보관

        while l1 or l2 or carry:
            current.next = ListNode()
            current = current.next
            num1 = num2 = 0
            if l1:
                num1 = l1.val
                l1 = l1.next
            if l2:
                num2 = l2.val
                l2 = l2.next
            current.val = (num1 + num2 + carry) % 10
            carry = (num1 + num2 + carry) // 10
        return result.next
```

## Complexity

각 리스트를 처음부터 끝까지 loop 하므로 O(n)
