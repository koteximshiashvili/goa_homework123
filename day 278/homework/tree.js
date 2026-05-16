class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinaryTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        const newNode = new Node(value)
        if(!this.root){
            this.root = newNode;
            return;
        }
        while (true){
            if (value < this.root.value) {
                if(!this.root.left) {
                    this.root.left = newNode;
                    break;
                }
                this.root = this.root.left;
            }
            else {
                if(!this.root.right) {
                    this.root.right = newNode;
                    break;
                }
                this.root = this.root.right

            }
        }

    }
    inOrder(node, res=[]) {
        if (node !== null) {
            this.inOrder(node.left, res);
            res.push(node.value);
            this.inOrder(node.right, res);
        }
        return res;
    }
    preorder(node, res=[]) {
        if (node !== null) {
            res.push(node.value);
            this.preorder(node.left, res);
            this.preorder(node.right, res);
        }
        return res;
    }

    postorder(node, res=[]) {
        if (node !== null) {
            this.postorder(node.left, res);
            this.postorder(node.right, res);
            res.push(node.value);
        }
        return res;
    }
}