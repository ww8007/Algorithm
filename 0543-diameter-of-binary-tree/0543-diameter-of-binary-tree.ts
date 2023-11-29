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

function diameterOfBinaryTree(root: TreeNode | null): number {
    let diameter = 0;

    const depth = (node: TreeNode | null): number => {
        if (!node) return 0;

        const leftDepth = depth(node.left);
        const rightDepth = depth(node.right);

        // 최대 diameter 갱신
        diameter = Math.max(diameter, leftDepth + rightDepth);

        // 노드에서의 최대 깊이 반환
        return 1 + Math.max(leftDepth, rightDepth);
    };

    depth(root);
    return diameter;
}