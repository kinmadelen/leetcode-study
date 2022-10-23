# 104. Maximum Depth of Binary Tree

https://leetcode.com/problems/maximum-depth-of-binary-tree/

## Approach

## Code

```cpp
class Solution {
public:
    int maxDepth(TreeNode* root) {
      if(root == nullptr) return 0;

      if(root -> left == nullptr && root -> right == nullptr) {
        return 1;
      }else {
        int nextLevel = 2;
        return max(dfs(root -> left, nextLevel), dfs(root -> right, nextLevel));
      }
    }

    int dfs(TreeNode* root, int level) {
      if(root == nullptr) {
        return level -1;
      }

      if(root -> left == nullptr && root -> right == nullptr) {
        return level;
      }else {
        int nextLevel = level + 1;
        return max(dfs(root -> left, nextLevel), dfs(root -> right, nextLevel));
      }
    }
};
```

## Complexity
