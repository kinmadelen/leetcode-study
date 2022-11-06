# 118. Pascal's Trangle

https://leetcode.com/problems/pascals-triangle/

## Approach

배열은 각 레벨 수와 같은 갯수로 있다. (ex. 레벨 1, 배열 1개) <br>
각 레벨의 배열을 (row, col)이라고 한다면 (ex. [(row, col)])<br>
`(row, col) = (row - 1, col - 1) + (row - 1, col)` 규칙을 발견할 수 있다. (row, col 둘다 0부터 시작한다.)<br>
이때 row 의 요소는 +1로 시작해야한다.

## Code

```python

class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        if numRows == 0:
            return []
        if numRows == 1:
            return [[1]]

        # 첫번째는 무조건 1부터 시작한다.
        result = [[1]]

        for i in range(1, numRows):
            # Create new Row
            row = []
            # row는 무조건 원소는 1부터 시작한다.
            row.append(1)

            if i > 1:
                for j in range(1, i):
                    # 직전 row의 값으로 계산한다.
                    row.append(lastRow[j] + lastRow[j - 1])
            # row의 마지막 원소도 1로 끝난다.
            row.append(1)

            # 마지막으로 계산한 row를 다음 lastRow로 넣은 다음
            # 결과로 붙여 보낸다.
            lastRow = row
            result.append(list(row))
        return result

```

## Complexity
