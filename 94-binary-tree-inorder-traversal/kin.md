# 94. Binary Tree Inorder Traversal

https://leetcode.com/problems/binary-tree-inorder-traversal/

## Approach

Binary Tree Inorder Traversal (중위순회)

1. First, visit all the nodes in the left subtree
2. Then the root node
3. Visit all the nodes in the right subtree

## Code

```cpp
class Solution {
public:
    vector<int> inorderTraversal(TreeNode* root) {
      if(root == nullptr) return {};
      vector<int> resultList;

      stack<TreeNode*> stack;
      TreeNode* pointer = root;

      while(pointer || !stack.empty()) {
        while(pointer) {
          stack.push(pointer);
          pointer = pointer -> left;
        }

        pointer = stack.top();
        stack.pop();

        resultList.push_back(pointer->val);
        pointer = pointer->right;
      }
      return resultList;
    }
};
```

## Complexity

이진탐색트리의 시간복잡도는 트리의 높이에 따라 증가한다. <br>

따라서 균형적으로 생성되어있는 트리 높이를 H라고 한다면 H에 비례해 O(H) 시간복잡도를 가지게 되는데,
이는 O(logN)으로도 표기할 수 있다. <br>

모든 노드가 빈자리 없이 꽉 차있는 상태를 '포화 이진 탐색 트리' 라고 하는데, 이렇게 구성된 상태가 가장 최적이 상태이다. <br>

포화 이진 탐색 트리를 구성하고 있는 노드 갯수를 N이라고 했을 때 트리 높이와의 관계는 아래와 같다.

```
N = 2^(H+1) - 1

2^(H+1) = N + 1

...

H = log2(N+1) - 1
```

∴ 이진 탐색 트리는 트리의 높이에 비례해 시간 복잡도가 증가하므로 위의 식은 O(logN)으로 표현할 수 있다.
