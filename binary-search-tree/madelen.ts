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

  inorder(node: BSTNode<T> = this.root) {
    if (null === node) return;
    this.inorder(node?.left);
    console.log(node?.value);
    this.inorder(node?.right);
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
bst.inorder();
