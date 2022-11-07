# 136.Sigle Number

https://leetcode.com/problems/single-number/

## Approach

#### solution1

- dictionary 값(immutable key, mutable value로 맵핑되어 있는 순서 없는 집합)을 만든다.
- nums에 어느 한 요소가 중복으로 존재하면 dict\_[i]에는 1이 계속 더해지고 그렇지 않으면 1만 존재하게 된다.
- 마지막에 dict\_에서 가장 작은 값을 가지고 있는 값을 가져오면 그 값이 nums에서 distinct한 값이 되게 된다.

#### solution2

- python의 연산자 ^(XOR, 배타적논리합)을 사용한다.
- nums에 있는 값들을 전부 비트부호값으로 바꾸어 XOR을 수행하게 된다.
- 서로 비트부호가 다를 때만 참이므로 1을 반환한다. 거짓일 경우 0
- 0에 nums에 있는 숫자들을 XOR 연산을 하게 되면 동일한 숫자를 만났을 경우엔 해당 숫자들의 연산 결과가 제거되고 최종적으로 하나만 남은 숫자가 된다.

## Code

```python

class Solution:
    def singleNumber1(self, nums: List[int]) -> int:
        dict_ = {}
        for i in nums:
            if i not in dict_:
                dict_[i] = 1
            else:
                dict_[i] += 1
        return min(dict_, key=dict_.get)

    def singleNumber2(self, nums: List[int]) -> int:
        answer = 0
        for num in nums:
            answer = answer ^ num # ^ -> XOR
        return answer

```

## Complexity

둘다 nums 전체를 돌며 연산하기 때문에 시간복잡도는 O(N)
