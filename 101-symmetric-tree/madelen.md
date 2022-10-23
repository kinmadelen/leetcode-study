# 101. Symmetric Tree

https://leetcode.com/problems/symmetric-tree

## Approach

왼쪽과 오른쪽 노드를 하나씩 큐에 삽입하면서 서로 같은지 확인한다. 둘 중 하나가 다른 값이면 바로 false를 반환하고 함수를 종료한다.

```text
isSymmetric(root) → boolean
  Pre: root is the root node of the tree
  Post: we have determined if the tree is symmetry or not

  q ← Queue{ root.left, root.right }

  WHILE q is not empty
    L ← q.pop
    R ← q.pop

    IF (L and R == ø) or (R and L == ø)
      RETURN false
    ELSIF L and R
      IF L.val != R.val
        RETURN false
      END IF

      q.push { L.left, R.right, L.right, R.left }
    END IF
  END WHILE

  RETURN true
END
```

## Code

```ts
function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true;

  const q: TreeNode[] = [];
  q.push(root.left);
  q.push(root.right);

  while (q.length) {
    let left: TreeNode = q.shift();
    let right: TreeNode = q.shift();

    if (!left && right) return false;
    if (left && !right) return false;
    if (left && right) {
      if (left.val != right.val) return false;
      q.push(left.left);
      q.push(right.right);
      q.push(left.right);
      q.push(right.left);
    }
  }

  return true;
}
```

## Complexity

**시간 복잡도** <br />
최악의 경우 모든 노드를 확인하기 때문에 **O(V)**, `V = vertex`.

**공간 복잡도** <br />
왼쪽과 오른쪽 서브트리의 노드를 전부 큐에 삽입하며 확인하기 때문에 공간 복잡도는 **O(V)**, `V = vertex`.
