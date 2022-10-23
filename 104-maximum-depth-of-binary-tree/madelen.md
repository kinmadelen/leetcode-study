# 104. Maximum Depth of Binary Tree

https://leetcode.com/problems/maximum-depth-of-binary-tree/

## Approach

`depth(node, level)` 형식의 함수를 재귀로 호출해서 `node`가 `null`일 때까지 트리 깊숙히 파고 들어간다 :p

`node.left`또는 `node.right`은 다음 레이어에 존재하므로 `level + 1`을 해서 호출한다.
`null`에 도달 했을 때, 현재 `level`의 값과 깊이 `d`의 값을 비교해서 더 큰 값을 저장한다.

---

풀고 나서 찾아보니 아래와 같이 간단히 가능하다.

```text
depth(root) → number
  Pre: root is the root of the tree
  Post: we know the maximum depth

  RETURN root == ø ? 0 : MAX(depth(root.L), depth(root.R)) + 1;
END
```

## Code

```ts
function maxDepth(root: TreeNode | null): number {
  let d: number = 0;

  const depth = (node: TreeNode | null, level: number) => {
    if (node === null) return;
    node.left && depth(node.left, level + 1);
    node.right && depth(node.right, level + 1);
    d = level > d ? level : d;
  };

  depth(root, 1);
  return d;
}
```

## Complexity

시간 복잡도 <br />
모든 노드를 순회하기 때문에 **O(V)**, `V = vertex`

공간 복잡도 <br />
재귀를 사용하기 때문에 최악의 경우 **O(V)**, `V = vertex`. 평균적으로는 **O(logn)**.
