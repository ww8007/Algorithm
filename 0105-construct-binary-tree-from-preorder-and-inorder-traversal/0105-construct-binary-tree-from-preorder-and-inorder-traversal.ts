/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    if (preorder.length === 0 || inorder.length === 0) {
        return null;
    }

    const rootVal = preorder[0];
    const rootNode = new TreeNode(rootVal);

    const mid = inorder.indexOf(rootVal);

    rootNode.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
    rootNode.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));

    return rootNode;
}