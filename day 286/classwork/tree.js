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
