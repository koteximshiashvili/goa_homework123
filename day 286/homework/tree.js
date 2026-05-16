function preorder(root) {
  if (!root) return [];
  return [root.val, ...preorder(root.left), ...preorder(root.right)];
}

function inorder(root) {
  if (!root) return [];
  return [...inorder(root.left), root.val, ...inorder(root.right)];
}

function postorder(root) {
  if (!root) return [];
  return [...postorder(root.left), ...postorder(root.right), root.val];
}


function getHeight(root) {
    if (root === null) {
        return -1;
    }

    const leftHeight = getHeight(root.left);
    const rightHeight = getHeight(root.right);

    return Math.max(leftHeight, rightHeight) + 1;
}

function maxDepth(root) {
    if (root === null) {
        return -1;
    }

    const leftHeight = getHeight(root.left);
    const rightHeight = getHeight(root.right);

    return Math.max(leftHeight, rightHeight) + 1;
}

function isBalanced(root) {
  function check(node) {
    if (!node) return 0;

    let left = check(node.left);
    if (left === -1) return -1;

    let right = check(node.right);
    if (right === -1) return -1;

    if (Math.abs(left - right) > 1) return -1;

    return 1 + Math.max(left, right);
  }

  return check(root) !== -1;
}


function diameterOfBinaryTree(root) {
  let diameter = 0;

  function dd(node) {
    if (!node) return 0;

    let left = dd(node.left);
    let right = dd(node.right);

    diameter = Math.max(diameter, left + right);

    return 1 + Math.max(left, right);
  }

  dd(root);
  return diameter;
}

function isSymmetric(root) {
  function isMirror(a, b) {
    if (!a && !b) return true;
    if (!a || !b) return false;

    return (
      a.val === b.val &&
      isMirror(a.left, b.right) &&
      isMirror(a.right, b.left)
    );
  }

  return isMirror(root, root);
}

function isValidBST(root) {
  function validate(node, min, max) {
    if (!node) return true;

    if (node.val <= min || node.val >= max) return false;

    return (
      validate(node.left, min, node.val) &&
      validate(node.right, node.val, max)
    );
  }

  return validate(root, -Infinity, Infinity);
}


function invertTree(root) {
  if (!root) return null;

  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  invertTree(root.left);
  invertTree(root.right);

  return root;
}

function lowestCommonAncestor(root, p, q) {
  if (!root || root === p || root === q) return root;

  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);

  if (left && right) return root;

  return left ? left : right;
}

function string(root) {
  let result = [];

  function dd(node) {
    if (!node) {
      result.push("null");
      return;
    }

    result.push(node.val);
    dd(node.left);
    dd(node.right);
  }

  dd(root);
  return result.join(",");
}

function treeToSortedArray(root) {
  return inorder(root);
}

function deleteNode(root, key) {
  if (!root) return null;

  if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else {
    if (!root.left) return root.right;
    if (!root.right) return root.left;

    let min = root.right;
    while (min.left) {
      min = min.left;
    }

    root.val = min.val;
    root.right = deleteNode(root.right, min.val);
  }

  return root;
}

