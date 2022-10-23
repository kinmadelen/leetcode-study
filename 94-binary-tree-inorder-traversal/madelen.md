# 94. Binary Tree Inorder Traversal

https://leetcode.com/problems/binary-tree-inorder-traversal/

## Approach

재귀를 사용하여 쉽게 구현할 수 있다.

```text
inorder(node) → Node
    Pre: node is any arbitrary node in the list
    Post: we have traversed the list in inorder

    IF node == ø
        RETURN
    END IF

    inorder(node.left)
    print node.value
    inorder(node.right)
END
```

## Code

```ts
function inorder(root: TreeNode | null, res: number[]): number[] {
  if (!root) return res;

  res = inorder(root.left, res);
  res.push(root.val);
  res = inorder(root.right, res);

  return res;
}

function inorderTraversal(root: TreeNode | null): number[] {
  if (!root) return [];
  let res: number[] = inorder(root, []);

  return res;
}
```

## Complexity

- Time Complexity: **O(N)**
- Space Complexity: **O(N)**
