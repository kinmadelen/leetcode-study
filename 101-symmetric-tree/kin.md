# 101. Symmetric Tree

https://leetcode.com/problems/symmetric-tree/

## Approach

DFS(Depth Frist Search, 깊이 우선 탐색)
갈 수 있을 때까지 계속 진행하다 더이상 진행할 수 없으면 뒤로 돌아와 다시 탐색<br>

두가지 방법으로 구현이 가능하다.

- 인접행렬(adjacent matrix)로 구현
- 인접리스트(adjacent list)로 구현

## Code

```cpp
class Solution {
public:
    bool isSymmetric(TreeNode* root) {
      if(root == nullptr) return true;

      if(root -> left == nullptr && root -> right == nullptr) return true;
      if(root -> left == nullptr || root -> right == nullptr) return false;

      stack<TreeNode*> dfs;
      dfs.push(root);
      dfs.push(root);
      while(dfs.empty() == false) {
        TreeNode* t1 = dfs.top();
        dfs.pop();
        TreeNode* t2 = dfs.top();
        dfs.pop();

        if(t1 -> val != t2 -> val) {
          return false;
        }
        if(t1 -> left != nullptr && t2 -> right != nullptr) {
          dfs.push(t1 -> left);
          dfs.push(t2 -> right);
        }else if(t1 -> left != nullptr || t2 -> right != nullptr) {
          return false;
        }

        if(t1 -> right != nullptr && t2 -> left != nullptr) {
          dfs.push(t1 -> right);
          dfs.push(t2 -> left);
        }else if(t1 -> right != nullptr || t2 -> left != nullptr) {
          return false;
        }
      }
      return true;
    }
};
```

## Complexity

DFS는 정점의 개수에 따라 호출이 되므로 `dfs * 정점의 개수` 가 시간 복잡도가 된다.<br>
dfs 는 두가지 방법으로 구현할 수 있는데 구현 방법에 따라 시간복잡도가 다르다.
(정점의 수 : N, 간선의 수: E)

- 인접행렬(adjacent matrix)에서의 시간복잡도
  모든 정점을 다 찾아봐야하기 때문에 O(N^2)
- 인접리스트(adjacent list)에서의 시간복잡도
  O(N+E)
