# 108. Convert Sorted Array to Binary Search Tree

https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

## Approach

문제 예제를 보면 BST를 inorder 순회 한 것과 같기 때문에, inorder한 값을 가지고 BST를 다시 만들면 된다.

![Tree1](https://assets.leetcode.com/uploads/2021/02/18/btree1.jpg)

```text
Input: nums = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]

Explanation: [0,-10,5,null,-3,null,9] is also accepted.
```

배열에서 주어진 구간 (`low`, `high`)의 중간 부분을 재귀적으로 찾아서 서브트리를 추가하는 방식.

## Code

```ts
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function helper(nums: number[], low: number, high: number): TreeNode | null {
  if (low > high) return null;

  const mid = low + ((high - low) >> 1);

  let root = new TreeNode(
    nums[mid],
    helper(nums, low, mid - 1),
    helper(nums, mid + 1, high)
  );
  return root;
}

function sortedArrayToBST(nums: number[]): TreeNode | null {
  return helper(nums, 0, nums.length - 1);
}
```

첫 번째 예제에서 두 번째 그래프 방식으로 구축하게 된다.

```text
Input: nums = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]

Explanation: [0,-10,5,null,-3,null,9] is also accepted:
```

![Tree2](https://assets.leetcode.com/uploads/2021/02/18/btree2.jpg)

## Complexity

- 시간 복잡도 **O(n)**, `n` is number of nodes
