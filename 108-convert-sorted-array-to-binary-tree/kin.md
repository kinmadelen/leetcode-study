# 108. Convert Sorted Array to Binary Search Tree

https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

## Approach

- 오른차순으로 정렬된 배열을 높이 균형 이진 탐색 트리로 반환하기
- 높이 균형? 모든 노드의 두 서브 트리간 깊이 차이가 1 이하인 것

아래의 문제를 풀기 위해서는 이진탐색트리의 특징을 정확히 숙지해야한다.

- BST를 만들기 위해서는 정렬된 배열을 이진 검색으로 계속 쪼개 나가기만 하면 된다.
- 정렬되어 있지 않으면 사용할 수 없다.
- 정렬된 배열을 기준으로 한다.

- 예시로 한 배연로 완전 이진 트리 형태를 만들면 아래와 같다.
  ![image](https://user-images.githubusercontent.com/48708746/199827079-dc64e5b8-c5b5-4058-9c42-fc0b5c4d8cb7.png)
- 위의 그림에서 정확히 한 번의 이진 검색 결과가 각각의 노드가 된다.

## Code

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sortedArrayToBST(self, nums: List[int]) -> TreeNode:
        def sortToBinarySearch(nums):
            if len(nums) == 0:
                return None
            middle = len(nums) // 2 # 중앙값을 갖도록 내림값을 리턴(//)
            # 분할 정복 구조
            root = TreeNode(nums[middle])
            root.left = sortToBinarySearch(nums[:middle]) # 왼쪽
            root.right = sortToBinarySearch(nums[middle + 1 :]) # 오른쪽
            return root

        return sortToBinarySearch(nums)

```

## Complexity

파이선 slicing 시간복잡도가 O(N)이기 때문에 본 문제의 시간복잡도는 O(NlogN)
