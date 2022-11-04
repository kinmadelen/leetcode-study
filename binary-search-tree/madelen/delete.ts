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

  insert(value: T): void {
    this.root = this.insertHelper(value, this.root);
  }

  insertHelper(value: T, node: BSTNode<T> = this.root): BSTNode<T> {
    if (null === node) {
      return new BinarySearchTreeNode<T>(value);
    }

    if (node && value < node.value) {
      node.left = this.insertHelper(value, node.left);
    } else if (node && value >= node.value) {
      node.right = this.insertHelper(value, node.right);
    }

    return node;
  }

  /**
   * @returns [parent, node-to-be-deleted]
   */
  findParent(value: T): [BSTNode<T>, BSTNode<T>] {
    if (!this.root) return [null, null];
    else if (value === this.root.value) return [null, this.root];
    else {
      let curr: BSTNode<T> = this.root;

      while (curr) {
        if (value < curr.value) {
          if (value === curr.left?.value) {
            return [curr, curr.left];
          }
          curr = curr.left;
        } else {
          if (value === curr.right?.value) {
            return [curr, curr.right];
          }
          curr = curr.right;
        }
      }

      return [null, null];
    }
  }

  inorderSuccessor(node: BSTNode<T>): BSTNode<T> {
    if (node) {
      if (null === node.left) return node;
      else return this.inorderSuccessor(node.left);
    }

    return node;
  }

  delete(value: T): void {
    console.log(`Deleting '${value}'`);
    let [parent, delNode] = this.findParent(value);

    // check if it's the only node in the tree
    if (delNode === this.root) {
      if (null === delNode?.left && null === delNode.right) {
        this.root = null;
        return;
      }
    }

    if (delNode) {
      // case 3: deleting node got 2 children
      if (delNode.left && delNode.right) {
        console.log('case 3 - 2 children');
        let successor = this.inorderSuccessor(delNode.right);
        if (successor) {
          this.delete(successor.value);
          delNode.value = successor.value;
        }
      }
      // case 2: deleting node got a single child
      else if (delNode.left || delNode.right) {
        console.log('case 2 - 1 child');
        let delValue = delNode.value;
        if (delNode.left) {
          delNode = delNode.left;
        } else {
          delNode = delNode.right;
        }

        if (parent?.left?.value === delValue) {
          parent.left = delNode;
        } else if (parent?.right?.value === delValue) {
          parent.right = delNode;
        } else {
          // we're deleting the root node
          this.root = delNode;
        }
      }
      // case 1: deleting node is a leaf
      else if (null === delNode.left && null === delNode.right) {
        console.log('case 1 - leaf node');
        if (parent?.left?.value === delNode.value) {
          parent.left = null;
        } else if (parent?.right?.value === delNode.value) {
          parent.right = null;
        }
      }
    }
  }

  inorder(node: BSTNode<T> = this.root) {
    if (null === node) return;

    this.inorder(node?.left);
    console.log(node?.value);
    this.inorder(node?.right);
  }
}

let tree = new BST<number>();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(1);
tree.insert(7);
tree.insert(30);
tree.insert(20);
tree.insert(35);

console.log('INORDER');
tree.inorder();
console.log('------------');

/* case 1 - leaf node */
// tree.delete(1);
// tree.inorder();
// console.log();

// tree.delete(7);
// tree.inorder();
// console.log();

// tree.delete(5);
// tree.inorder();
// console.log();

// tree.delete(35);
// tree.inorder();
// console.log();

/* case 2 - has a single child */
// tree.delete(1); // delete leaf
// tree.delete(35); // delete leaf

// tree.delete(5);
// tree.inorder();
// console.log();

// tree.delete(30);
// tree.inorder();
// console.log();

/* case 3 - has two children */
// tree.delete(5);
// tree.inorder();
// console.log();

// tree.delete(30);
// tree.inorder();
// console.log();

// tree.delete(10);
// tree.inorder();
// console.log();
