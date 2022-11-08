# 171. Excel Sheet Column Number

https://leetcode.com/problems/excel-sheet-column-number/

## Approach

- 알파벳은 26개씩 반복되므로 주어진 값을 알파벳으로 구성된 26진수라고 생각한다.
- ASCII 를 통해 A부터 Z까지의 숫자를 우선 구한다.
- 주어진 값을 하나하나 위치에 따라 26을 곱해준다 (26^N)
- 알파벳 2개부터는 26을 두번 곱하면 되기 때문에 26^2
- AA(27): 0*26+(1-1+1) , 1*26+(1-1+1)
- BA(53): 0*26+(2-1+1), 1*26+(1-1+1)

## Code

```python
class Solution:
    def titleToNumber(self, columnTitle: str) -> int:
        nums = 0
        for column in columnTitle:
                nums = nums * 26 + (ord(column) - ord('A') + 1) # ord: 유니코드 정수를 반환해줌
        return nums
```

## Complexity

문자의 갯수만큼 loop를 돌아야하므로 O(N) (N은 문자의 갯수)
