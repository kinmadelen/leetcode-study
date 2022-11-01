## Binary Search Tree

![BST Example](./bst-example.svg)

## Insert & Search

- 삽입 ＆ 검색 연산의 시간 복잡도:
  - 최악의 경우 skewed tree를 생각해보면 된다. 이 경우 단순히 연결리스트와 같기 때문에 **O(n)** 이 된다. 단순하게 트리의 높이 (height)이라고 생각하면 된다 → **O(h)**
  - 탐색의 경우 평균 O(log n)

### 🔵 Insert

Iterative

```ts
class BST {
  insert(value: T) {
    if (null === this.root) {
      this.root = new BinarySearchTreeNode<T>(value);
    } else {
      let curr: BSTNode<T> = this.root;

      while (curr) {
        if (value < curr.value) {
          if (curr.left) curr = curr.left;
          else {
            curr.left = new BinarySearchTreeNode<T>(value);
            break;
          }
        } else {
          if (curr.right) curr = curr.right;
          else {
            curr.right = new BinarySearchTreeNode<T>(value);
            break;
          }
        }
      }
    }
  }
}
```

Recursive

```ts
class BST {
  insertRecur(value: T): void {
    this.root = this.insertRecurHelper(value, this.root);
  }

  insertRecurHelper(value: T, node: BSTNode<T> = this.root): BSTNode<T> {
    if (null === node) {
      return new BinarySearchTreeNode<T>(value);
    }

    if (node && value < node.value) {
      node.left = this.insertRecurHelper(value, node.left);
    } else if (node && value >= node.value) {
      node.right = this.insertRecurHelper(value, node.right);
    }

    return node;
  }
}
```

### 🔵 Search

Iterative

```ts
class BST {
  search(value: T): boolean {
    if (null === this.root) return false;

    let curr: BSTNode<T> = this.root;

    while (curr) {
      if (value === curr.value) {
        return true;
      } else if (value < curr.value) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }

    return false;
  }
}
```

Recursive

```ts
class BST {
  searchRecur(value: T, node: BSTNode<T> = this.root): boolean {
    if (!node) {
      return false;
    } else {
      if (value === node.value) return true;

      if (value < node.value) {
        return this.searchRecur(value, node.left);
      } else {
        return this.searchRecur(value, node.right);
      }
    }
  }
}
```

---

## Traversal

순회의 시간 복잡도는 전부 **O(n)** 이 된다.

### 🔵 **Preorder**

Recursive

```ts
class BST {
  preorder(node: BSTNode<T> = this.root): void {
    if (null === node) return;

    console.log(node?.value);
    this.preorder(node?.left);
    this.preorder(node?.right);
  }
}
```

Iterative

```ts
class BST {
  preorder(): void {
    if (!this.root) return;
    else {
      let stack: TreeNode<T>[] = [this.root];

      while (stack.length > 0) {
        let curr = stack.pop();
        process.stdout.write(`${curr?.value} `);

        if (curr && curr.right) stack.push(curr.right);
        if (curr && curr.left) stack.push(curr.left);
      }
    }
  }
}
```

### 🔵 **Inorder**

Recursive

```ts
class BST {
  inorder(node: BSTNode<T> = this.root): void {
    if (null === node) return;

    this.inorder(node?.left);
    console.log(node?.value);
    this.inorder(node?.right);
  }
}
```

Iterative

```ts
class BST {
  inorder(): void {
    if (!this.root) return;
    else {
      let stack: TreeNode<T>[] = [];
      let curr: TreeNode<T> = this.root;

      while (curr || stack.length > 0) {
        while (curr) {
          stack.push(curr);
          curr = curr.left;
        }

        curr = stack.pop();
        process.stdout.write(`${curr?.value} `);
        curr = curr?.right;
      }
    }
  }
}
```

### 🔵 **Postorder**

Recursive

```ts
class BST {
  postorder(node: BSTNode<T> = this.root): void {
    if (null === node) return;

    this.postorder(node?.left);
    this.postorder(node?.right);
    console.log(node?.value);
  }
}
```

Iterative

```ts
class BST {
  postorder(): void {
    if (!this.root) return;
    else {
      let stack1: TreeNode<T>[] = [this.root];
      let stack2: TreeNode<T>[] = [];
      let curr: TreeNode<T>;

      while (stack1.length > 0) {
        curr = stack1.pop();
        stack2.push(curr);

        if (curr && curr.left) stack1.push(curr.left);
        if (curr && curr.right) stack1.push(curr.right);
      }

      while (stack2.length > 0) {
        curr = stack2.pop();
        process.stdout.write(`${curr?.value} `);
      }
    }
  }
}
```
