# 1290. Convert Binary Number in a Linked List to Integer

https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/

## Approach

- binary to base 10
- list를 string 타입의 배열로 만든다. (나중에 하나의 정수로 만드는 ''.join을 사용하기 위해서는 string type list여야함)
- ''.join을 통해 한 정수값으로 만든다.
- int()를 통해 base 10으로 만든다.

## problem

없었음

## Code

```python
class Solution:
    def getDecimalValue(self, head: ListNode) -> int:
        bit_numbers = []

        while head is not None:
            bit_numbers.append(str(head.val))
            head = head.next
        bit_number = ''.join(bit_numbers)
        return int(bit_number, 2)
```

## Complexity

list를 처음부터 끝까지 loop하므로 O(N)
