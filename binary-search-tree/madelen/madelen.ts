type BSTNode<T> = BinarySearchTreeNode<T> | null | undefined;

export class BinarySearchTreeNode<T> {
  value: T;
  left: BSTNode<T>;
  right: BSTNode<T>;

  constructor(value: T, left: BSTNode<T> = null, right: BSTNode<T> = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

export class BST<T> {
  root: BSTNode<T>;

  constructor(value: T | null = null) {
    if (null === value) this.root = null;
    else this.root = new BinarySearchTreeNode<T>(value);
  }

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
            return;
          }
        } else {
          if (curr.right) curr = curr.right;
          else {
            curr.right = new BinarySearchTreeNode<T>(value);
            return;
          }
        }
      }
    }
  }

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

  preorder(node: BSTNode<T> = this.root) {
    if (null === node) return;
    process.stdout.write(`${node?.value} `);
    this.preorder(node?.left);
    this.preorder(node?.right);
  }

  inorder(node: BSTNode<T> = this.root) {
    if (null === node) return;

    this.inorder(node?.left);
    process.stdout.write(`${node?.value} `);
    this.inorder(node?.right);
  }

  postorder(node: BSTNode<T> = this.root) {
    if (null === node) return;

    this.postorder(node?.left);
    this.postorder(node?.right);
    process.stdout.write(`${node?.value} `);
  }
}

// README의 트리 image 참고
let bst = new BST<number>();
bst.insert(5);
bst.insert(2);
bst.insert(20);
bst.insert(-5);
bst.insert(-7);
bst.insert(-3);
bst.insert(10);
bst.insert(12);
bst.insert(30);
bst.insert(35);
bst.insert(32);
bst.insert(33);
console.log('Preorder:');
bst.preorder();
console.log();

console.log('Inorder:');
bst.inorder();
console.log();

console.log('Postorder:');
bst.postorder();
console.log();

console.log(`20 in the tree? ${bst.searchRecur(20)}`);
console.log(`7 in the tree? ${bst.searchRecur(7)}`);
console.log(`15 in the tree? ${bst.searchRecur(15)}`);
console.log(`35 in the tree? ${bst.searchRecur(35)}`);
console.log(`-3 in the tree? ${bst.searchRecur(-3)}`);
